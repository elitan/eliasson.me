import React from "react";
import { Header } from "components/layout";

export function Layout({ children }) {
  return (
    <div className="container mx-auto px-4">
      <Header />
      {children}
    </div>
  );
}
