"use client"

import { useState } from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormData {
  email: string
  password: string
  confirmPassword?: string
}

interface FormErrors {
  email?: string
  password?: string
  confirmPassword?: string
}

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Form submitted:", formData)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login initiated`)
  }

  return (
    <Card className="w-full max-w-md bg-white shadow-lg">
      <CardHeader className="space-y-1">
        <h2 className="text-2xl font-semibold text-center text-[#1a237e]">
          Welcome to MyKingdom
        </h2>
        <p className="text-sm text-center text-[#3949ab]">
          Create your account
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              disabled={isLoading}
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-[#e0e0e0]"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              disabled={isLoading}
              value={formData.password}
              onChange={handleChange}
              className="bg-white border-[#e0e0e0]"
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <p id="password-error" className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              disabled={isLoading}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-white border-[#e0e0e0]"
              aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
            />
            {errors.confirmPassword && (
              <p id="confirm-password-error" className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#304ffe] hover:bg-[#1a237e] text-white"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#e0e0e0]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-[#3949ab]">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleSocialLogin('Google')}
            className="w-full border-[#e0e0e0] hover:bg-[#f5f5f5] text-[#1a237e]"
          >
            <Icons.google className="h-5 w-5 mr-2" />
            Sign in with Google
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleSocialLogin('Facebook')}
            className="w-full border-[#e0e0e0] hover:bg-[#f5f5f5] text-[#1a237e]"
          >
            <Icons.facebook className="h-5 w-5 mr-2" />
            Sign in with Facebook
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleSocialLogin('LinkedIn')}
            className="w-full border-[#e0e0e0] hover:bg-[#f5f5f5] text-[#1a237e]"
          >
            <Icons.linkedin className="h-5 w-5 mr-2" />
            Sign in with LinkedIn
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center text-[#3949ab] w-full">
          Already have an account?{" "}
          <Button 
            type="button"
            variant="link" 
            className="p-0 text-[#1a237e] font-semibold"
            onClick={() => console.log("Navigate to sign in")}
          >
            Sign in
          </Button>
        </p>
      </CardFooter>
    </Card>
  )
}

