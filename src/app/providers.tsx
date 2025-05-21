// src/app/providers.tsx
'use client';

import { useState, type ReactNode } from 'react'; // React importu yok, doğru
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NewThemeProvider } from '@/themes/ThemeProvider';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster"; // Eklenmişti
// import { ThemeTestControls } from '@/components/dev/ThemeTestControls'; // Yorumlu veya silinmiş

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     staleTime: 5 * 60 * 1000,
    //   },
    // },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <NewThemeProvider
        defaultTheme="default-light"
        storageKey="next-erp-theme-preference"
        respectSystemPreference={true}
      >
        <TooltipProvider delayDuration={100}>
          {children}
          <SonnerToaster richColors position="top-right" />
          <ShadcnToaster /> {/* Eklenmişti */}
          {/* {process.env.NODE_ENV === 'development' && <ThemeTestControls />} */}
        </TooltipProvider>
      </NewThemeProvider>
    </QueryClientProvider>
  );
}