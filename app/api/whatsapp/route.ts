import { NextResponse } from 'next/server'

const countryNumberMap: Record<string, string | undefined> = {
  cl: process.env.WHATSAPP_CL,
  mx: process.env.WHATSAPP_MX
}

interface WhatsAppRequestBody {
  countryCode?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WhatsAppRequestBody
    const countryCode = body.countryCode?.toLowerCase()

    if (!countryCode) {
      return NextResponse.json({ error: 'countryCode is required' }, { status: 400 })
    }

    const whatsappNumber = countryNumberMap[countryCode]
    if (!whatsappNumber) {
      return NextResponse.json({ error: `WhatsApp number not configured for ${countryCode}` }, { status: 404 })
    }

    const message = body.message ?? 'Hola, quiero recibir más información sobre el test de paternidad prenatal.'
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    return NextResponse.json({ url })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
