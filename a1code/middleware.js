import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);


async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;
  if (pathname === "/authentication" || pathname === "/") {
    return NextResponse.next();
  }
  const user = await verifyToken(token);
  if (!user) {
    return NextResponse.redirect(new URL("/authentication", request.url));
  }

  if (pathname.startsWith("/admin")) {
    if (user.role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }
  if (pathname.startsWith("/seller")) {
    if (user.role !== "seller") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  if (pathname.startsWith("/paymentPage")) {
    if (user.role !== "user") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/paymentPage/:path*", "/seller/:path*", "/admin/:path*"],
};
