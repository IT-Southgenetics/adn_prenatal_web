# Paternidad Prenatal MX - Next.js

Una aplicación web moderna para pruebas de paternidad prenatal en México, construida con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño moderno y responsivo** con Tailwind CSS
- **Animaciones fluidas** con Framer Motion
- **Optimizado para SEO** con metadatos dinámicos
- **Formularios interactivos** con validación en tiempo real
- **Navegación suave** entre secciones
- **Accesibilidad mejorada** con ARIA labels
- **Rendimiento optimizado** con Next.js 14

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **PostCSS** - Procesamiento de CSS

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del proyecto

```
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página principal
│   ├── robots.ts            # Configuración de robots
│   └── sitemap.ts           # Mapa del sitio
├── components/
│   ├── Header.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección hero
│   ├── HowItWorks.tsx       # Proceso paso a paso
│   ├── Benefits.tsx         # Beneficios destacados
│   ├── FAQ.tsx              # Preguntas frecuentes
│   ├── Contact.tsx          # Formulario de contacto
│   └── Footer.tsx           # Pie de página
├── public/                  # Archivos estáticos
├── tailwind.config.js       # Configuración de Tailwind
├── next.config.js           # Configuración de Next.js
└── tsconfig.json            # Configuración de TypeScript
```

## 🔐 Variables de entorno (WhatsApp CL/MX)

Para evitar exponer números de WhatsApp en el código cliente de Chile y México, define estas variables privadas en tu entorno:

```bash
WHATSAPP_CL=598XXXXXXXX
WHATSAPP_MX=52XXXXXXXXXX
```

- Se usan desde el endpoint `app/api/whatsapp/route.ts`.
- No deben llevar prefijo `NEXT_PUBLIC_`.
- Si faltan, el botón de WhatsApp en `/cl` o `/mx` mostrará un mensaje de configuración pendiente.

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Colores principales
  },
  secondary: {
    // Colores secundarios
  },
  accent: {
    // Colores de acento
  }
}
```

### Animaciones
Las animaciones se definen en `tailwind.config.js` y se pueden personalizar:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'bounce-gentle': 'bounceGentle 2s infinite',
}
```

## 📱 Responsive Design

La aplicación está optimizada para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otras plataformas
```bash
npm run build
npm start
```

## 📊 SEO

- Metadatos optimizados
- Sitemap automático
- Robots.txt configurado
- Estructura semántica HTML5
- Imágenes optimizadas

## 🔧 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm start` - Servidor de producción
- `npm run lint` - Linter de código

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📞 Soporte

Para soporte técnico, contacta a:
- Email: paternidadprenatalmx@ejemplo.com

# adn-prenatal
# adn_prenat
