import { NextResponse } from 'next/server';

interface DiagnosticRequestBody {
  businessType: string;
  primaryFriction: string[];
  monthlyLeads: string;
  notes?: string;
  name: string;
  email: string;
  phone?: string;
}

export async function POST(request: Request) {
  try {
    const body: DiagnosticRequestBody = await request.json();

    const { name, email, businessType, primaryFriction, monthlyLeads, notes, phone } = body;

    // Server-side input validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!businessType || typeof businessType !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Business domain selection is required.' },
        { status: 400 }
      );
    }

    if (!Array.isArray(primaryFriction) || primaryFriction.length === 0) {
      return NextResponse.json(
        { success: false, error: 'At least one primary friction point must be selected.' },
        { status: 400 }
      );
    }

    // Optional Webhook or Email Notification Delivery
    const webhookUrl = process.env.DIAGNOSTIC_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'NEW_DIAGNOSTIC_SUBMISSION',
            timestamp: new Date().toISOString(),
            data: {
              name: name.trim(),
              email: email.trim(),
              phone: phone ? phone.trim() : undefined,
              businessType,
              primaryFriction,
              monthlyLeads,
              notes: notes ? notes.trim() : undefined,
            },
          }),
        });
      } catch (webhookError) {
        console.error('Webhook notification error:', webhookError);
        // We continue as server-side intake is acknowledged
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Diagnostic intake recorded successfully.',
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Diagnostic API error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error processing diagnostic intake request.' },
      { status: 500 }
    );
  }
}
