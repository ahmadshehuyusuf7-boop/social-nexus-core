import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import SplashScreen from "@/pages/SplashScreen";
import Onboarding from "@/pages/Onboarding";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Chat from "@/pages/Chat";
import Post from "@/pages/Post";
import Explore from "@/pages/Explore";
import Profile from "@/pages/Profile";
import AI from "@/pages/AI";
import ChatWindow from "@/pages/ChatWindow";
import BottomNav from "@/components/layout/BottomNav";
import TopHeader from "@/components/layout/TopHeader";

function App() {
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Toaster position="top-center" />
        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            <Routes key="auth">
              {!onboarded ? (
                <Route path="*" element={<Onboarding onComplete={() => setOnboarded(true)} />} />
              ) : (
                <Route path="*" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
              )}
            </Routes>
          ) : (
            <>
              <TopHeader />
              <main className="flex-1 overflow-y-auto pb-20">
                <Routes key="main">
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/chat/:id" element={<ChatWindow />} />
                  <Route path="/post" element={<Post />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/ai" element={<AI />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <BottomNav />
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;