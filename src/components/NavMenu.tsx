"use client";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import MainPage from "./layout/main-page";
import { Button } from "./ui/button";
import { ModeToggle } from "./toggle-theme-button";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { LogInIcon, LogOutIcon, UserCircleIcon } from "lucide-react";
import { GithubImg } from "./github-img";

const paths = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "protected",
    href: "/protected",
  },
  {
    label: "Server Action",
    href: "/serverAction",
  },
  {
    label: "Api from Client",
    href: "/apiFromClient",
  },
  {
    label: "Api from Server",
    href: "/apiFromServer",
  },
];
const ACTIVE_ROUTE = "py-2 px-1 text-primary  transition-all";
const INACTIVE_ROUTE =
  "py-2 px-1 text-accent-foreground/50 hover:text-accent-foreground font-medium transition-all ";

const AuthButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const onAuthButtonClick = () => {
    // session ? signOut() : signIn()
    !session ? router.push("/signin") : signOut();
  };
  return (
    <Button
      onClick={() => onAuthButtonClick()}
      variant={session ? "default" : "link"}
      className={cn("flex gap-3 items-center ", !session && "flex-row-reverse")}
    >
      <p>{session ? "Sign Out" : "Sign In"}</p>
      {session ? <LogOutIcon size={14} /> : <LogInIcon size={14} />}
    </Button>
  );
};

const NavMenu = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="max-w-screen border-b border-muted shadow-md">
      <MainPage>
        <nav className="md:h-24 mx-auto flex items-center justify-between">
          <div className=" md:hover:scale-105  transition-all hover:cursor-pointer">
            <Link href={"/"} className="drop-shadow-md">
              <Logo />
            </Link>
          </div>
          <ul className="flex items-center space-x-8">
            {paths.map((path, idx) => (
              <Link
                key={idx}
                href={path.href}
                className="group/link flex flex-col "
              >
                <li
                  className={cn(
                    "capitalize ",
                    pathname === path.href ? ACTIVE_ROUTE : INACTIVE_ROUTE
                  )}
                >
                  {path.label}
                  <div
                    className={cn(
                      "w-0 bg-accent-foreground h-px  transition-all duration-250",
                      pathname === path.href &&
                        "w-full bg-primary h-[1.5px] -mt-[0.5px]",
                      pathname !== path.href && "group-hover/link:w-2/3"
                    )}
                  />
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            {session && (
              <GithubImg
                src={session.user?.image ?? ""}
                userName={session.user?.name ?? ""}
                email={session.user?.email ?? ""}
              />
            )}
            <AuthButton />
          </div>
        </nav>
      </MainPage>
    </div>
  );
};

export default NavMenu;
