import type { ApiResponse, Location } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL;

/**
 * Get all locations
 * @params
 * NextRequest with searchParams
 */
export async function GET(req?: NextRequest) {
  const query = req?.nextUrl.searchParams.toString();

  const res = await fetch(
    query ? `${API_URL}/location/?${query}` : `${API_URL}/location`,
  );

  const data: ApiResponse<Location> = await res.json();

  return NextResponse.json(data);
}
