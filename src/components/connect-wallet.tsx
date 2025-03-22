"use client"

import { createThirdwebClient } from "thirdweb"
import { ConnectButton, ThirdwebProvider } from "thirdweb/react"

interface ConnectWalletProps {
  className?: string
}

export default function ConnectWallet({ className = "" }: ConnectWalletProps) {
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
  })

  return (
    <div className={className}>
      <ThirdwebProvider>
        <ConnectButton
          client={client}
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

