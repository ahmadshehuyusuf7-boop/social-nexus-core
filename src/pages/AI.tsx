import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User, Wand2, Zap, ShieldCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const MOCK_AI_MESSAGES = [
  { id: "1", text: "Hello! I'm your Chat Post AI assistant. How can I help you today?", sender: "ai" },
  { id: "2", text: "Can you help me write a caption for my new travel photo?", sender: "user" },
  { id: "3", text: "Of course! Tell me more about the photo. Where was it taken and what's the vibe?", sender: "ai" },
];

const AIPage = () => {
  const [messages, setMessages] = useState(MOCK_AI_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newUserMsg = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages(prev => [...prev, newUserMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = { 
        id: (Date.now() + 1).toString(), 
        text: "That sounds like a beautiful moment! Here's a suggestion: 'Lost in the beauty of nature, finding myself one step at a time. ✨🗺️ #Wanderlust #TravelDiaries'", 
        sender: "ai" 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 2000);
  };

  const aiFeatures = [
    { icon: Wand2, label: "Content Gen", color: "bg-purple-100 text-purple-600" },
    { icon: Zap, label: "Image Enhance", color: "bg-blue-100 text-blue-600" },
    { icon: ShieldCheck, label: "Auto-Mod", color: "bg-green-100 text-green-600" },
    { icon: Search, label: "Smart Search", color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-130px)] bg-slate-50">
      <div className="p-4 bg-white border-b border-border shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Chat Post AI</h2>
            <p className="text-xs text-muted-foreground">Your personal creative companion</p>
          </div>
        </div>

        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
          {aiFeatures.map((feature, i) => (
            <Card key={i} className="flex-shrink-0 flex items-center space-x-2 px-3 py-2 rounded-xl border-none shadow-sm bg-white cursor-pointer hover:bg-slate-50 transition-colors">
              <div className={`p-1.5 rounded-lg ${feature.color}`}>
                <feature.icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold whitespace-nowrap">{feature.label}</span>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`flex max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"} items-end space-x-2`}>
              <Avatar className="w-8 h-8 mb-1">
                {msg.sender === "ai" ? (
                  <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white">
                    <Bot className="w-5 h-5" />
                  </div>
                ) : (
                  <AvatarImage src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-2-3cfbee39-1776542731952.webp" />
                )}
                <AvatarFallback>{msg.sender === "ai" ? "AI" : "U"}</AvatarFallback>
              </Avatar>
              <div 
                className={`px-4 py-3 rounded-2xl shadow-sm text-sm ${
                  msg.sender === "user" 
                    ? "bg-primary text-primary-foreground rounded-br-none mx-2" 
                    : "bg-white text-slate-800 rounded-bl-none border border-slate-100 mx-2"
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start items-center space-x-2 px-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
            <div className="bg-white border border-slate-100 px-4 py-2 rounded-2xl flex space-x-1">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-border">
        <div className="flex items-center space-x-2 max-w-2xl mx-auto">
          <Input 
            placeholder="Ask AI anything..." 
            className="flex-1 h-12 bg-slate-50 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-purple-500/20"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button 
            className="rounded-2xl h-12 w-12 bg-gradient-to-tr from-purple-600 to-indigo-600 hover:opacity-90 shadow-lg p-0"
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-[10px] text-center text-muted-foreground mt-2">AI can make mistakes. Check important info.</p>
      </div>
    </div>
  );
};

export default AIPage;