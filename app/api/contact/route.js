export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Use import for nodemailer (ESM)
    const nodemailer = (await import('nodemailer')).default

    // Use environment variables for credentials
    const user = process.env.EMAIL_USER
    const pass = process.env.EMAIL_PASS

    const isPlaceholder = !pass || pass === 'your_gmail_app_password_here' || pass.includes('placeholder')

    if (!user || isPlaceholder) {
      if (process.env.NODE_ENV === 'development') {
        console.log('==========================================================')
        console.log('📬 DEVELOPMENT MODE: SIMULATED CONTACT FORM SUBMISSION')
        console.log(`From: ${name} (${email})`)
        console.log(`Subject: ${subject}`)
        console.log(`Message: ${message}`)
        console.log('==========================================================')
        return Response.json(
          { message: 'Message sent successfully (Simulated)' },
          { status: 200 }
        )
      }
      return Response.json({ error: 'Email credentials not set' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    })

    const mailOptions = {
      from: email,
      to: user,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    }

    try {
      await transporter.sendMail(mailOptions)
      return Response.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      )
    } catch (err) {
      console.error('Error sending email:', err)
      
      // Fallback in development mode
      if (process.env.NODE_ENV === 'development') {
        console.log('==========================================================')
        console.log('⚠️ GMAIL AUTHENTICATION FAILED (Invalid credentials in .env.local)')
        console.log('📬 FALLING BACK TO SIMULATED CONTACT FORM SUBMISSION')
        console.log(`From: ${name} (${email})`)
        console.log(`Subject: ${subject}`)
        console.log(`Message: ${message}`)
        console.log('==========================================================')
        return Response.json(
          { message: 'Message sent successfully (Simulated due to SMTP error)' },
          { status: 200 }
        )
      }

      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}