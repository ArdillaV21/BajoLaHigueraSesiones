'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { Badge } from '@/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export function MetaPixelDebugger() {
    const [pixelLoaded, setPixelLoaded] = useState(false);
    const [pixelId, setPixelId] = useState<string>('');
    const [eventQueue, setEventQueue] = useState<any[]>([]);

    useEffect(() => {
        const checkPixel = () => {
            if (typeof window !== 'undefined' && window.fbq) {
                setPixelLoaded(true);
                setPixelId(process.env.NEXT_PUBLIC_META_PIXEL_ID || '716760367715152');

                // Intentar obtener la cola de eventos
                if (window.fbq.queue) {
                    setEventQueue(window.fbq.queue);
                }
            }
        };

        // Verificar inmediatamente
        checkPixel();

        // Verificar cada segundo durante 5 segundos
        const interval = setInterval(checkPixel, 1000);
        setTimeout(() => clearInterval(interval), 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>🔍 Meta Pixel Debugger</CardTitle>
                <CardDescription>
                    Herramienta de diagnóstico para verificar el estado del Meta Pixel
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Estado del Pixel */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                        {pixelLoaded ? (
                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                        ) : (
                            <XCircle className="h-6 w-6 text-red-500" />
                        )}
                        <div>
                            <p className="font-semibold">Estado del Pixel</p>
                            <p className="text-sm text-muted-foreground">
                                {pixelLoaded ? 'Cargado correctamente' : 'No detectado'}
                            </p>
                        </div>
                    </div>
                    <Badge variant={pixelLoaded ? 'default' : 'destructive'}>
                        {pixelLoaded ? 'Activo' : 'Inactivo'}
                    </Badge>
                </div>

                {/* Pixel ID */}
                {pixelLoaded && (
                    <div className="p-4 border rounded-lg">
                        <p className="font-semibold mb-2">Pixel ID</p>
                        <code className="text-sm bg-muted px-2 py-1 rounded">{pixelId}</code>
                    </div>
                )}

                {/* Instrucciones */}
                {!pixelLoaded && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Pixel no detectado</AlertTitle>
                        <AlertDescription>
                            <div className="space-y-2 mt-2">
                                <p>Posibles causas:</p>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    <li>La variable NEXT_PUBLIC_META_PIXEL_ID no está configurada</li>
                                    <li>El componente MetaPixel no está montado</li>
                                    <li>Bloqueador de anuncios activo</li>
                                </ul>
                            </div>
                        </AlertDescription>
                    </Alert>
                )}

                {/* Verificación en consola */}
                <div className="p-4 border rounded-lg bg-muted/50">
                    <p className="font-semibold mb-2">Verificación Manual</p>
                    <p className="text-sm text-muted-foreground mb-3">
                        Abre la consola del navegador (F12) y ejecuta:
                    </p>
                    <code className="block text-xs bg-background p-3 rounded border">
                        {`console.log('Pixel loaded:', !!window.fbq);
console.log('Pixel ID:', '${pixelId}');
console.log('fbq object:', window.fbq);`}
                    </code>
                </div>

                {/* Herramientas recomendadas */}
                <div className="p-4 border rounded-lg">
                    <p className="font-semibold mb-2">Herramientas Recomendadas</p>
                    <div className="space-y-2 text-sm">
                        <div>
                            <p className="font-medium">1. Meta Pixel Helper (Chrome)</p>
                            <a
                                href="https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Instalar extensión →
                            </a>
                        </div>
                        <div>
                            <p className="font-medium">2. Meta Events Manager</p>
                            <a
                                href="https://business.facebook.com/events_manager2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                Ver eventos en tiempo real →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Test de evento */}
                {pixelLoaded && (
                    <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                                <p className="font-semibold text-green-900 dark:text-green-100">
                                    ✅ Pixel funcionando correctamente
                                </p>
                                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                                    Los eventos se están enviando a Meta. Puedes verificarlos en Meta Events Manager
                                    o usando Meta Pixel Helper.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
