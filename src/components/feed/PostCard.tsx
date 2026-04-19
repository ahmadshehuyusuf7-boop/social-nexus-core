import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CheckCircle2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Post } from "@/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const PostCard = ({ post }: { post: Post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showHeart, setShowHeart] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleDoubleTap = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border/50 transition-all hover:shadow-md">
      {/* Post Header */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10 border border-border">
            <AvatarImage src={post.user.avatar} />
            <AvatarFallback>{post.user.username[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <span className="font-bold text-sm">{post.user.username}</span>
              {post.user.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />}
            </div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{post.timestamp}</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Post Content */}
      <div 
        className="relative aspect-square overflow-hidden bg-slate-100"
        onDoubleClick={handleDoubleTap}
      >
        {post.image && (
          <img 
            src={post.image} 
            alt="Post" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        )}
        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <Heart className="w-24 h-24 text-white fill-white drop-shadow-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLike}
              className={cn("rounded-full", liked && "text-red-500")}
            >
              <Heart className={cn("w-6 h-6", liked && "fill-current")} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MessageCircle className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Send className="w-6 h-6" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bookmark className="w-6 h-6" />
          </Button>
        </div>

        <div className="space-y-1">
          <p className="text-sm font-bold">{likeCount.toLocaleString()} likes</p>
          <p className="text-sm leading-relaxed">
            <span className="font-bold mr-2">{post.user.username}</span>
            {post.content}
          </p>
          <button className="text-sm text-muted-foreground mt-1 hover:underline">
            View all {post.comments} comments
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;