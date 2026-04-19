import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, UserPlus, MoreVertical, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Chat } from "@/types";

const MOCK_CHATS: Chat[] = [
  {
    id: "1",
    user: {
      id: "u1",
      username: "alex_designs",
      fullName: "Alex Rivera",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-1-1dbe6758-1776542732095.webp",
      isVerified: true
    },
    lastMessage: "Hey! Did you see the new design trends?",
    timestamp: "10:24 AM",
    unreadCount: 3,
    isOnline: true
  },
  {
    id: "2",
    user: {
      id: "u2",
      username: "sarah_j",
      fullName: "Sarah Jenkins",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-2-3cfbee39-1776542731952.webp"
    },
    lastMessage: "The avocado toast was delicious! 🥑",
    timestamp: "Yesterday",
    unreadCount: 0
  },
  {
    id: "3",
    user: {
      id: "u3",
      username: "m_chen",
      fullName: "Marcus Chen",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-3-70ace811-1776542732233.webp"
    },
    lastMessage: "Sent a photo",
    timestamp: "Monday",
    unreadCount: 0,
    isOnline: true
  }
];

const ChatPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Messages</h2>
          <div className="flex space-x-1">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <UserPlus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search messages..." 
            className="pl-10 h-11 bg-muted/50 border-none rounded-2xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1">
          {MOCK_CHATS.map((chat) => (
            <Link 
              key={chat.id} 
              to={`/chat/${chat.id}`}
              className="flex items-center px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer group"
            >
              <div className="relative">
                <Avatar className="w-14 h-14 border border-border">
                  <AvatarImage src={chat.user.avatar} className="object-cover" />
                  <AvatarFallback>{chat.user.username[0]}</AvatarFallback>
                </Avatar>
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
                )}
              </div>
              
              <div className="ml-4 flex-1 border-b border-border/50 pb-3 group-last:border-none">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-lg">{chat.user.username}</span>
                    {chat.user.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />}
                  </div>
                  <span className="text-xs text-muted-foreground">{chat.timestamp}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground line-clamp-1 max-w-[200px]">
                    {chat.lastMessage}
                  </p>
                  {chat.unreadCount > 0 && (
                    <div className="bg-primary text-white text-[10px] font-bold h-5 min-w-5 px-1.5 flex items-center justify-center rounded-full">
                      {chat.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;