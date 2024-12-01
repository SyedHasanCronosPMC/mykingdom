import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json({
      success: true,
      message: 'Account created successfully'
    });

  } catch (error) {
    console.error('Sign up error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to create account'
    }, { status: 500 });
  }
} 