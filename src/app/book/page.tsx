"use client";

import { RequireNFTGate } from "@/components/gating/RequireNFTGate";
import { useActiveAccount } from "thirdweb/react";
import ConnectWallet from "@/components/connect-wallet";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

export default function BookPage() {
  const account = useActiveAccount();
  const walletAddress = account?.address;

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <h1 className="text-5xl font-bold mb-6">Book a 1:1 Session</h1>
        
        <p className="text-xl mb-12">
          Schedule a personalized strategy and product feedback session with our team. These exclusive sessions are only
          available to Tech Rebel NFT holders.
        </p>
        <ConnectWallet className=" p-6"/>
        {!walletAddress ? (
          <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="mb-8">
              You need to connect your wallet to book a 1:1 session. This allows us to verify your NFT ownership.
            </p>
            <div className="flex justify-center p-6">
              <ConnectWallet className="w-full max-w-xs" />
            </div>
          </div>
        ) : (
          <RequireNFTGate
            fallback={
              <div className="bg-rebel-light p-8 rounded-xl border border-rebel-gray shadow-sm text-center">
                <h2 className="text-2xl font-bold mb-4">NFT Required</h2>
                <p className="mb-8">
                  You need to own a Tech Rebel NFT to book a 1:1 session. Visit our Mint page to get one.
                </p>
                <Button className="px-6" asChild>
                  <a href="/mint">Get a Tech Rebel NFT</a>
                </Button>
              </div>
            }
          >
            {/* Booking section for NFT holders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-xl border border-rebel-gray shadow-sm">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Calendar className="mr-2 h-6 w-6 text-rebel-red" />
                    Select a Date & Time
                  </h2>
                  <div className="calendar-container w-full overflow-hidden rounded-md">
                    <iframe
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3m7DsngFUO0ChEk1uRGuk7yhOf8eXwrwSpgOuWiaocmJXP7GshdbqaGfPIIT54dkyELWCDrCTC?gv=true"
                      style={{ border: 0 }}
                      width="100%"
                      height="600"
                      frameBorder="0"
                      title="Book an appointment"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-rebel-light p-6 rounded-xl border border-rebel-gray shadow-sm sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Session Details</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-rebel-red mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">1:1 Strategy Session</p>
                        <p className="text-sm text-gray-600">60 minutes with our team</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-rebel-gray">
                      <p className="text-sm text-gray-600">
                        Select a date and time from the calendar to schedule your session. You&apos;ll receive a confirmation
                        email with meeting details.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-rebel-gray">
                      <p className="text-sm text-gray-600">
                        <strong>Connected Wallet:</strong>
                        <br />
                        {walletAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RequireNFTGate>
        )}
      </div>
    </main>
  );
}
