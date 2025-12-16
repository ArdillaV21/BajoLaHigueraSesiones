'use client';

import { useMetaPixel } from '@/hooks/useMetaPixel';
import { Button } from '@/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { ShoppingCart, Heart, Search, UserPlus, Phone, CreditCard } from 'lucide-react';

/**
 * Componente de ejemplo que muestra cómo usar Meta Pixel
 * Este es solo un ejemplo educativo
 */
export function MetaPixelExamples() {
    const {
        trackViewContent,
        trackPurchase,
        trackLead,
        trackRegistration,
        trackAddToCart,
        trackInitiateCheckout,
        trackSearch,
        trackContact,
        trackCustom,
    } = useMetaPixel();

    return (
        <div className="container mx-auto py-10">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Meta Pixel - Ejemplos de Eventos</h1>
                    <p className="text-muted-foreground">
                        Haz clic en los botones para disparar eventos de ejemplo
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Ver Contenido */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Heart className="h-5 w-5" />
                                Ver Contenido
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando un usuario ve un producto o servicio
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackViewContent({
                                        contentName: 'Sesión de Meditación',
                                        contentCategory: 'servicios',
                                        contentIds: ['sesion-meditacion-1'],
                                        contentType: 'service',
                                        value: 500,
                                        currency: 'ARS',
                                    });
                                    alert('✅ Evento ViewContent enviado!');
                                }}
                                className="w-full"
                            >
                                Ver Servicio
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Agregar al Carrito */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShoppingCart className="h-5 w-5" />
                                Agregar al Carrito
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando se agrega un item al carrito
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackAddToCart({
                                        contentIds: ['sesion-meditacion-1'],
                                        contentName: 'Sesión de Meditación',
                                        contentType: 'service',
                                        value: 500,
                                        currency: 'ARS',
                                    });
                                    alert('✅ Evento AddToCart enviado!');
                                }}
                                className="w-full"
                            >
                                Agregar al Carrito
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Iniciar Checkout */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5" />
                                Iniciar Checkout
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando se inicia el proceso de pago
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackInitiateCheckout({
                                        contentIds: ['sesion-meditacion-1'],
                                        contentCategory: 'servicios',
                                        numItems: 1,
                                        value: 500,
                                        currency: 'ARS',
                                    });
                                    alert('✅ Evento InitiateCheckout enviado!');
                                }}
                                className="w-full"
                            >
                                Ir a Pagar
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Compra */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-green-500" />
                                Compra Completada
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando se completa una compra
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackPurchase({
                                        contentIds: ['sesion-meditacion-1'],
                                        contentType: 'service',
                                        value: 500,
                                        currency: 'ARS',
                                        numItems: 1,
                                    });
                                    alert('✅ Evento Purchase enviado!');
                                }}
                                className="w-full"
                                variant="default"
                            >
                                Confirmar Compra
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Lead */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Phone className="h-5 w-5" />
                                Generar Lead
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando se genera un lead (formulario, etc)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackLead({
                                        contentName: 'Formulario de Contacto',
                                        contentCategory: 'contacto',
                                        value: 0,
                                        currency: 'ARS',
                                    });
                                    alert('✅ Evento Lead enviado!');
                                }}
                                className="w-full"
                            >
                                Enviar Formulario
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Registro */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <UserPlus className="h-5 w-5" />
                                Registro
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando un usuario completa el registro
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackRegistration({
                                        contentName: 'Registro de Usuario',
                                        value: 0,
                                        currency: 'ARS',
                                        status: 'success',
                                    });
                                    alert('✅ Evento CompleteRegistration enviado!');
                                }}
                                className="w-full"
                            >
                                Registrarse
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Búsqueda */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Search className="h-5 w-5" />
                                Búsqueda
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando un usuario realiza una búsqueda
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackSearch({
                                        searchString: 'meditación mindfulness',
                                        contentCategory: 'servicios',
                                    });
                                    alert('✅ Evento Search enviado!');
                                }}
                                className="w-full"
                            >
                                Buscar
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Contacto */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Phone className="h-5 w-5" />
                                Contacto
                            </CardTitle>
                            <CardDescription>
                                Rastrea cuando un usuario inicia contacto
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackContact({
                                        contentName: 'WhatsApp',
                                        contentCategory: 'contact',
                                    });
                                    alert('✅ Evento Contact enviado!');
                                }}
                                className="w-full"
                            >
                                Contactar por WhatsApp
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Evento Personalizado */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Heart className="h-5 w-5 text-purple-500" />
                                Evento Personalizado
                            </CardTitle>
                            <CardDescription>
                                Rastrea eventos personalizados específicos de tu negocio
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button
                                onClick={() => {
                                    trackCustom('ReservarSesion', {
                                        session_type: 'meditacion',
                                        duration: '60min',
                                        instructor: 'Maria',
                                        value: 500,
                                        currency: 'ARS',
                                    });
                                    alert('✅ Evento personalizado ReservarSesion enviado!');
                                }}
                                className="w-full"
                                variant="secondary"
                            >
                                Reservar Sesión
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Instrucciones */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>📊 Cómo Verificar los Eventos</CardTitle>
                        <CardDescription>
                            Sigue estos pasos para ver los eventos en tiempo real
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">1. Meta Pixel Helper (Recomendado)</h3>
                            <p className="text-sm text-muted-foreground">
                                Instala la extensión{' '}
                                <a
                                    href="https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    Meta Pixel Helper
                                </a>{' '}
                                en Chrome. Verás un ícono en la barra de herramientas que muestra los eventos en tiempo real.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">2. Meta Events Manager</h3>
                            <p className="text-sm text-muted-foreground">
                                Ve a{' '}
                                <a
                                    href="https://business.facebook.com/events_manager2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    Meta Events Manager
                                </a>
                                , selecciona tu Pixel (716760367715152) y ve a "Test Events" para ver eventos en vivo.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">3. Consola del Navegador</h3>
                            <p className="text-sm text-muted-foreground">
                                Abre la consola del navegador (F12) y escribe <code className="bg-muted px-1 py-0.5 rounded">window.fbq</code> para verificar que el pixel está cargado.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
