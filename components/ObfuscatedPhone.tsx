'use client'

interface ObfuscatedPhoneProps {
  phone: string
  elementId: string
}

export default function ObfuscatedPhone({ phone, elementId }: ObfuscatedPhoneProps) {
  const encoded = phone.split('').map((char) => char.charCodeAt(0)).join(',')
  const script = `(function(){function setPhone(){var el=document.getElementById('${elementId}');if(!el||el.textContent){return;}var chars=[${encoded}];el.textContent=chars.map(function(c){return String.fromCharCode(c)}).join('');}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',setPhone);}else{setPhone();}})();`

  return (
    <>
      <span id={elementId}></span>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  )
}
