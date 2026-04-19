import { motion } from "framer-motion";
import StoryBar from "@/components/feed/StoryBar";
import PostCard from "@/components/feed/PostCard";
import { Post as PostType } from "@/types";

const MOCK_POSTS: PostType[] = [
  {
    id: "1",
    user: {
      id: "u1",
      username: "alex_designs",
      fullName: "Alex Rivera",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-1-1dbe6758-1776542732095.webp",
      isVerified: true
    },
    content: "Just witnessed the most amazing sunset today! Nature is truly the best designer. 🌅✨ #nature #sunset #photography",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/post-image-1-d4f47d3f-1776542734581.webp",
    likes: 1240,
    comments: 48,
    timestamp: "2h ago"
  },
  {
    id: "2",
    user: {
      id: "u2",
      username: "city_vibes",
      fullName: "Marcus Chen",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-3-70ace811-1776542732233.webp"
    },
    content: "Neon nights in the heart of Tokyo. This city never sleeps! 🏙️🗼",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/post-image-2-ea937423-1776542737412.webp",
    likes: 856,
    comments: 32,
    timestamp: "5h ago"
  },
  {
    id: "3",
    user: {
      id: "u3",
      username: "foodie_gram",
      fullName: "Sarah Jenkins",
      avatar: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/user-avatar-2-3cfbee39-1776542731952.webp"
    },
    content: "The perfect brunch doesn't exi... 🥑🍞🥑🍞",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/post-image-3-1890173d-1776542735297.webp",
    likes: 2105,
    comments: 94,
    timestamp: "8h ago"
  }
];

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-xl mx-auto"
    >
      <StoryBar />
      <div className="space-y-4 p-4">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  );
};

export default Home;