// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Transform the data to match backend API structure
    const backendData = {
      full_name: name,
      email: email,
      phone_number: phone || '', // Use empty string if phone not provided
      service: service,
      message: message
    };

    // Send request to backend API
    const backendResponse = await fetch(process.env.CONTACT_REQUEST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(backendData),
    });

    // Parse the backend response
    const responseData = await backendResponse.json();

    // Check if the backend request was successful
    if (!backendResponse.ok) {
      // Log error for monitoring
      console.error('Backend API error:', {
        status: backendResponse.status,
        data: responseData,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { 
          error: responseData.message || 'Failed to submit contact form. Please try again.' 
        },
        { status: backendResponse.status }
      );
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us. We will respond within 24 hours.',
        data: responseData 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log error for monitoring
    console.error({
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
    });

    // Handle network errors or other exceptions
    const errorMessage = error.code === 'ECONNREFUSED' 
      ? 'Unable to connect to the server. Please try again later.'
      : 'Failed to send message. Please try again or email us directly at info@fintechdynamics.co';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}