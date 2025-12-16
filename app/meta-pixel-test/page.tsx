import { MetaPixelExamples } from '@/components/MetaPixelExamples';
import { MetaPixelDebugger } from '@/components/MetaPixelDebugger';

export default function MetaPixelTestPage() {
    return (
        <div className="space-y-8">
            <MetaPixelDebugger />
            <MetaPixelExamples />
        </div>
    );
}
