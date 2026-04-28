import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Simoola | Painel Administrativo',
  description: 'Sistema de gestão e treinamento de agentes IA para simulações.',
  icons: {
    icon: '/favicon.ico',
  },
};

// Configurando a fonte
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}