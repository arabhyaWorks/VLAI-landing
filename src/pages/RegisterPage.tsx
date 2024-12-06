import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Mail, Lock, Phone, User, ShoppingBag, Bot, Store, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SignupFormData = {
  name: string;
  email: string;
  phone: string;
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

export const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>();

  const onSubmit = (data: SignupFormData) => {
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

      {/* Right Panel - Registration Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Create your store</h2>
            <p className="mt-2 text-gray-600">Get started with your digital dukan</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="pl-10"
                    {...register('name', { required: 'Name is required' })}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

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
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Please enter a valid Indian phone number'
                      }
                    })}
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="pl-10"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters'
                      }
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Launch Your Digital Dukan
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
              Already have a store?{' '}
              <Link
                to="/login"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                Login to your dukan
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};