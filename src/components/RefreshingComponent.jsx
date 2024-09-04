"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const RefreshingComponent = () => {
  const [clicks, setClicks] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 5_000);

    return () => clearInterval(interval);
  }, [router]);

  const onClick = () => {
    setClicks(clicks + 1);
  };

  return <button onClick={onClick}>Click here (clicked {clicks} times)</button>;
};

export default RefreshingComponent;
