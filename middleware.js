import { NextResponse } from "next/server";

export function middleware(request) {
    console.log(request)
    return NextResponse.next()
    // NextResponse tiene muchos métodos
}

export const config = {
    matcher: ['/news', '/archive'] // to filter the kind of request
}