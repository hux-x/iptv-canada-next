import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Reseller from "./pages/Reseller";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/reseller" element={<Reseller />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        <FloatingWhatsAppButton /> {/* visible on all pages */}
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
