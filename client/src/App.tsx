import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import About from "@/pages/about"
import Products from "@/pages/products"
import Chatbot from "@/components/chatbot"
import { useLocation } from "wouter";
import Learn from "@/pages/learn";
function Router() {
  return (
    
    <Switch>
      
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/learn" component={Learn} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {location !== "/" && <Chatbot />}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
