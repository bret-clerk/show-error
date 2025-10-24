import { clerkMiddleware } from "@clerk/nextjs/server";

export const proxy = clerkMiddleware();

export const config = {
  matcher: [
    "/((?!api/webhooks|_next/static|_next/image|favicon.ico).*)",
    "/(test)(.*)",
  ],
  protectedRoutes: [
    "/test(.*)"
  ],
};
