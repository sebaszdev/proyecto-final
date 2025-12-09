import type { Location } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.API_URL;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const res = await fetch(`${API_URL}/location/${id}`);

  const data: Location = await res.json();

  return NextResponse.json(data);
}
