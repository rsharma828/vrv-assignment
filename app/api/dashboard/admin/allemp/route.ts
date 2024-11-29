import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const verifyAdmin = (token: string) => {
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
      role: string;
    };
    if (decodedToken.role !== "ADMIN") {
      throw new Error("Access denied. Admins only.");
    }
    return decodedToken;
  } catch (error) {
    throw new Error("Unauthorized access");
  }
};

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 401 }
      );
    }

    const decodedToken = verifyAdmin(token);

    const employees = await prisma.user.findMany({
      where: { role: "EMPLOYEE" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: error.message === "Unauthorized access" ? 401 : 500 }
    );
  }
}
