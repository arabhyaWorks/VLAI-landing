import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Bot } from 'lucide-react';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50">
      <div className="flex min-h-screen">
        {/* Left side - Decorative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex lg:w-1/2 bg-yellow-500 p-12 items-center justify-center"
        >
          <div className="max-w-md text-white">
            <div className="flex items-center space-x-2 mb-8">
              <ShoppingBag className="h-8 w-8" />
              <Bot className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-6">Vyapar Launchpad</h1>
            <p className="text-xl mb-8">
              Your AI companion for smarter e-commerce success in India
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-yellow-400 bg-opacity-20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Smart Analytics</h3>
                <p className="text-sm">AI-powered insights for better business decisions</p>
              </div>
              <div className="bg-yellow-400 bg-opacity-20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm">Always available AI assistance for your business</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Auth Form */}
        <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
          {children}
        </div>
      </div>
    </div>
  );
};