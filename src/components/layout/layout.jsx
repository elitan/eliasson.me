import React from "react";
import { Header } from "components/layout";

export function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
}
