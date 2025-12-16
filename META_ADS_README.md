# Meta Ads Dataset Quality API - Guía de Configuración

## 📋 Descripción

Este proyecto incluye una integración completa con el **Meta Ads Dataset Quality API** para monitorear y mejorar la calidad de los datos enviados a Meta a través de la Conversions API.

## 🔑 Configuración Inicial

### 1. Obtener las Credenciales

#### Access Token
Ya tienes tu access token:
```
EAAQ7EOS1S4kBQElqUwJOZCX4ZAOwxCOlCTageDvV5xaY6Jt2xZBLFOZBRCntNxOUXsyO9QyQVdrYXhVZAA2eItMsNjrQbaYs1iB4g4PuiPEuMxsThcP3q8V4OdDr1HIpVN7ejYZBVoCb90dBaZBdi91XOFOv8pIwa5ry6e3UeeNFh9UKnP9eWQ7ZA4HiFhNG7mNIbgZDZD
```

#### Dataset ID (Pixel ID)
Para obtener tu Dataset ID:
1. Ve a [Meta Business Manager](https://business.facebook.com/)
2. Navega a **Events Manager**
3. Selecciona tu Pixel
4. El ID del Pixel es tu Dataset ID (aparece en la URL o en la configuración)

### 2. Configurar Variables de Entorno

Edita tu archivo `.env` y agrega:

```env
# Meta Ads Configuration
META_ACCESS_TOKEN=EAAQ7EOS1S4kBQElqUwJOZCX4ZAOwxCOlCTageDvV5xaY6Jt2xZBLFOZBRCntNxOUXsyO9QyQVdrYXhVZAA2eItMsNjrQbaYs1iB4g4PuiPEuMxsThcP3q8V4OdDr1HIpVN7ejYZBVoCb90dBaZBdi91XOFOv8pIwa5ry6e3UeeNFh9UKnP9eWQ7ZA4HiFhNG7mNIbgZDZD
META_DATASET_ID=TU_PIXEL_ID_AQUI
META_API_VERSION=v21.0
```

## 🚀 Uso

### Ver el Dashboard de Calidad

1. Inicia el servidor de desarrollo:
```bash
npm run dev
```

2. Navega a: `http://localhost:3000/meta-ads`

El dashboard mostrará:
- **Event Match Quality Score (EMQ)**: Puntuación de 0-10
- **Total de Eventos**: Eventos procesados
- **Eventos Coincidentes**: Eventos con match exitoso
- **Tasa de Coincidencia**: Porcentaje de eventos coincidentes
- **Diagnósticos**: Problemas identificados y recomendaciones

### Enviar Eventos de Conversión

#### Desde el Frontend

```typescript
// Ejemplo: Enviar evento de compra
const sendPurchaseEvent = async (userData: any, purchaseData: any) => {
  const response = await fetch('/api/meta-ads/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventName: 'Purchase',
      userData: {
        email: userData.email,
        phone: userData.phone,
        firstName: userData.firstName,
        lastName: userData.lastName,
        city: userData.city,
        state: userData.state,
        zipCode: userData.zipCode,
        country: 'AR', // Código de país
        fbc: getCookie('_fbc'), // Facebook Click ID
        fbp: getCookie('_fbp'), // Facebook Browser ID
      },
      customData: {
        currency: 'ARS',
        value: purchaseData.amount,
        content_ids: [purchaseData.productId],
        content_type: 'product',
      },
      actionSource: 'website',
    }),
  });

  const result = await response.json();
  return result.success;
};
```

#### Eventos Estándar de Meta

- `PageView` - Vista de página
- `ViewContent` - Ver contenido
- `AddToCart` - Agregar al carrito
- `InitiateCheckout` - Iniciar checkout
- `Purchase` - Compra completada
- `Lead` - Lead generado
- `CompleteRegistration` - Registro completado
- `Search` - Búsqueda realizada

### Usar la Librería Directamente

```typescript
import { 
  getDatasetQuality, 
  getEventMatchQuality,
  sendConversionEvent,
  createConversionEvent,
  hashUserData 
} from '@/lib/meta-ads';

// Obtener métricas de calidad
const metrics = await getDatasetQuality();
console.log('EMQ Score:', metrics.event_match_quality_score);

// Obtener solo el score EMQ
const emqScore = await getEventMatchQuality();

// Crear y enviar un evento
const event = createConversionEvent(
  'Purchase',
  {
    em: await hashUserData('user@example.com'),
    ph: await hashUserData('+5491112345678'),
  },
  {
    currency: 'ARS',
    value: 1000,
  }
);

await sendConversionEvent(event);
```

## 📊 Mejorar el Event Match Quality (EMQ)

### Mejores Prácticas

1. **Envía datos completos del usuario**:
   - Email (obligatorio para mejor match)
   - Teléfono
   - Nombre y apellido
   - Ciudad, estado, código postal
   - País

2. **Incluye identificadores de Facebook**:
   - `fbc` (Facebook Click ID) - de la URL `?fbclid=`
   - `fbp` (Facebook Browser ID) - de la cookie `_fbp`

3. **Normaliza los datos antes de hashear**:
   - Convierte a minúsculas
   - Elimina espacios en blanco
   - La librería ya hace esto automáticamente

4. **Envía eventos en tiempo real**:
   - Envía eventos inmediatamente cuando ocurren
   - No esperes a procesos batch

5. **Incluye datos de contexto**:
   - IP del cliente
   - User Agent
   - URL de origen

### Objetivo de EMQ

- **8-10**: Excelente - Máxima precisión de atribución
- **5-7**: Bueno - Atribución aceptable
- **0-4**: Necesita mejora - Envía más datos de usuario

## 🔒 Seguridad

- Todos los datos personales se hashean automáticamente usando SHA-256
- El access token nunca se expone al cliente
- Las llamadas a la API se hacen desde el servidor (API routes)

## 📁 Estructura de Archivos

```
/lib/meta-ads.ts                    # Librería principal
/components/MetaAdsQualityDashboard.tsx  # Dashboard UI
/app/api/meta-ads/quality/route.ts  # API para obtener métricas
/app/api/meta-ads/events/route.ts   # API para enviar eventos
/app/meta-ads/page.tsx              # Página del dashboard
```

## 🔧 Troubleshooting

### Error: "Meta Ads credentials not configured"
- Verifica que `META_ACCESS_TOKEN` y `META_DATASET_ID` estén en `.env`
- Reinicia el servidor de desarrollo

### Error: "Meta API Error: Invalid OAuth access token"
- El token puede haber expirado
- Genera un nuevo token desde Meta Business Manager

### EMQ Score bajo
- Revisa los diagnósticos en el dashboard
- Asegúrate de enviar email y teléfono
- Incluye los IDs de Facebook (fbc, fbp)

## 📚 Recursos

- [Meta Conversions API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Dataset Quality API](https://developers.facebook.com/docs/marketing-api/conversions-api/dataset-quality)
- [Event Match Quality Guide](https://www.facebook.com/business/help/765081237991954)

## 🎯 Próximos Pasos

1. Obtén tu Dataset ID (Pixel ID)
2. Actualiza el archivo `.env`
3. Visita `/meta-ads` para ver el dashboard
4. Implementa el envío de eventos en tu flujo de conversión
5. Monitorea y optimiza tu EMQ score
