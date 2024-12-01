"use client"

import { useState } from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [authMethod, setAuthMethod] = useState<"email" | "sso">("email")
  const [showAuthCode, setShowAuthCode] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setShowAuthCode(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full" value={authMethod} onValueChange={(v) => setAuthMethod(v as "email" | "sso")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="sso">SSO</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={onSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      disabled={isLoading}
                    />
                  </div>
                  {showAuthCode && (
                    <div className="grid gap-2">
                      <Label htmlFor="authCode">Authentication Code</Label>
                      <Input
                        id="authCode"
                        placeholder="Enter code sent to your email"
                        disabled={isLoading}
                      />
                      <Button
                        variant="link"
                        className="px-0 text-xs text-blue-500"
                        onClick={() => alert("New code sent!")}
                      >
                        Resend code
                      </Button>
                    </div>
                  )}
                  <Button disabled={isLoading}>
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign In
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="sso">
              <div className="grid gap-4">
                <Button variant="outline" onClick={() => alert("Google SSO initiated")}>
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" onClick={() => alert("Facebook SSO initiated")}>
                  <Icons.facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button variant="outline" onClick={() => alert("LinkedIn SSO initiated")}>
                  <Icons.linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-center text-gray-500 mt-4 w-full">
            Protected by enterprise-grade security
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

