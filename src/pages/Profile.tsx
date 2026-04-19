import { Settings, Grid, Bookmark, UserCheck, MessageSquare, Heart, Edit2, Share2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Profile Header */}
      <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute -bottom-16 left-6 p-1.5 bg-background rounded-full border-4 border-background">
          <Avatar className="w-32 h-32">
            <AvatarImage src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-2-3cfbee39-1776542731952.webp" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <Button variant="secondary" size="sm" className="rounded-full backdrop-blur-md bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button variant="secondary" size="sm" className="rounded-full backdrop-blur-md bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-6 pb-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              Jane Doe <UserCheck className="w-5 h-5 ml-2 text-blue-500" />
            </h2>
            <p className="text-muted-foreground">@janedoe_creative</p>
          </div>
          <Button variant="default" className="rounded-full px-6">Edit Profile</Button>
        </div>

        <p className="text-sm leading-relaxed max-w-md">
          Digital Architect | AI Enthusiast | Coffee Lover ☕️
          <br />
          Building the future of social connection one post at a time.
          <br />
          📍 New York, NY
        </p>

        <div className="flex justify-between p-4 bg-muted/30 rounded-2xl">
          <div className="text-center flex-1">
            <p className="font-bold text-lg">128</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Posts</p>
          </div>
          <div className="w-px bg-border my-1"></div>
          <div className="text-center flex-1">
            <p className="font-bold text-lg">15.4k</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Followers</p>
          </div>
          <div className="w-px bg-border my-1"></div>
          <div className="text-center flex-1">
            <p className="font-bold text-lg">842</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Following</p>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full h-12 bg-transparent border-y border-border rounded-none p-0">
          <TabsTrigger value="posts" className="flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary transition-none">
            <Grid className="w-5 h-5" />
          </TabsTrigger>
          <TabsTrigger value="reels" className="flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary transition-none">
            <Bookmark className="w-5 h-5" />
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex-1 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary transition-none">
            <Heart className="w-5 h-5" />
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="mt-0 p-1">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                key={i} 
                className="aspect-square bg-muted relative group overflow-hidden"
              >
                <img 
                  src={`https://picsum.photos/seed/${i + 50}/400/400`} 
                  alt="Post" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 text-white">
                  <span className="flex items-center text-sm font-bold"><Heart className="w-4 h-4 mr-1 fill-white" /> 1.2k</span>
                  <span className="flex items-center text-sm font-bold"><MessageSquare className="w-4 h-4 mr-1 fill-white" /> 45</span>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reels" className="mt-0 p-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <Bookmark className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-bold text-lg">No Saved Content</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">Items you save will appear here for you to see again later.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;