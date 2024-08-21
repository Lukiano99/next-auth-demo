"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const WhoAmIButton = ({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>;
}) => {
  const [name, setName] = useState<string>();

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-light text-accent-foreground/80">
        Implementing{" "}
        <span className="font-bold text-4xl text-accent-foreground">
          Server Actions{" "}
        </span>
        to Fetch Session in Next.js
      </h1>
      <p className="text-accent-foreground/80 w-2/3">
        Server Actions are enabled in the Next.js configuration, allowing the
        creation of server-side functions that can be called by client
        components. The example demonstrates creating a server action to fetch
        the current session and display the {"user's"} name or a message
        indicating they are not logged in.
      </p>
      <Button
        onClick={async () => setName(await whoAmIAction())}
        className="w-fit"
      >
        Who Am I?
      </Button>
      {name && (
        <div className="w-1/2 rounded-lg bg-muted flex flex-col px-8 py-6 drop-shadow-sm">
          <p className="text-accent-foreground/50">
            You are <br />
            <span className="text-2xl text-accent-foreground">{name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default WhoAmIButton;
