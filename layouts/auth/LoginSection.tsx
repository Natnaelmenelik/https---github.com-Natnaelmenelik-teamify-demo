import React from "react";
import Navbar from "../common/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "../common/Footer";

const LoginSection = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 ">
        <Card className="w-full max-w-md bg-[#B3B4B5] shadow-lg">
          <CardHeader className="space-y-3 text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-foreground">
              Sign in to access your account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="h-11 border-2"
                autoComplete="email"
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg">
                Password
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 border-2"
                autoComplete="current-password"
              />
            </div>

            <div className="flex items-center space-x-2 mb-5">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Remember Me</Label>
            </div>
            <div className="flex items-center justify-between text-sm">
              <a
                href="#forgot-password"
                className="text-primary hover:underline underline-offset-4"
              >
                Forgot password?
              </a>
              <a
                href="/register"
                className="text-muted-foreground hover:text-primary"
              >
                Don't have an account?
              </a>
            </div>

            <Button className="w-full h-11 text-base" type="submit">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default LoginSection;
