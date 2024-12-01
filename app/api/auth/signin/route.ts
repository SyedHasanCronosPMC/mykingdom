import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Add your authentication logic here
    // This is where you would typically:
    // 1. Validate the credentials
    // 2. Check against your database
    // 3. Create a session or JWT token
    // 4. Return the appropriate response

    // For demo purposes:
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
    return NextResponse.json({
      success: false,
      message: 'An error occurred'
    }, { status: 500 });
  }
} 