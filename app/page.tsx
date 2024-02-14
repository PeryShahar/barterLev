
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { Separator } from "@/components/ui/separator"

import { authConfig } from "@/lib/auth";
import { Hero, WhatIs, HowItWorks, Footer } from "@/components/landing-page"

export default async function SignInPage() {
  const session: any = await getServerSession(authConfig);

  if (session) return redirect("/timeline");

  return (
    <>
      <Hero />
      <Separator className="w-4/5	m-auto mt-12" />
      <WhatIs />
      <HowItWorks />
      <Footer />
    </>
  );
}