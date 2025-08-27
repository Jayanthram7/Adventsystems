import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, MessageCircle, Bot, User, Search, ChevronDown } from "lucide-react";
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

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);        // panel open
  const [isMinimized, setIsMinimized] = useState(true); // show small button initially
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [unread, setUnread] = useState(0);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      // open => reset unread
      setUnread(0);
      // focus input after short delay so it works on mobile
      setTimeout(() => inputRef.current?.focus(), 120);
    }
    // ensure we only scroll when panel is open
    if (isOpen) scrollToBottom();
  }, [isOpen, messages.length]);

  // Welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
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
  }, [isOpen, messages.length]);

  // Lock background scroll when open on mobile (<= 639px)
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;
    if (isOpen && isMobile) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
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

      // if user minimized the widget, show unread
      if (!isOpen) {
        setUnread(u => u + 1);
      }
    },
    onError: (_error) => {
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        message: "I apologize for the technical issue. Please try your question again.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      if (!isOpen) setUnread(u => u + 1);
    },
  });

  const handleSendMessage = () => {
    const message = inputValue.trim();
    if (!message || chatMutation.isPending) return;
  
    const userMessage: Message = {
      id: `user_${Date.now()}`,
      message,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsMinimized(false);
    setIsOpen(true);
  
    // 👉 Custom check for "charges" or "price"
    if (/charges?|price/i.test(message)) {
      const customReply: Message = {
        id: `custom_${Date.now()}`,
        message:
          "As an Assistant I can help you with TallyPrime related usage queries. For details regarding charges and prices please contact: Advent Systems 9842276297",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, customReply]);
      return; // stop here, don’t call API
    }
  
    // Otherwise call API
    chatMutation.mutate(message);
  };
  

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Toggle open from minimized button
  const handleOpenFromMinimized = () => {
    setIsMinimized(false);
    setIsOpen(true);
    setUnread(0);
  };

  // Minimize to small button
  const handleMinimize = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  // Close completely (optional) - here we minimize so user can reopen
  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  return (
    <>
      {/* Floating container */}
      <div className="fixed bottom-6 right-6 z-[9999]">

        {/* Minimized button (shown when minimized) */}
        {isMinimized && (
          <button
            aria-label="Open Chat"
            onClick={handleOpenFromMinimized}
            className="relative group px-4 h-14 rounded-full bg-tally-blue shadow-lg flex items-center justify-center gap-2 ring-1 ring-black/5 hover:scale-105 transform transition"
            title="Chat with us"
          >
            <MessageCircle className="w-6 h-6 text-white" />

            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Tally Assistant</span>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                NEW
              </span>
            </div>

            {unread > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center shadow">
                {unread > 9 ? "9+" : unread}
              </span>
            )}
          </button>
        )}

        {/* Expanded chat panel */}
        {isOpen && (
          <div
            className="
              w-[340px] md:w-[420px] max-h-[85vh] flex flex-col rounded-xl shadow-2xl bg-white overflow-hidden
              md:fixed md:bottom-6 md:right-6
              mobile-chat-panel
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0f34a3]">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-tally-blue" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-semibold">TallyPrime Assistant</h4>
                    <span className="text-white/80 text-xs">✨</span>
                  </div>
                  <p className="text-blue-100 text-xs">Ready to help with your business needs</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  aria-label="Minimize chat"
                  onClick={handleMinimize}
                  className="p-1 rounded hover:bg-white/10 transition"
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </button>

                <button
                  aria-label="Close chat"
                  onClick={handleClose}
                  className="p-1 rounded hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-gradient-to-b from-white to-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  {!message.isUser && (
                    <div className="w-8 h-8 bg-tally-blue rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`
                      ${message.isUser
                        ? "bg-tally-blue text-white ml-3 border border-tally-blue/20 shadow-md"
                        : "bg-white text-gray-700 mr-3 border border-gray-200 shadow-sm"}
                      rounded-lg p-3 max-w-[78%] transition-all duration-200 hover:shadow-lg
                    `}
                  >
                    <div
                      className="whitespace-pre-line text-sm"
                      dangerouslySetInnerHTML={{
                        __html: message.message.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </div>

                  {message.isUser && (
                    <div className="w-8 h-8 bg-tally-orange rounded-full flex items-center justify-center flex-shrink-0 ml-3">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading / typing indicator */}
              {chatMutation.isPending && (
                <div className="flex items-start space-x-3 animate-pulse">
                  <div className="w-8 h-8 bg-tally-blue rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 shadow">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-tally-blue rounded-full animate-bounce" />
                      <div style={{ animationDelay: "0.15s" }} className="w-2 h-2 bg-tally-blue rounded-full animate-bounce" />
                      <div style={{ animationDelay: "0.3s" }} className="w-2 h-2 bg-tally-blue rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-100 p-3 bg-white safe-bottom">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tally-blue h-4 w-4" />
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about TallyPrime..."
                    className="pl-10 pr-3"
                    disabled={chatMutation.isPending}
                    aria-label="Chat input"
                  />
                </div>

                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || chatMutation.isPending}
                  className="bg-tally-orange hover:bg-tally-orange-hover text-white px-3 py-2"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-center text-xs text-gray-500 mt-2">
                This assistant uses AI. Verify critical details.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
