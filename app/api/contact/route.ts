import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { fullName, email, serviceType, location, projectBrief } = body

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "fhinterior7@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Client Inquiry</h2>
        
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Project Brief:</strong></p>
        <p>${projectBrief}</p>
      `,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}