import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import dojoLogo from "../../../public/images/dojo-coding.jpg";
import techRebelLogo from "../../../public/tech-rebel-logo.png";
import trustlessLogo from "../../../public/images/trustless-black.png";

export default function CohortPage() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <section className="text-center space-y-4">
        <div className="flex justify-center items-center gap-4">
          <Image src={dojoLogo} alt="Dojo Coding" width={100} height={100} />
          <Image src={techRebelLogo} alt="Tech Rebel" width={120} height={100} />
          <Image src={trustlessLogo} alt="Trustless Work" width={100} height={100} />
        </div>
        <h1 className="text-4xl font-bold mt-6">Cohort 1 – Call for Products</h1>
        <p className="text-lg text-muted-foreground">
          🚀 A builder cohort for LatAm teams working on AI & Web3 products, with a focus on fast shipping, accountability, and building in public.
        </p>
        <p className="text-lg text-muted-foreground">
          Teams building with <strong>Trustless Work</strong> or from the <strong>DojoCoding community</strong> are especially encouraged to apply.
        </p>
        <p className="text-muted-foreground">
          It’s a 6-week program. Don’t know what to build? <Link href="https://docs.trustlesswork.com/trustless-work/use-cases-unlocking-the-potential-of-smart-escrows" className="underline">Check out use cases here</Link>.
        </p>
        <Button asChild>
          <Link href="#apply">Apply Now</Link>
        </Button>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold">🧑‍💻 Who Is This For?</h2>
        <p>We’re calling LatAm teams that:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Are actively building or validating an idea</li>
          <li>Use AI tools and are Web3-curious</li>
          <li>Want structure, exposure, and accountability</li>
          <li>Operate in Spanish</li>
          <li>Are building with <strong>Trustless Work</strong></li>
        </ul>
        <p>
          Workshops will be held in <strong>Spanish</strong>, but most written content will be in <strong>English</strong>. You can choose to pitch in either language. We’re Spanish-first, but we understand the importance of English and see this as an opportunity to practice and improve.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">✅ Requirements to Join</h2>
        <p>
          Tech Rebel Cohort 1 is currently exclusive to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Teams where 50% or more of members are part of the <Link className="underline" href="https://dojocoding.io/">DojoCoding</Link> community</li>
          <li>Teams building on <Link className="underline" href="https://www.trustlesswork.com/">Trustless Work</Link></li>
        </ul>
        <p className="mt-2">
          If your team does not yet meet these requirements, you can still apply — but you’ll be placed on a waitlist.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">📆 Cohort Rhythm</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Intro & Goals</li>
          <li>Customer & Validation</li>
          <li>Prioritization & Scope</li>
          <li>Go-To-Market & Messaging</li>
          <li>Build & Show</li>
          <li>Story & Wrap-Up</li>
        </ol>
      </section>

      <section className="mt-12 space-y-4 text-center" id="apply">
        <h2 className="text-2xl font-semibold">🧾 Apply Now</h2>
        <p>
          Priority is given to DojoCoding teams and those building with Trustless Work. Others may apply and will be added to the waitlist.
        </p>
        <Button asChild>
          <Link href="https://tally.so/r/w2RPoe">Apply to Tech Rebel Cohort 1</Link>
        </Button>
      </section>
    </div>
  );
}
