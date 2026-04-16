'use client'

import { useEffect } from 'react'

interface ObfuscatedPhoneProps {
  phone: string
  elementId: string
}

export default function ObfuscatedPhone({ phone, elementId }: ObfuscatedPhoneProps) {
  // Obfuscacion ligera: desplaza los codigos para evitar texto plano en HTML.
  const shifted = phone.split('').map((char) => char.charCodeAt(0) + 7)

  useEffect(() => {
    const el = document.getElementById(elementId)
    if (!el || el.textContent) return
    el.textContent = shifted.map((c) => String.fromCharCode(c - 7)).join('')
  }, [elementId, shifted])

  return <span id={elementId} />
}
