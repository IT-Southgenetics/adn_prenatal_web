'use client'

import { useEffect } from 'react'

interface ObfuscatedPhoneProps {
  phone: string
  elementId: string
}

export default function ObfuscatedPhone({ phone, elementId }: ObfuscatedPhoneProps) {
  const encoded = phone.split('').map((char) => char.charCodeAt(0)).join(',')
  const script = `(function(){var el=document.getElementById('${elementId}');if(!el||el.textContent){return;}var chars=[${encoded}];el.textContent=chars.map(function(c){return String.fromCharCode(c)}).join('');})();`

  useEffect(() => {
    const el = document.getElementById(elementId)
    if (!el || el.textContent) return
    const chars = encoded.split(',').map((n) => Number.parseInt(n, 10))
    el.textContent = chars.map((c) => String.fromCharCode(c)).join('')
  }, [elementId, encoded])

  return (
    <>
      <span id={elementId}></span>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  )
}
