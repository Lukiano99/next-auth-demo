"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const ApiFromClient = () => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    fetch("api/whoAmI")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <Button className="w-fit" onClick={() => signIn()}>
        Sign In
      </Button>
      <h1 className="text-3xl font-light text-accent-foreground/80">
        Handling API Requests from{" "}
        <span className="font-bold text-4xl text-accent-foreground">
          Client{" "}
        </span>
        in Next.js
      </h1>
      <p className="text-accent-foreground/80 w-2/3">
        An API route is created and called from both client and server-side
        components. While the client-side fetch works correctly, the server-side
        fetch has issues because it {"doesn't"} carry over the authentication
        when making a request back to itself, leading to incorrect
        authentication states.
      </p>
      {name && (
        <div className="w-1/2 rounded-lg bg-muted flex flex-col px-8 py-6 drop-shadow-sm">
          <p className="text-accent-foreground/50">
            You are <br />
            <span className="text-2xl text-accent-foreground">{name}</span>
          </p>
        </div>
      )}
    </div>
    // <div>
    //   <div>
    //     Api Route From <span className="font-bold underline">Client</span>
    //   </div>
    //   <div>Name: {name}</div>
    // </div>
  );
};

export default ApiFromClient;
