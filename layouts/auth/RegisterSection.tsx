import Navbar from "../common/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "../common/Footer";

const RegisterSection = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 py-8">
        <Card className="w-full max-w-md bg-[#B3B4B5] shadow-lg mx-auto my-4">
          <CardHeader className="space-y-3 text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-foreground text-md">
              Join us to get started
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-lg">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                className="h-11 border-2"
                autoComplete="name"
              />
            </div>

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
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-lg">
                Company Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="companyName"
                type="text"
                placeholder="Your Company"
                className="h-11 border-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyWebsite" className="text-lg">
                Company Website <span className="text-red-500">*</span>
              </Label>
              <Input
                id="companyWebsite"
                type="url"
                placeholder="https://example.com"
                className="h-11 border-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize" className="text-lg">
                Company Size <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="w-full h-11 border-2">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Company Size</SelectLabel>
                    <SelectItem value="solo">Solo (Just me)</SelectItem>
                    <SelectItem value="2-10">
                      2-10 employees (Small team)
                    </SelectItem>
                    <SelectItem value="11-50">
                      11-50 employees (Growing)
                    </SelectItem>
                    <SelectItem value="51-200">
                      51-200 employees (Mid-size)
                    </SelectItem>
                    <SelectItem value="201-500">
                      201-500 employees (Large)
                    </SelectItem>
                    <SelectItem value="501-1000">
                      501-1000 employees (Enterprise)
                    </SelectItem>
                    <SelectItem value="1000+">
                      1000+ employees (Corporation)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg">
                Password <span className="text-red-500">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11 border-2"
                autoComplete="new-password"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-lg">
                Confirm Password <span className="text-red-500">*</span>
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="h-11 border-2"
                autoComplete="new-password"
              />
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox id="terms" required />
              <Label htmlFor="terms">
                I accept the{" "}
                <a href="#" className="text-primary hover:underline">
                  terms and conditions
                </a>
              </Label>
            </div>

            <Button className="w-full h-11 text-base" type="submit">
              Sign Up
            </Button>

            <div className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign In
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterSection;
