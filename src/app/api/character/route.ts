import type { ApiResponse, Character } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL;

/**
 * Get all characters
 * @params
 * NextRequest with searchParams
 */
export async function GET(req?: NextRequest): Promise<NextResponse<ApiResponse<Character>>> {
  const query = req?.nextUrl.searchParams.toString();

  const res = await fetch(
   query
    ? `${API_URL}/character/?${query}`
    : `${API_URL}/character`
  );

  const data: ApiResponse<Character> = await res.json();

  return NextResponse.json(data);
}

