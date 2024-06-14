import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex flex-col gap-4">
        <p>Welcome!</p>
        <Link href="/buy/insurance_dev" className="underline">
          Developer Insurance!
        </Link>
        <Link href="/buy/insurance_designer" className="underline">
          Designer Insurance!
        </Link>
      </div>
    </main>
  );
}
