import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <a className="px-8">Home</a>
      </Link>
      <a className="px-8" href="https://twitter.com/elitasson">
        Twitter
      </a>
      <a className="px-8" href="https://github.com/elitan">
        Github
      </a>
    </div>
  );
}
