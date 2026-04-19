import { Bell, Search, Settings, Plus, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const TopHeader = () => {
  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-md z-40 border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-md">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/app-logo-a5b9508f-1776542731412.webp" 
            className="w-6 h-6 object-contain rounded-md" 
            alt="Logo" 
          />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Chat Post
        </h1>
      </div>

      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Camera className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </Button>
        <Avatar className="w-9 h-9 border-2 border-primary/20">
          <AvatarImage src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-2-3cfbee39-1776542731952.webp" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopHeader;