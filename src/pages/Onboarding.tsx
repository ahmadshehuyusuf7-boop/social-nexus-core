import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Real-time Messaging",
    description: "Stay connected with your friends and family with instant messaging, voice calls, and video chats.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/onboarding-messaging-01a53681-1776542730974.webp",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Share Your Moments",
    description: "Post photos, videos, and stories to keep your circle updated. Discover trending content from around the world.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/onboarding-social-8c1893bc-1776542731172.webp",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "AI Powered Experience",
    description: "Use our built-in AI assistant to generate captions, enhance media, and moderate content automatically.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/onboarding-ai-e8f44dc4-1776542732202.webp",
    color: "from-indigo-600 to-violet-700"
  }
];

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      onComplete();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-background flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="flex-1 flex flex-col p-8 items-center justify-center text-center"
        >
          <div className={`w-64 h-64 rounded-full bg-gradient-to-br ${slides[currentSlide].color} p-1 mb-12 shadow-2xl`}>
            <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
            {slides[currentSlide].description}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="p-8 flex flex-col items-center">
        <div className="flex space-x-2 mb-8">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted"}`}
            />
          ))}
        </div>
        
        <Button 
          size="lg" 
          onClick={nextSlide} 
          className="w-full h-14 text-lg font-semibold rounded-2xl flex items-center justify-center group"
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Continue"}
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;