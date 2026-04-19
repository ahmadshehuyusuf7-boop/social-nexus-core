export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  bio?: string;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  isLiked?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'seen';
}

export interface Chat {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline?: boolean;
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
  isSeen?: boolean;
}