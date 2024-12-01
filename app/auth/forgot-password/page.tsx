'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your password reset logic here
    try {
      // Implement password reset functionality
      console.log("Password reset requested for:", email);
    } catch (error) {
      console.error("Password reset error:", error);
    } finally {
      setIsLoading(false);
    }
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

      {/* Forgot Password Card */}
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold text-[#1E3A8A]">
            Reset your password
          </h1>
          <p className="text-sm text-[#64748B]">
            Enter your email address and we'll send you a link to reset your password
          </p>
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

            <Button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send reset link"}
            </Button>

            <div className="text-center">
              <Link
                href="/auth/signin"
                className="text-sm text-[#2563EB] hover:underline"
              >
                Back to sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 