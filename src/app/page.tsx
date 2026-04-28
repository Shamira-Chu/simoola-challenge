import Sidebar from '@/components/Sidebar';
import HeroBanner from '@/components/dashboard/HeroBanner';
import ActivitiesChart from '@/components/dashboard/ActivitiesChart';
import TasksTable from '@/components/dashboard/TasksTable';
import CalendarWidget from '@/components/dashboard/CalendarWidget';
import KpiCards from '@/components/dashboard/KpiCards';
import { Search, Bell } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simoola | Dashboard',
  description: 'Visão geral das atividades e métricas do Simoola.',
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 flex flex-col md:flex-row h-screen overflow-hidden">
        
        {/* Coluna Central (Hero, Gráfico, Tarefas) */}
        <div className="flex-1 p-8 overflow-y-auto no-scrollbar">
          {/* Header (Pesquisa) */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                className="w-64 pl-10 pr-4 py-2.5 bg-white border-none rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5B4FF] transition-all text-sm"
              />
            </div>
          </header>

          <HeroBanner />
          <ActivitiesChart />
          <TasksTable />
        </div>

        {/* Painel Lateral Direito (Calendário, Notificações, KPIs) */}
        <aside className="w-[320px] bg-[#F8F9FA] p-8 border-l border-gray-100 overflow-y-auto no-scrollbar flex-shrink-0 hidden lg:block">
          
          {/* Header Direito (Data e Notificação) */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-sm font-semibold text-gray-600">
              {new Date().toLocaleDateString('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-gray-400">PT <span className="text-gray-800">▼</span></span>
              <div className="relative cursor-pointer">
                <Bell size={20} className="text-gray-600" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#F8F9FA]"></div>
              </div>
            </div>
          </div>

          <CalendarWidget />
          <KpiCards />

        </aside>

      </main>
    </div>
  );
}