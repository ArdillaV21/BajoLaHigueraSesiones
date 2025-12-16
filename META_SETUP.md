# 🎯 Meta Ads - Configuración Completa

## ✅ Instalación Completada

Tu proyecto ahora tiene integración completa con:
- **Meta Pixel** (Pixel ID: `716760367715152`)
- **Dataset Quality API** (para monitorear EMQ)
- **Conversions API** (para eventos del lado del servidor)

## 📁 Archivos Creados

### Librerías y Hooks
- `lib/meta-pixel.tsx` - Meta Pixel con tracking automático
- `lib/meta-ads.ts` - Dataset Quality API y Conversions API
- `hooks/useMetaPixel.ts` - Hook personalizado para eventos

### Componentes
- `components/MetaAdsQualityDashboard.tsx` - Dashboard de calidad EMQ
- `components/MetaPixelExamples.tsx` - Ejemplos interactivos

### API Routes
- `app/api/meta-ads/quality/route.ts` - Obtener métricas de calidad
- `app/api/meta-ads/events/route.ts` - Enviar eventos del servidor

### Páginas
- `app/meta-ads/page.tsx` - Dashboard de calidad (`/meta-ads`)
- `app/meta-pixel-test/page.tsx` - Página de prueba (`/meta-pixel-test`)

### Documentación
- `META_ADS_README.md` - Guía completa de Dataset Quality API
- `META_PIXEL_GUIDE.md` - Guía completa de Meta Pixel
- `.env.example` - Variables de entorno

## 🚀 Configuración Rápida

### 1. Actualiza tu archivo `.env`

```env
# Meta Ads Configuration
META_ACCESS_TOKEN=EAAQ7EOS1S4kBQElqUwJOZCX4ZAOwxCOlCTageDvV5xaY6Jt2xZBLFOZBRCntNxOUXsyO9QyQVdrYXhVZAA2eItMsNjrQbaYs1iB4g4PuiPEuMxsThcP3q8V4OdDr1HIpVN7ejYZBVoCb90dBaZBdi91XOFOv8pIwa5ry6e3UeeNFh9UKnP9eWQ7ZA4HiFhNG7mNIbgZDZD
META_DATASET_ID=716760367715152
META_API_VERSION=v21.0

# Meta Pixel (Frontend)
NEXT_PUBLIC_META_PIXEL_ID=716760367715152
```

### 2. Inicia el servidor

```bash
npm run dev
```

### 3. Prueba la integración

Visita estas páginas:
- **Dashboard de Calidad**: http://localhost:3000/meta-ads
- **Ejemplos de Eventos**: http://localhost:3000/meta-pixel-test

## 📊 Uso Básico

### Rastrear Eventos con el Hook

```typescript
'use client';

import { useMetaPixel } from '@/hooks/useMetaPixel';

export function MyComponent() {
  const { trackPurchase, trackLead } = useMetaPixel();

  const handlePurchase = () => {
    trackPurchase({
      contentIds: ['producto-123'],
      value: 1500,
      currency: 'ARS',
      numItems: 1,
    });
  };

  return <button onClick={handlePurchase}>Comprar</button>;
}
```

### Eventos Disponibles

| Evento | Función | Descripción |
|--------|---------|-------------|
| PageView | Automático | Vista de página |
| ViewContent | `trackViewContent()` | Ver producto/servicio |
| AddToCart | `trackAddToCart()` | Agregar al carrito |
| InitiateCheckout | `trackInitiateCheckout()` | Iniciar checkout |
| Purchase | `trackPurchase()` | Compra completada |
| Lead | `trackLead()` | Lead generado |
| CompleteRegistration | `trackRegistration()` | Registro completado |
| Search | `trackSearch()` | Búsqueda |
| Contact | `trackContact()` | Contacto |

## 🔍 Verificar que Funciona

### Opción 1: Meta Pixel Helper (Recomendado)
1. Instala [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Navega a tu sitio
3. El ícono mostrará los eventos en tiempo real

### Opción 2: Meta Events Manager
1. Ve a [Events Manager](https://business.facebook.com/events_manager2)
2. Selecciona tu Pixel (716760367715152)
3. Ve a "Test Events"

### Opción 3: Consola del Navegador
```javascript
// Verificar que el pixel está cargado
console.log(window.fbq);
```

## 📈 Monitorear Calidad de Datos

El **Event Match Quality (EMQ)** es crucial para la efectividad de tus anuncios.

### Ver Dashboard
Visita `/meta-ads` para ver:
- Score EMQ (0-10)
- Total de eventos
- Tasa de coincidencia
- Diagnósticos y recomendaciones

### Mejorar EMQ
1. Envía datos completos del usuario (email, teléfono, nombre)
2. Incluye Facebook Click ID (fbc) y Browser ID (fbp)
3. Envía eventos desde el servidor también (Conversions API)
4. Normaliza datos antes de hashear

**Objetivo**: EMQ Score > 8 para máxima efectividad

## 🎯 Próximos Pasos

1. ✅ Meta Pixel instalado y funcionando
2. ✅ Dataset Quality API configurado
3. ✅ Conversions API listo
4. 🔲 Implementar eventos en tu flujo de usuario
5. 🔲 Monitorear y optimizar EMQ
6. 🔲 Crear audiencias personalizadas
7. 🔲 Configurar campañas de conversión

## 📚 Documentación Detallada

- **Meta Pixel**: Lee `META_PIXEL_GUIDE.md`
- **Dataset Quality API**: Lee `META_ADS_README.md`

## 🆘 Soporte

### Problemas Comunes

**El pixel no se carga**
- Verifica que `NEXT_PUBLIC_META_PIXEL_ID` esté en `.env`
- Reinicia el servidor de desarrollo

**Los eventos no aparecen**
- Usa Meta Pixel Helper para debugging
- Verifica la consola del navegador

**EMQ Score bajo**
- Revisa diagnósticos en `/meta-ads`
- Asegúrate de enviar email y teléfono
- Implementa Conversions API

## 🔗 Enlaces Útiles

- [Meta Business Manager](https://business.facebook.com/)
- [Events Manager](https://business.facebook.com/events_manager2)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Conversions API Docs](https://developers.facebook.com/docs/marketing-api/conversions-api)

---

**Pixel ID**: `716760367715152`  
**Estado**: ✅ Configurado y funcionando
