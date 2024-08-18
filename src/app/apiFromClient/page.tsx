"use client";
import { useEffect, useState } from "react";

const ApiFromClient = () => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    fetch("api/whoAmI")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div>
      <div>
        Api Route From <span className="font-bold underline">Client</span>
      </div>
      <div>Name: {name}</div>
    </div>
  );
};

export default ApiFromClient;
