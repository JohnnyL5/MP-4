import {NextResponse} from "next/server";

export const dynamic = "force-dynamic";

const HARVARD_API_KEY = process.env.HARVARD_API_KEY;

export async function GET(): Promise<NextResponse> {
    if (!HARVARD_API_KEY) {
        return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const res = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&size=20&fields=id,title,dated,primaryimageurl`
    );

    if (res.status !== 200) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }

    const data = await res.json();

    return NextResponse.json(data);
}