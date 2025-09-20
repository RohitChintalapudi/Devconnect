import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActivePage = (path) => location.pathname === path;

  return (
    <>
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/30 shadow-lg shadow-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => handleNavClick("/")}
                className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                DevConnect
              </button>
            </motion.div>

            <div className="flex space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    isActivePage(item.path)
                      ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-lg shadow-yellow-400/40"
                      : "bg-gray-800/60 text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black hover:shadow-lg hover:shadow-yellow-400/30"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/30 shadow-lg shadow-yellow-400/20">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => handleNavClick("/")}
                className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
              >
                DevConnect
              </button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-gray-800/60 text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-6 h-0.5 bg-current block transition-all duration-300 origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-current block transition-all duration-300 mt-1"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-6 h-0.5 bg-current block transition-all duration-300 mt-1 origin-center"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black/95 backdrop-blur-md border-t border-yellow-400/30 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActivePage(item.path)
                        ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-lg shadow-yellow-400/30"
                        : "text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black hover:shadow-lg hover:shadow-yellow-400/20"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
