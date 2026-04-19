import { useState } from "react";
import { Search, Grid, Play, Hash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Explore = () => {
  const [category, setCategory] = useState("All");
  
  const categories = ["All", "Art", "Design", "Food", "Travel", "Tech", "Fashion"];

  return (
    <div className="p-4 space-y-6 max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input 
          placeholder="Explore topics, people, or hashtags..." 
          className="pl-12 h-14 bg-muted/50 border-none rounded-2xl text-lg shadow-sm focus-visible:ring-2 focus-visible:ring-primary/20"
        />
      </div>

      <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <Button 
            key={cat}
            variant={category === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(cat)}
            className="rounded-full px-5 h-9"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-1">
        {[...Array(15)].map((_, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            key={i} 
            className={`aspect-square relative overflow-hidden bg-muted group cursor-pointer ${
              i === 1 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img 
              src={`https://picsum.photos/seed/${i + 100}/500/500`} 
              alt="Explore" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {i % 3 === 0 && (
              <div className="absolute top-2 right-2 text-white">
                <Play className="w-5 h-5 fill-current" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex space-x-4 text-white font-bold">
                <span className="flex items-center"><Grid className="w-4 h-4 mr-1" /> 2.4k</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="font-bold text-lg px-2">Trending Hashtags</h3>
        <div className="space-y-3">
          {["#AIRevolution", "#UIdesign", "#DigitalArt", "#TravelVlogs"].map((tag, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-card rounded-2xl border border-border shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Hash className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">{tag}</p>
                  <p className="text-xs text-muted-foreground">12.4k posts this week</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">View</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;