"use client";

import { useState } from 'react'
import { Button } from './ui/button'
import { Icons } from './icons'
import Link from 'next/link'

interface AuthFormProps {
  mode: 'signin' | 'signup'
  onSubmit: (data: { email: string; password: string; confirmPassword?: string }) => void
}

export const AuthForm = ({ mode, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ email, password, confirmPassword })
  }

  const handleSocialLogin = (provider: string) => {
    window.location.href = `/api/auth/sso/${provider}`
  }

  return (
    <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-sm">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {mode === 'signin' ? 'Welcome back' : 'Create an account'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {mode === 'signin' 
            ? 'Enter your email to sign in to your account'
            : 'Enter your email below to create your account'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="name@example.com"
            required
            aria-label="Email address"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Password"
          />
        </div>

        {mode === 'signup' && (
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Confirm password"
            />
          </div>
        )}

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>

      {mode === 'signin' && (
        <Link 
          href="/auth/forgot-password" 
          className="block mt-4 text-sm text-center text-blue-600 hover:underline"
          tabIndex={0}
        >
          Forgot password?
        </Link>
      )}

      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-500 bg-white">OR CONTINUE WITH</span>
        </div>
      </div>

      <div className="grid gap-3 mt-6">
        {['google', 'facebook', 'linkedin'].map((provider) => {
          const IconComponent = Icons[provider as keyof typeof Icons];
          return (
            <Button
              key={provider}
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin(provider)}
              aria-label={`Sign in with ${provider}`}
            >
              <IconComponent className="w-5 h-5 mr-2" />
              Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
            </Button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-center text-gray-600">
        {mode === 'signin' ? (
          <>
            Don&apos;t have an account?{' '}
            <Link 
              href="/auth/signup" 
              className="text-blue-600 hover:underline"
              tabIndex={0}
            >
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link 
              href="/auth/signin" 
              className="text-blue-600 hover:underline"
              tabIndex={0}
            >
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  )
}

