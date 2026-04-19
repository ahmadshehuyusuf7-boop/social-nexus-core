import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

const MOCK_STORIES = [
  { id: "s1", username: "Your Story", avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-2-3cfbee39-1776542731952.webp", isMe: true },
  { id: "s2", username: "alex_designs", avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-1-1dbe6758-1776542732095.webp" },
  { id: "s3", username: "city_vibes", avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-3-70ace811-1776542732233.webp" },
  { id: "s4", username: "nature_lover", avatar: "https://picsum.photos/seed/n1/200" },
  { id: "s5", username: "travel_geek", avatar: "https://picsum.photos/seed/t1/200" },
  { id: "s6", username: "artist_hub", avatar: "https://picsum.photos/seed/a1/200" },
];

const StoryBar = () => {
  return (
    <div className="border-b border-border py-4 bg-background">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 px-4">
          {MOCK_STORIES.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-1">
              <div className={`p-[3px] rounded-full ${story.isMe ? "bg-muted border-2 border-dashed border-muted-foreground" : "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"} relative`}>
                <div className="bg-background rounded-full p-[2px]">
                  <Avatar className="w-16 h-16 ring-2 ring-background">
                    <AvatarImage src={story.avatar} className="object-cover" />
                    <AvatarFallback>{story.username[0]}</AvatarFallback>
                  </Avatar>
                </div>
                {story.isMe && (
                  <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 border-2 border-background shadow-sm">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <span className="text-xs text-muted-foreground w-16 truncate text-center">
                {story.username}
              </span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};

export default StoryBar;