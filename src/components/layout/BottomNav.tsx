import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Home, MessageCircle, PlusSquare, Search, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Explore", path: "/explore" },
    { icon: PlusSquare, label: "Post", path: "/post" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border z-40 px-6 py-2">
      <div className="flex justify-between items-center max-w-md mx-auto relative">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center p-2 transition-colors relative",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-6 h-6", isActive && "stroke-[2.5px]")} />
                <span className="text-[10px] mt-1 font-medium">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -top-1 w-12 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
        
        <NavLink 
          to="/ai" 
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-indigo-600 p-3 rounded-full shadow-lg border-4 border-background text-white hover:scale-110 transition-transform active:scale-95"
        >
          <Sparkles className="w-6 h-6" />
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;