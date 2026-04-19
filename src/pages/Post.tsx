import { useState } from "react";
import { Camera, Image as ImageIcon, Video, Mic, MapPin, X, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { motion } from "framer-motion";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePost = () => {
    if (!content.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setContent("");
      toast.success("Post shared successfully!");
    }, 1500);
  };

  const handleAICreate = () => {
    toast.info("AI is generating a caption for you...");
    setTimeout(() => {
      setContent("Chasing dreams and making memories. This is what life is all about! ✨🚀 #Inspired #Journey");
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 max-w-xl mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Create Post</h2>
        <Button variant="ghost" size="icon">
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div className="bg-card rounded-3xl p-6 shadow-sm border border-border space-y-6">
        <div className="flex space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-2-3cfbee39-1776542731952.webp" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <Textarea 
              placeholder="What's on your mind?" 
              className="min-h-[120px] bg-transparent border-none text-lg resize-none p-0 focus-visible:ring-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleAICreate}
              className="rounded-full bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 transition-colors"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI Generate Caption
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          <Button variant="ghost" className="justify-start h-12 rounded-xl text-muted-foreground hover:bg-blue-50 hover:text-blue-600 transition-colors">
            <ImageIcon className="w-5 h-5 mr-3" />
            Photo
          </Button>
          <Button variant="ghost" className="justify-start h-12 rounded-xl text-muted-foreground hover:bg-red-50 hover:text-red-600 transition-colors">
            <Video className="w-5 h-5 mr-3" />
            Video
          </Button>
          <Button variant="ghost" className="justify-start h-12 rounded-xl text-muted-foreground hover:bg-green-50 hover:text-green-600 transition-colors">
            <Camera className="w-5 h-5 mr-3" />
            Camera
          </Button>
          <Button variant="ghost" className="justify-start h-12 rounded-xl text-muted-foreground hover:bg-orange-50 hover:text-orange-600 transition-colors">
            <MapPin className="w-5 h-5 mr-3" />
            Location
          </Button>
        </div>

        <Button 
          className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg"
          disabled={!content.trim() || loading}
          onClick={handlePost}
        >
          {loading ? "Posting..." : "Share Post"}
          {!loading && <Send className="ml-2 w-5 h-5" />}
        </Button>
      </div>
    </motion.div>
  );
};

export default CreatePost;