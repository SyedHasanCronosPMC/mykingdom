"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your sign up logic here
  };

  return (
    <div className="min-h-screen bg-[#2563EB] flex items-center justify-center p-4">
      {/* Logo */}
      <div className="fixed top-4 left-4">
        <Image
          src="/logo.png"
          alt="MyKingdom Logo"
          width={48}
          height={48}
          className="rounded-lg"
        />
      </div>

      {/* Sign Up Card */}
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold text-[#1E3A8A]">
            Welcome to MyKingdom
          </h1>
          <p className="text-sm text-[#2563EB]">Create your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-[#1E3A8A]">Email</label>
              <Input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#1E3A8A]">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#1E3A8A]">Confirm Password</label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white"
            >
              Sign Up
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {/* Add Google sign-in logic */}}
              >
                <Image
                  src="/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Sign in with Google
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {/* Add Facebook sign-in logic */}}
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Sign in with Facebook
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {/* Add LinkedIn sign-in logic */}}
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Sign in with LinkedIn
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#2563EB] hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 