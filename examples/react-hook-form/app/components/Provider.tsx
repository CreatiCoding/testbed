'use client';

import { OverlayProvider } from 'overlay-kit';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <OverlayProvider>
            {children}
        </OverlayProvider>
    );
}