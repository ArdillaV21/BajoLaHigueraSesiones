'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/ui/card';
import { Badge } from '@/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import { Progress } from '@/ui/progress';
import { AlertCircle, CheckCircle2, TrendingUp, Activity } from 'lucide-react';
import type { DatasetQualityMetrics, Diagnostic } from '@/lib/meta-ads';

export function MetaAdsQualityDashboard() {
    const [metrics, setMetrics] = useState<DatasetQualityMetrics | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchQualityMetrics();
    }, []);

    const fetchQualityMetrics = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/meta-ads/quality');

            if (!response.ok) {
                throw new Error('Failed to fetch quality metrics');
            }

            const data = await response.json();
            setMetrics(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 8) return 'text-green-600 dark:text-green-400';
        if (score >= 5) return 'text-yellow-600 dark:text-yellow-400';
        return 'text-red-600 dark:text-red-400';
    };

    const getScoreBadge = (score: number) => {
        if (score >= 8) return { variant: 'default' as const, label: 'Excelente' };
        if (score >= 5) return { variant: 'secondary' as const, label: 'Bueno' };
        return { variant: 'destructive' as const, label: 'Necesita Mejora' };
    };

    const getSeverityIcon = (severity: Diagnostic['severity']) => {
        switch (severity) {
            case 'error':
                return <AlertCircle className="h-4 w-4 text-red-500" />;
            case 'warning':
                return <AlertCircle className="h-4 w-4 text-yellow-500" />;
            default:
                return <CheckCircle2 className="h-4 w-4 text-blue-500" />;
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        );
    }

    if (!metrics) {
        return null;
    }

    const scoreBadge = getScoreBadge(metrics.event_match_quality_score);
    const matchRatePercentage = (metrics.match_rate * 100).toFixed(1);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Meta Ads - Calidad de Datos</h2>
                <p className="text-muted-foreground">
                    Monitorea la calidad de tus eventos y optimiza tu Event Match Quality (EMQ)
                </p>
            </div>

            {/* Main Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Event Match Quality</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className={`text-2xl font-bold ${getScoreColor(metrics.event_match_quality_score)}`}>
                                {metrics.event_match_quality_score.toFixed(1)}/10
                            </div>
                            <Badge variant={scoreBadge.variant}>{scoreBadge.label}</Badge>
                        </div>
                        <Progress
                            value={metrics.event_match_quality_score * 10}
                            className="mt-2"
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metrics.total_events.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Eventos procesados
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Eventos Coincidentes</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metrics.matched_events.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Eventos con coincidencia
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Tasa de Coincidencia</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{matchRatePercentage}%</div>
                        <Progress
                            value={metrics.match_rate * 100}
                            className="mt-2"
                        />
                    </CardContent>
                </Card>
            </div>

            {/* Diagnostics */}
            {metrics.diagnostics.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Diagnósticos y Recomendaciones</CardTitle>
                        <CardDescription>
                            Problemas identificados y sugerencias para mejorar tu EMQ
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {metrics.diagnostics.map((diagnostic, index) => (
                                <Alert key={index} variant={diagnostic.severity === 'error' ? 'destructive' : 'default'}>
                                    <div className="flex items-start gap-3">
                                        {getSeverityIcon(diagnostic.severity)}
                                        <div className="flex-1 space-y-1">
                                            <AlertTitle className="text-sm font-medium">
                                                {diagnostic.field ? `Campo: ${diagnostic.field}` : 'General'}
                                            </AlertTitle>
                                            <AlertDescription className="text-sm">
                                                <p className="mb-2">{diagnostic.message}</p>
                                                {diagnostic.recommendation && (
                                                    <p className="text-xs text-muted-foreground">
                                                        <strong>Recomendación:</strong> {diagnostic.recommendation}
                                                    </p>
                                                )}
                                            </AlertDescription>
                                        </div>
                                    </div>
                                </Alert>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Best Practices */}
            <Card>
                <CardHeader>
                    <CardTitle>Mejores Prácticas para Mejorar EMQ</CardTitle>
                    <CardDescription>
                        Sigue estas recomendaciones para optimizar la calidad de tus datos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Envía información de usuario completa (email, teléfono, nombre, ubicación)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Hashea todos los datos personales usando SHA-256</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Incluye Facebook Click ID (fbc) y Facebook Browser ID (fbp)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Envía eventos en tiempo real para mejor atribución</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Normaliza los datos (minúsculas, sin espacios) antes de hashear</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
