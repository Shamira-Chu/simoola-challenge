import Sidebar from '@/components/Sidebar';
import RelatoriosClient from './RelatoriosClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simoola | Relatórios',
  description: 'Métricas e performance detalhada da central de simulação.',
};

export default function RelatoriosPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto no-scrollbar">
        <RelatoriosClient />
      </main>
    </div>
  );
}
