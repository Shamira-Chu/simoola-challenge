import { Poppins } from 'next/font/google';
import './globals.css';

// Configurando a fonte
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', // Criamos uma variável CSS
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