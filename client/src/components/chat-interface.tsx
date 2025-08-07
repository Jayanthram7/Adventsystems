import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Send, MessageCircle, Bot, User, Search } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatResponse {
  response: string;
  sessionId: string;
}

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      const welcomeMessage: Message = {
        id: `welcome_${Date.now()}`,
        message: `Welcome to TallyPrime Assistant! I'm here to help you with:

• Accounting and voucher entries
• Inventory and stock management  
• GST compliance and tax queries
• Financial reporting and analysis
• TallyPrime features and troubleshooting

What would you like to know today?`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const chatMutation = useMutation({
    mutationFn: async (message: string): Promise<ChatResponse> => {
      const response = await apiRequest("POST", "/api/chat", {
        message,
        sessionId,
      });
      return response.json();
    },
    onSuccess: (data) => {
      const aiMessage: Message = {
        id: `ai_${Date.now()}`,
        message: data.response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    },
    onError: (error) => {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        message: "I apologize for the technical issue. Please try your question again.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    },
  });

  const handleSendMessage = () => {
    const message = inputValue.trim();
    if (!message || chatMutation.isPending) return;

    // Add user message
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      message,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Send to API
    chatMutation.mutate(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Preview Card */}
      <div className="lg:sticky lg:top-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Chat Header */}
          <div className="from-tally-blue to-blue-300 px-6 py-4 bg-[#0f34a3]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-tally-blue" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">TallyPrime Assistant</h3>
                  <p className="text-blue-100 text-sm">Ready to help with your business needs</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white text-sm">Online</span>
              </div>
            </div>
          </div>

          {/* Chat Preview Messages */}
          <div className="p-6 space-y-4 h-64 overflow-y-auto">
            <div className="flex items-start space-x-3 group">
              <div className="w-8 h-8 bg-tally-blue rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:shadow-lg group-hover:scale-105">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gray-50 rounded-lg p-3 flex-1 transition-all duration-200 hover:bg-gray-100 hover:shadow-md hover:border hover:border-gray-200 cursor-pointer">
                <p className="text-gray-700 text-sm">Hello! I'm your TallyPrime Assistant. I can help you with accounting, inventory management, GST compliance, and business insights. What would you like to know?</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 justify-end group">
              <div className="bg-tally-blue text-white rounded-lg p-3 max-w-xs transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:border hover:border-blue-300 cursor-pointer">
                <p className="text-sm">How do I create a sales voucher?</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 group">
              <div className="w-8 h-8 bg-tally-blue rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:shadow-lg group-hover:scale-105">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-gray-50 rounded-lg p-3 flex-1 transition-all duration-200 hover:bg-gray-100 hover:shadow-md hover:border hover:border-gray-200 cursor-pointer">
                <p className="text-gray-700 text-sm">To create a sales voucher in TallyPrime: Go to Gateway of Tally → Vouchers → F8 (Sales). Select the customer, add items, specify quantities and rates. Press Enter to save. Would you like more details on any specific step?</p>
              </div>
            </div>
          </div>

          {/* Start Chatting Button */}
          <div className="p-6 border-t border-gray-100">
            <Button 
              onClick={() => setIsOpen(true)}
              className="w-full bg-tally-orange hover:bg-tally-orange-hover text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Chatting
              <Send className="h-4 w-4 ml-2" />
            </Button>
            <p className="text-center text-gray-500 text-sm mt-3">
              Powered by Advanced AI • Free to use
            </p>
          </div>
        </div>
      </div>
      {/* Full Screen Chat Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-none w-screen h-screen m-0 p-0 flex flex-col">
          {/* Chat Header */}
          <div className="from-tally-blue to-blue-600 px-6 py-4 flex items-center justify-between flex-shrink-0 bg-[#0f34a3]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-tally-blue" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">TallyPrime Assistant</h3>
                <p className="text-blue-100 text-sm">Your AI business companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-tally-orange hover:bg-transparent transition-all duration-200 hover:scale-110"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-start space-x-3 group ${message.isUser ? 'justify-end' : ''}`}>
                {!message.isUser && (
                  <div className="w-10 h-10 bg-tally-blue rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:shadow-lg group-hover:scale-105">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                )}
                <div className={`rounded-lg p-4 max-w-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] shadow-md ${
                  message.isUser 
                    ? 'bg-tally-blue text-white hover:bg-blue-700 hover:shadow-lg hover:border hover:border-blue-300' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-lg hover:border hover:border-gray-200'
                }`}>
                  <div 
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: message.message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }}
                  />
                </div>
                {message.isUser && (
                  <div className="w-10 h-10 bg-tally-orange rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:shadow-lg group-hover:scale-105">
                    <User className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Loading Indicator */}
            {chatMutation.isPending && (
              <div className="flex items-start space-x-3 group animate-pulse">
                <div className="w-10 h-10 bg-tally-blue rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-gray-50 rounded-lg p-3 shadow-md border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-tally-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-tally-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-tally-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-6 flex-shrink-0 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tally-blue h-4 w-4" />
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about TallyPrime..."
                  className="pl-10 transition-all duration-200 focus:shadow-lg focus:border-tally-blue hover:shadow-md border-2 border-blue-200 focus:border-tally-blue"
                  disabled={chatMutation.isPending}
                />
              </div>
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || chatMutation.isPending}
                className="bg-tally-orange hover:bg-tally-orange-hover text-white px-6 transition-all duration-200 hover:shadow-lg transform hover:scale-105 disabled:hover:scale-100"
              >
                Send
                <Send className="h-4 w-4 ml-2 transition-transform duration-200" />
              </Button>
            </div>
            <p className="text-gray-500 text-xs mt-2 text-center transition-colors duration-200 hover:text-gray-700">
              This assistant uses AI and may occasionally provide inaccurate information. Please verify important details.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
