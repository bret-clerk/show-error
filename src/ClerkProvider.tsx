"use client"

import { ClerkProvider } from "@clerk/nextjs";

export default function ClientClerkProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}
