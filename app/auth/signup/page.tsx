'use client'

import { AuthForm } from '@/components/AuthForm'

export default function SignUpPage() {
  const handleSignUp = async (data: { 
    email: string; 
    password: string; 
    confirmPassword?: string 
  }) => {
    if (!data.confirmPassword) return;
    console.log('Sign up:', data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 p-4">
      <AuthForm mode="signup" onSubmit={handleSignUp} />
    </div>
  )
} 