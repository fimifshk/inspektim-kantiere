<<<<<<< HEAD
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
=======
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
>>>>>>> a5f1ea22 (instalo librarite e reja)
}