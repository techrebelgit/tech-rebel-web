"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Mint", href: "/mint" },
    { name: "Projects", href: "/projects" },
    { name: "Book", href: "/book" },
    { name: "Invest", href: "/invest" },
    { name: "Aprenda", href: "/learn" },
  ]

  return (
    <nav className="py-4 px-6 flex items-center justify-between bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/tech-rebel-logo.png"
          alt="Tech Rebel Logo"
          width={140}
          height={60}
          className="h-12 w-auto"
          priority
        />
      </Link>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-rebel-black" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white text-rebel-black border-rebel-gray">
          <SheetTitle className="text-rebel-black">Menu</SheetTitle>
          <div className="flex flex-col space-y-6 mt-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-medium hover:text-rebel-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

