import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();

    // Basic validation
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const validRoles = ["USER", "ADMIN", "EMPLOYEE"];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role. Allowed roles: USER, ADMIN, EMPLOYEE" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    // Generate a JWT for the new user
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Set the JWT as an HTTP-only cookie
    const cookie = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "strict",
      path: "/", // Cookie accessible to all routes
      maxAge: 60 * 60, // 1 hour
    });

    const response = NextResponse.json(
      {
        message: "User created successfully",
        user: { id: newUser.id, email: newUser.email, role: newUser.role },
      },
      { status: 201 }
    );
    response.headers.set("Set-Cookie", cookie);
    return response;
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
