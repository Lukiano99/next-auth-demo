import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronRightIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-[400px]  space-y-10">
      <div className="flex justify-start w-fit items-center gap-4 shadow-md border-primary/50 rounded-lg border p-px ">
        <div className="gap-2 text-primary cursor-default flex items-center p-px ml-4 ">
          <StarIcon size={18} className="" />
          Changelog
        </div>
        <Link
          href={"https://github.com/Lukiano99/next-auth-demo"}
          target="_blank"
          className="group"
        >
          <Button
            className="bg-muted gap-2 group-hover:text-primary transition-all"
            variant={"ghost"}
          >
            Checkout real-time updates
            <ArrowRightIcon
              size={18}
              className="group-hover:-rotate-45 group-hover:-translate-y-[1px]  transition-all"
            />
          </Button>
        </Link>
      </div>
      <div className="text-center w-4/5 ">
        <h1 className="md:text-7xl font-semibold ">
          Effortless <span className="text-primary ">Authentication</span> Setup
          in Next.js with <span className="text-primary ">NextAuth</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="text-base text-center w-2/3 font-medium">
          Quickly set up authentication in your Next.js App Router application
          using NextAuth for login, protected routes, and user ID management.
          Get all the code for free on GitHub and start building today!
        </p>
      </div>
      <Link href={"/home"}>
        <Button className="gap-2 drop-shadow-lg ">
          {"Let's Get Started"}
          <ArrowRightIcon size={18} />
        </Button>
      </Link>
    </div>
  );
}
