import Sidebar from '@/components/Sidebar';
import SimooladoresClient from './SimooladoresClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simoola | Simooladores',
  description: 'Gestão de cenários e agentes de simulação.',
};

export default function SimooladoresPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto no-scrollbar">
        {/* Cabeçalho da Central */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Central de Simulações</h1>
          <p className="text-gray-500">Gerencie seus cenários de treinamento e a biblioteca de agentes IA em um só lugar.</p>
        </header>

        <SimooladoresClient />
      </main>
    </div>
  );
}
