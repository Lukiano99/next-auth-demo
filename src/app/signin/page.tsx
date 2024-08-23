"use client";
import Ripple from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    fetch("api/whoAmI")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div className="flex  md:h-[600px] w-full bg-gradient-to-tr from-transparent to-muted light:bg-muted rounded-xl overflow-hidden border">
      {name !== "Not Logged In" && (
        <div className="size-full flex flex-col justify-center items-start space-y-4 w-1/2 px-20">
          <h1 className="text-4xl font-medium">You already signed in!</h1>
          <p className="text-xl font-light text-primary">
            <span className="text-accent-foreground/50">Your name:</span> {name}
          </p>
        </div>
      )}
      {name === "Not Logged In" && (
        <div className="size-full flex flex-col justify-center items-start space-y-10 w-1/2 px-20">
          <h1 className="pb-10 text-4xl font-medium">{"Let's "}Sign You In!</h1>

          <Button
            className="gap-2 hover:scale-110 transition-all"
            onClick={() => signIn()}
          >
            <GithubIcon size={18} />
            Sign In with GitHub
          </Button>
          <p className="text-xs font-light">
            By signing in, you agree to our <br />
            <span className="underline">
              Terms of Service and Privacy Policy
            </span>
          </p>
        </div>
      )}
      <div className="bg-background overflow-hidden relative w-1/2 size-full  flex  justify-center items-center">
        <h1 className="text-center font-semibold hover:scale-125 hover:cursor-pointer text-xl animate-pulse z-10 transition-all">
          {"Lukiano's"}
          <br /> NextAuth
        </h1>
        <Ripple />
      </div>
    </div>
  );
};

export default SignInPage;
