"use client"

import { createThirdwebClient } from "thirdweb"
import { ConnectButton, ThirdwebProvider } from "thirdweb/react"
import { createWallet } from "thirdweb/wallets";
import { base } from "thirdweb/chains";

interface ConnectWalletProps {
  className?: string
}

export default function ConnectWallet({ className = "" }: ConnectWalletProps) {
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
  })

  const wallets = [
    createWallet("com.coinbase.wallet"),
    createWallet("io.metamask"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ]

  return (
    <div className={className}>
      <ThirdwebProvider>
      <ConnectButton
          client={client}
          wallets={wallets}
          chain={ base }
          connectModal={{
            size: "compact",
            showThirdwebBranding: false,
            title: "Connect Your Wallet",
          }}
        />
      </ThirdwebProvider>
    </div>
  )
}

