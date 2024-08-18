"use client";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

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
const ACTIVE_ROUTE = "py-2 px-1 text-gray-300 transition-all underline";
const INACTIVE_ROUTE =
  "py-2 px-1 text-gray-500  hover:text-gray-300 transition-all";

const AuthButton = () => {
  const { data: session } = useSession();

  return (
    <div className="border-b w-full shadow-sm border-white">
      {session && (
        <div className="flex justify-between items-center">
          user: {session.user?.name} <br />
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      )}
      {!session && (
        <div className="flex justify-between items-center">
          Not signed in <br />
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      )}
    </div>
  );
};

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      <AuthButton />
      <ul className="flex w-full gap-4 bg-gray-700 px-4 items-center">
        {paths.map((path, idx) => (
          <Link key={idx} href={path.href}>
            <li
              className={pathname === path.href ? ACTIVE_ROUTE : INACTIVE_ROUTE}
            >
              {path.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
