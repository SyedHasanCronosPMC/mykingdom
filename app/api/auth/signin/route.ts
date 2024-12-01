import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (email === "demo@example.com" && password === "password") {
      return NextResponse.json({
        success: true,
        message: 'Successfully signed in',
        data: { email }
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid credentials'
    }, { status: 401 });

  } catch (error) {
    console.error('Sign in error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred'
    }, { status: 500 });
  }
} 