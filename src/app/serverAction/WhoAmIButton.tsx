"use client";

import { useState } from "react";

const WhoAmIButton = ({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>;
}) => {
  const [name, setName] = useState<string>();

  return (
    <div>
      <button
        onClick={async () => setName(await whoAmIAction())}
        className="rounded-md flex items-center justify-center bg-slate-200 text-black px-4 text-base py-1"
      >
        Who Am I?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
};

export default WhoAmIButton;
