"use client";

import Link from "next/link";
import ConnectWallet from "@/components/connect-wallet";

export default function ArmyNavbar() {
  return (
    <nav className="w-full px-6 py-4 border-b border-rebel-gray bg-white flex justify-between items-center shadow-sm">
      <Link href="/army">
        <span className="text-2xl font-bold text-rebel-black">Tech Rebel Army</span>
      </Link>
      <ConnectWallet />
    </nav>
  );
}
