'use client'

import { AuthForm } from '@/components/AuthForm'

export default function SignInPage() {
  const handleSignIn = async (data: { email: string; password: string }) => {
    // Implement your sign-in logic here
    console.log('Sign in:', data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 p-4">
      <AuthForm mode="signin" onSubmit={handleSignIn} />
    </div>
  )
} 