"use client";

import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

type UserProps = {
  token?: string;
};

export const User = ({ token }: UserProps) => {
  const posthog = usePostHog();

  useEffect(() => {
    if (token) {
      posthog.identify("my-user-id");
    } else {
      posthog.reset();
    }
  }, [posthog, token]);

  return <>{token && "You are authenticated"}</>;
};
