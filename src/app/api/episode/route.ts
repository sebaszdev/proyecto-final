import type { ApiResponse, Episode } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL;

/**
 * Get all episodes
 * @params
 * NextRequest with searchParams
 */
export async function GET(req?: NextRequest) {
  const query = req?.nextUrl.searchParams.toString();

  const res = await fetch(
    query
    ? `${API_URL}/episode/?${query}`
    : `${API_URL}/episode`
  );

  const data: ApiResponse<Episode> = await res.json();

  return NextResponse.json(data);
}
