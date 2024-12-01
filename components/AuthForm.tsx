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

  return (
    <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-sm">
      <h1 className="mb-2 text-2xl font-semibold text-center text-gray-800">
        Welcome to MyKingdom
      </h1>
      <p className="mb-6 text-sm text-center text-blue-600">
        {mode === 'signin' ? 'Sign in to your account' : 'Create your account'}
      </p>

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
            />
          </div>
        )}

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </Button>
      </form>

      {mode === 'signin' && (
        <Link href="/auth/forgot-password" className="block mt-4 text-sm text-center text-blue-600 hover:underline">
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
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = '/api/auth/sso/google'}
        >
          <Icons.google className="w-5 h-5 mr-2" />
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = '/api/auth/sso/facebook'}
        >
          <Icons.facebook className="w-5 h-5 mr-2" />
          Sign in with Facebook
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = '/api/auth/sso/linkedin'}
        >
          <Icons.linkedin className="w-5 h-5 mr-2" />
          Sign in with LinkedIn
        </Button>
      </div>

      <p className="mt-6 text-sm text-center text-gray-600">
        {mode === 'signin' ? (
          <>
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  )
}

