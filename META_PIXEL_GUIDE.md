# Meta Pixel - Guía de Uso

## 🎯 Configuración Completa

El Meta Pixel ya está instalado y configurado en tu proyecto. Se carga automáticamente en todas las páginas y rastrea las vistas de página.

**Pixel ID:** `716760367715152`

## 📊 Eventos que se Rastrean Automáticamente

### ✅ PageView
Se rastrea automáticamente cada vez que el usuario navega a una nueva página.

## 🔥 Cómo Rastrear Eventos Personalizados

### Importar las funciones

```typescript
import { events, trackEvent, trackCustomEvent } from '@/lib/meta-pixel';
```

### Ejemplos de Uso

#### 1. Evento de Compra (Purchase)
```typescript
'use client';

import { events } from '@/lib/meta-pixel';

export function CheckoutButton() {
  const handlePurchase = async () => {
    // ... lógica de compra ...
    
    // Rastrear el evento
    events.purchase({
      content_ids: ['producto-123'],
      content_type: 'product',
      value: 1500,
      currency: 'ARS',
      num_items: 1,
    });
  };

  return <button onClick={handlePurchase}>Comprar</button>;
}
```

#### 2. Evento de Lead
```typescript
import { events } from '@/lib/meta-pixel';

export function ContactForm() {
  const handleSubmit = async (formData: any) => {
    // ... enviar formulario ...
    
    // Rastrear el lead
    events.lead({
      content_name: 'Formulario de Contacto',
      content_category: 'contacto',
      value: 0,
      currency: 'ARS',
    });
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

#### 3. Evento de Registro Completo
```typescript
import { events } from '@/lib/meta-pixel';

export function SignupForm() {
  const handleSignup = async (userData: any) => {
    // ... crear usuario ...
    
    // Rastrear el registro
    events.completeRegistration({
      content_name: 'Registro de Usuario',
      value: 0,
      currency: 'ARS',
      status: 'success',
    });
  };

  return <form onSubmit={handleSignup}>...</form>;
}
```

#### 4. Ver Contenido (ViewContent)
```typescript
import { events } from '@/lib/meta-pixel';
import { useEffect } from 'react';

export function ProductPage({ product }: { product: any }) {
  useEffect(() => {
    // Rastrear cuando se ve el producto
    events.viewContent({
      content_name: product.name,
      content_category: product.category,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price,
      currency: 'ARS',
    });
  }, [product]);

  return <div>...</div>;
}
```

#### 5. Agregar al Carrito (AddToCart)
```typescript
import { events } from '@/lib/meta-pixel';

export function AddToCartButton({ product }: { product: any }) {
  const handleAddToCart = () => {
    // ... agregar al carrito ...
    
    // Rastrear el evento
    events.addToCart({
      content_ids: [product.id],
      content_name: product.name,
      content_type: 'product',
      value: product.price,
      currency: 'ARS',
    });
  };

  return <button onClick={handleAddToCart}>Agregar al Carrito</button>;
}
```

#### 6. Iniciar Checkout (InitiateCheckout)
```typescript
import { events } from '@/lib/meta-pixel';

export function CheckoutPage({ cart }: { cart: any }) {
  useEffect(() => {
    // Rastrear cuando se inicia el checkout
    events.initiateCheckout({
      content_ids: cart.items.map((item: any) => item.id),
      content_category: 'checkout',
      num_items: cart.items.length,
      value: cart.total,
      currency: 'ARS',
    });
  }, [cart]);

  return <div>...</div>;
}
```

#### 7. Búsqueda (Search)
```typescript
import { events } from '@/lib/meta-pixel';

export function SearchBar() {
  const handleSearch = (query: string) => {
    // ... realizar búsqueda ...
    
    // Rastrear la búsqueda
    events.search({
      search_string: query,
      content_category: 'search',
    });
  };

  return <input onChange={(e) => handleSearch(e.target.value)} />;
}
```

#### 8. Contacto (Contact)
```typescript
import { events } from '@/lib/meta-pixel';

export function ContactButton() {
  const handleContact = () => {
    // ... abrir chat o formulario ...
    
    // Rastrear el contacto
    events.contact({
      content_name: 'WhatsApp',
      content_category: 'contact',
    });
  };

  return <button onClick={handleContact}>Contactar</button>;
}
```

#### 9. Evento Personalizado
```typescript
import { trackCustomEvent } from '@/lib/meta-pixel';

export function CustomAction() {
  const handleCustomAction = () => {
    // Rastrear un evento personalizado
    trackCustomEvent('ReservarSesion', {
      session_type: 'meditacion',
      duration: '60min',
      value: 500,
      currency: 'ARS',
    });
  };

  return <button onClick={handleCustomAction}>Reservar Sesión</button>;
}
```

## 📋 Eventos Estándar Disponibles

| Evento | Función | Uso |
|--------|---------|-----|
| `PageView` | Automático | Vista de página |
| `ViewContent` | `events.viewContent()` | Ver producto/servicio |
| `AddToCart` | `events.addToCart()` | Agregar al carrito |
| `InitiateCheckout` | `events.initiateCheckout()` | Iniciar compra |
| `Purchase` | `events.purchase()` | Compra completada |
| `Lead` | `events.lead()` | Lead generado |
| `CompleteRegistration` | `events.completeRegistration()` | Registro completado |
| `Search` | `events.search()` | Búsqueda realizada |
| `Contact` | `events.contact()` | Contacto iniciado |

## 🔍 Verificar que Funciona

### 1. Meta Pixel Helper (Chrome Extension)
1. Instala [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Navega a tu sitio
3. Verifica que el pixel se carga y los eventos se disparan

### 2. Events Manager
1. Ve a [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Selecciona tu Pixel (716760367715152)
3. Ve a "Test Events" para ver eventos en tiempo real

### 3. Consola del Navegador
```javascript
// Verificar que el pixel está cargado
console.log(window.fbq);

// Ver la cola de eventos
console.log(window.fbq.queue);
```

## 🎨 Integración con Conversions API

Para mejorar el Event Match Quality (EMQ), puedes enviar los mismos eventos también desde el servidor:

```typescript
import { sendConversionEvent, createConversionEvent, hashUserData } from '@/lib/meta-ads';

// En tu API route
export async function POST(request: Request) {
  const { email, phone, purchaseData } = await request.json();
  
  // Crear evento del lado del servidor
  const event = createConversionEvent(
    'Purchase',
    {
      em: await hashUserData(email),
      ph: await hashUserData(phone),
      client_ip_address: request.headers.get('x-forwarded-for'),
      client_user_agent: request.headers.get('user-agent'),
    },
    {
      currency: 'ARS',
      value: purchaseData.amount,
    }
  );
  
  // Enviar a Meta
  await sendConversionEvent(event);
  
  return Response.json({ success: true });
}
```

## 🚀 Mejores Prácticas

1. **Rastrear eventos importantes**: Enfócate en eventos que indican intención de compra o conversión
2. **Datos consistentes**: Usa los mismos nombres de eventos en pixel y Conversions API
3. **Valores monetarios**: Siempre incluye `value` y `currency` cuando sea relevante
4. **IDs de contenido**: Usa IDs únicos y consistentes para productos/servicios
5. **Testing**: Siempre prueba con Meta Pixel Helper antes de lanzar

## 📊 Monitoreo

Visita `/meta-ads` en tu aplicación para ver el dashboard de calidad de datos y Event Match Quality (EMQ).

## 🔗 Recursos

- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Standard Events Reference](https://developers.facebook.com/docs/meta-pixel/reference)
- [Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api)
