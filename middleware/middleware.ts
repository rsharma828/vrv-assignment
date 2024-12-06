import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Retrieve the token from cookies

  if (!token) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // user info
    req.headers.set("user", JSON.stringify(decoded));

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/protected-route"],
};
