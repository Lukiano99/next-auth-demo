import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex flex-col gap-12">
      <p className="text-3xl font-light text-accent-foreground/80">
        This Page Represents{" "}
        <span className="font-bold text-4xl text-accent-foreground">
          {"getServerSession()"}
        </span>{" "}
        Function Result:
      </p>
      <div className="w-1/2 rounded-lg bg-muted flex flex-col px-8 py-6 drop-shadow-sm">
        {session && (
          <p className="text-accent-foreground/50">
            You are logged in as <br />
            <span className="text-2xl text-accent-foreground">
              {session.user?.name}
            </span>
          </p>
        )}
        {!session && (
          <div className="gap-2 flex flex-col">
            <p className="text-accent-foreground/50">
              Currently you are not logged in.
            </p>
            <p className="text-accent-foreground text-xl">
              Click <strong>Sign In</strong> button to Log In.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
