import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Mail, Lock, ShoppingBag, Bot, Store, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginFormData = {
  email: string;
  password: string;
};

const Logo = () => (
  <div className="flex items-center space-x-1 text-4xl font-ubuntu font-bold">
    <span>Vya</span>
    <span className="text-[#FCBD01]">par</span>
    <span> Launch</span>
    <span className="text-[#FCBD01]">pad</span>
  </div>
);

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 flex flex-col lg:flex-row">
      {/* Logo for mobile */}
      <div className="lg:hidden w-full flex items-center justify-center mt-12 mb-6">
        <Logo />
      </div>
      {/* Left Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex lg:w-1/2 items-center justify-center relative"
        style={{ backgroundColor: 'rgba(255, 199, 39, 0.4)' }}
      >

        <div className="absolute top-6 left-6">
          <Logo />
        </div>

        <img
          src="https://firebasestorage.googleapis.com/v0/b/backendintegration-2fdc3.appspot.com/o/login_illustration.png?alt=media&token=5dd33ed6-0f9d-49fe-87d4-615cff08c1d5"
          alt="E-commerce illustration"
          className="w-full max-w-2xl p-12"
        />
      </motion.div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-600">Login to manage your digital dukan</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    {...register('email', { required: 'Email is required' })}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    {...register('password', { required: 'Password is required' })}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-yellow-600 hover:text-yellow-500"
              >
                Forgot password?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Start Selling
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Amazon
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Don't have a store yet?{' '}
              <Link
                to="/register"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                Start your digital dukan
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};