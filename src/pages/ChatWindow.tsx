import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Phone, Video, Info, Send, Smile, Paperclip, Mic, CheckCheck } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const MOCK_MESSAGES = [
  { id: "1", text: "Hey! How's it going?", sender: "other", time: "10:00 AM" },
  { id: "2", text: "Pretty good, just working on a new app! 🚀", sender: "me", time: "10:02 AM" },
  { id: "3", text: "That sounds awesome. Is it Chat Post?", sender: "other", time: "10:05 AM" },
  { id: "4", text: "Yes! Combining WhatsApp and Instagram vibes.", sender: "me", time: "10:06 AM" },
  { id: "5", text: "I love that concept. Let me know if you need a beta tester!", sender: "other", time: "10:10 AM" },
];

const ChatWindow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-background/80 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-1-1dbe6758-1776542732095.webp" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-sm">alex_designs</h3>
              <span className="text-[10px] text-green-500 font-medium">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Phone className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Video className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Info className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://i.pinimg.com/originals/ab/ab/60/abab600fbc00677d70bc6d78fa27ba7e.jpg')] bg-repeat bg-opacity-5"
      >
        {MOCK_MESSAGES.map((msg) => (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-sm text-sm ${
                msg.sender === "me" 
                  ? "bg-primary text-primary-foreground rounded-tr-none" 
                  : "bg-card text-foreground rounded-tl-none border border-border"
              }`}
            >
              <p>{msg.text}</p>
              <div className={`flex items-center justify-end space-x-1 mt-1 ${msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                <span className="text-[9px]">{msg.time}</span>
                {msg.sender === "me" && <CheckCheck className="w-3 h-3 text-blue-300" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-background">
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-muted/50 rounded-2xl flex items-center px-3 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-muted-foreground">
              <Smile className="w-5 h-5" />
            </Button>
            <Input 
              placeholder="Type a message..." 
              className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-11"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-muted-foreground">
              <Paperclip className="w-5 h-5" />
            </Button>
          </div>
          <Button 
            className="rounded-full w-11 h-11 p-0 flex items-center justify-center shadow-lg"
            onClick={handleSend}
          >
            {message.trim() ? <Send className="w-5 h-5 ml-0.5" /> : <Mic className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;