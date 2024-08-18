"use client";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  return (
    <div className="border-b w-full shadow-sm border-white mb-20">
      {session && (
        <div className="flex justify-between items-center">
          {session.user?.name} <br />
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
  return (
    <div>
      <AuthButton />
    </div>
  );
};

export default NavMenu;
