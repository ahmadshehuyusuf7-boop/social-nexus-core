import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/78d6f245-6a54-4652-b63d-ac35737cf970/app-logo-a5b9508f-1776542731412.webp" 
            alt="Chat Post Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">Chat Post</h1>
          <p className="text-indigo-100 mt-2 font-medium">Connect. Share. Discover.</p>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center"
      >
        <div className="w-6 h-6 border-4 border-indigo-200 border-t-white rounded-full animate-spin"></div>
        <p className="text-indigo-200 text-sm mt-4 font-light">Powered by AI</p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;