
# Project Plan: Chat Post

## 1. Introduction
Develop a comprehensive, modern, and scalable social media and messaging application named "Chat Post". The app aims to combine core functionalities of WhatsApp, Instagram, and Facebook, enhanced with advanced AI features and monetization options.

## 2. Core Requirements
*   **Application Name**: Chat Post
*   **Key Pillars**:
    *   Clean UI/UX
    *   Fast Performance
    *   Real-time Capabilities
    *   AI Integration
    *   Monetization Features
*   **Core Structure**:
    *   Authentication (Email, Phone, Google)
    *   User Profiles (Bio, Avatar, Status, Links)
    *   Real-time Database and Notifications
    *   Fully Responsive (Mobile-first)

## 3. Feature Breakdown
### 3.1. Messaging Features (WhatsApp-level)
    1. Real-time one-on-one chat
    2. Group chats with admin controls
    3. Voice messages
    4. Video calls & voice calls
    5. Message reactions (emoji)
    6. Message edit & delete
    7. Disappearing messages
    8. End-to-end encryption simulation
    9. Typing indicators & online status
    10. File sharing (images, videos, docs, audio)
    11. Broadcast messages
    12. Chat pinning
    13. Chat archiving
    14. Read receipts (seen/delivered)

### 3.2. Social Media Features (Instagram + Facebook-level)
    15. Post creation (text, images, videos)
    16. Stories (24-hour disappearing content)
    17. Reels / short videos
    18. Like, comment, share system
    19. Save/bookmark posts
    20. Follow/unfollow system
    21. Friend request system
    22. Timeline/feed algorithm
    23. Explore/discovery page
    24. Hashtags & trending topics
    25. Tag users in posts
    26. Mentions in comments
    27. Live streaming
    28. Events creation & RSVP
    29. Pages (like Facebook pages)
    30. Groups/communities

### 3.3. AI-Powered Features
    31. AI chat assistant inside the app
    32. AI content generator (captions, posts)
    33. AI image/video enhancer
    34. Smart reply suggestions
    35. Auto moderation (detect spam/toxic content)
    36. AI search (find posts, users, messages easily)

### 3.4. Advanced User Experience
    37. Dark mode / light mode toggle
    38. Custom themes
    39. Swipe gestures (delete, archive, reply)
    40. Push notifications (real-time)
    41. Notification center (clear, manage)
    42. Offline mode support
    43. Fast loading with caching

### 3.5. Discovery & Connection
    44. “People you may know” system
    45. Nearby users (optional)
    46. QR code profile sharing
    47. Username search with filters
    48. Verified badges system

### 3.6. Monetization
    49. AdMob integration (rewarded ads, banner ads)
    50. Creator monetization (earn from posts/views)
    51. In-app purchases (premium features)
    52. Coins/reward system
    53. Subscription plans (premium accounts)

### 3.7. Security
    54. Account verification (OTP/email)
    55. Privacy settings (who can see posts, status, etc.)
    56. Block/report users
    57. Data protection system

### 3.8. Admin Panel
    58. Admin dashboard to manage users/posts
    59. Analytics (active users, engagement)
    60. Content moderation tools

## 4. Design Guidelines
*   Modern UI similar to Instagram + WhatsApp combined.
*   Smooth animations.
*   Bottom navigation: Home, Chat, Post, Explore, Profile.
*   Onboarding screens for new users.
*   Splash screen with “Chat Post” branding.

## 5. Technical Considerations
*   App must be extremely fast and scalable.
*   Ensure all features work without bugs.
*   Use a clean code structure.
*   Production-ready and easy to publish on Android (APK).

## 6. Agent Assignments & Workflow
The project will be developed using a multi-agent approach:

*   **Frontend Engineer**:
    *   Responsibilities: UI/UX design, component development, frontend logic, user flows, animations, responsiveness, visual elements, onboarding/splash screens.
    *   Initial Task: Create the first UI/UX flow based on the plan.
    *   Mandatory First Step: Execute `generate_images_bulk` tool before writing any files.
    *   Tools: `preflight_check`, `read_plan`, `write_code`, `generate_images_bulk`.

*   **Supabase Engineer**:
    *   Is `is_supabase_required` = true: Yes, due to real-time database, notifications, authentication, potential edge functions for AI/monetization.
    *   Responsibilities: Database schema design, migrations, backend logic, API development, real-time functionality implementation, authentication setup, notification system, edge functions for AI and monetization features, security features (account verification, privacy settings).
    *   Tools: Database management, edge function deployment, API development tools.

*   **Architect (This Agent)**:
    *   Responsibilities: High-level planning, task orchestration, agent routing, and final build validation.
    *   Current Action: Creating the plan and delegating initial tasks.

## 7. Development Workflow Steps
1.  **Architect**: Create `plan.md` (this document) and delegate initial tasks.
2.  **Frontend Engineer**: Execute `generate_images_bulk`, then proceed with UI/UX flow, components, and frontend implementation.
3.  **Supabase Engineer**: Design database schema, set up authentication, implement core backend logic, real-time features, and edge functions.
4.  **Integration**: Frontend and backend components will be integrated.
5.  **Testing**: Thorough testing of all features, performance, and stability.
6.  **Validation**: Architect will run `validate_build` to ensure the complete application is functional and bug-free.
