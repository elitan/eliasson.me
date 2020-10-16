import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <div className="container mx-auto py-4">
      <Link href="/">Home</Link>
    </div>
  );
}
