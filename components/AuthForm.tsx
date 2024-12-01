"use client"

import { useState } from "react"
import { Icons } from "@/components/Icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showAuthCode, setShowAuthCode] = useState<boolean>(false)
  const [isSignUp, setIsSignUp] = useState<boolean>(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setShowAuthCode(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
      <CardHeader className="space-y-1 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-blue-900">
          Welcome to MyKingdom
        </h2>
        <p className="text-sm text-blue-600">
          {isSignUp ? "Create your account" : "Sign in to your account"}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-blue-900">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              disabled={isLoading}
              className="bg-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-blue-900">Password</Label>
            <Input
              id="password"
              type="password"
              disabled={isLoading}
              className="bg-white/50"
            />
          </div>
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-blue-900">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                disabled={isLoading}
                className="bg-white/50"
              />
            </div>
          )}
          {showAuthCode && (
            <div className="space-y-2">
              <Label htmlFor="authCode" className="text-blue-900">Authentication Code</Label>
              <Input
                id="authCode"
                placeholder="Enter code sent to your email"
                disabled={isLoading}
                className="bg-white/50"
              />
              <Button
                variant="link"
                className="px-0 text-xs text-blue-700"
                onClick={() => alert("New code sent!")}
              >
                Resend code
              </Button>
            </div>
          )}
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
        
        {!isSignUp && (
          <Button
            variant="link"
            className="w-full text-sm text-blue-700"
            onClick={() => alert("Password reset email sent!")}
          >
            Forgot password?
          </Button>
        )}
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-blue-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-blue-600">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="grid gap-3">
          <Button 
            variant="outline" 
            onClick={() => alert("Google SSO initiated")} 
            className="w-full bg-white hover:bg-blue-50 text-blue-900 font-semibold"
          >
            <Icons.google className="h-5 w-5 mr-2" />
            Sign in with Google
          </Button>
          <Button 
            variant="outline" 
            onClick={() => alert("Facebook SSO initiated")} 
            className="w-full bg-white hover:bg-blue-50 text-blue-900 font-semibold"
          >
            <Icons.facebook className="h-5 w-5 mr-2" />
            Sign in with Facebook
          </Button>
          <Button 
            variant="outline" 
            onClick={() => alert("LinkedIn SSO initiated")} 
            className="w-full bg-white hover:bg-blue-50 text-blue-900 font-semibold"
          >
            <Icons.linkedin className="h-5 w-5 mr-2" />
            Sign in with LinkedIn
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-center text-blue-700 w-full">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <Button variant="link" className="p-0 text-blue-900" onClick={() => setIsSignUp(false)}>
                Sign in
              </Button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Button variant="link" className="p-0 text-blue-900" onClick={() => setIsSignUp(true)}>
                Sign up
              </Button>
            </>
          )}
        </p>
      </CardFooter>
    </Card>
  )
}

