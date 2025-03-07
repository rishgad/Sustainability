import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import React, { useState } from "react";

export default function LoFiSignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-[393px] flex flex-col items-center gap-6">
        {/* Avatar placeholder */}
        <div className="w-[119px] h-[119px] bg-[#d9d9d9] rounded-full" />

        {/* Username input */}
        <Card className="w-full max-w-[297px] bg-[#d9d9d9] border-none rounded-[30px] shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center px-6 py-4">
              <User className="w-5 h-5 mr-4" />
              <span className="font-bold text-lg tracking-[-0.36px]">
                Username
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Password input */}
        <Card className="w-full max-w-[297px] bg-[#d9d9d9] border-none rounded-[30px] shadow-none">
          <CardContent className="p-0">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center">
                <Lock className="w-5 h-5 mr-4" />
                <span className="font-bold text-lg tracking-[-0.36px]">
                  Password
                </span>
              </div>
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-6 h-6" />
                ) : (
                  <Eye className="w-6 h-6" />
                )}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Forgot password link */}
        <div className="w-full max-w-[297px] flex justify-end">
          <button className="font-bold text-[11px] text-[#283618] tracking-[-0.22px]">
            Forgot Password?
          </button>
        </div>

        {/* Sign in button */}
        <Button className="w-full max-w-[297px] h-[58px] bg-[#d9d9d9] text-black hover:bg-[#c9c9c9] rounded-[30px] font-bold text-lg tracking-[-0.36px]">
          Sign In
        </Button>

        {/* Sign up text */}
        <div className="font-bold text-[11px] tracking-[-0.22px]">
          <span className="text-[#283618]">Don't have an account? </span>
          <button className="text-black">Sign up</button>
        </div>
      </div>
    </div>
  );
}
