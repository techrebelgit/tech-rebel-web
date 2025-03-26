// src/app/test/page.tsx
"use client";
import { useActiveAccount } from "thirdweb/react";

export default function TestPage() {
  const account = useActiveAccount();
  return <div>Account: {account?.address || "Not connected"}</div>;
}
