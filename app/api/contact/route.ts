
import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      fullName,
      email,
      serviceType,
      location,
      projectBrief,
    } = body

    // Validate required fields on the server.
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !serviceType?.trim() ||
      !location?.trim() ||
      !projectBrief?.trim()
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: "FH Project Inquiry <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `New Project Inquiry - ${fullName}`,
      html: `
        <h2>Client Inquiry</h2> 
        
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Project Brief:</strong></p>
        <p>${projectBrief}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      return NextResponse.json(
        { error: "Unable to send your inquiry right now." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    )
  }
}