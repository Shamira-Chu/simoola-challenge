import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { 
  Target, 
  Award, 
  Clock, 
  TrendingUp, 
  BarChart, 
  History,
  BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Simoola | Meu Perfil',
  description: 'Visualize suas estatísticas de treinamento e progresso.',
};

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto no-scrollbar">
        {/* Header do Perfil */}
        <header className="mb-10">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Meu Perfil</p>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Olá, Denise Shamira Chuquimia!</h1>
          <p className="text-gray-500">Seus dados e estatísticas pessoais de treinamento</p>
        </header>

        {/* KPIs (Métricas Principais) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Simoolações */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-700">Simoolações</h3>
              <div className="p-2 bg-indigo-50 text-[#A294F9] rounded-xl">
                <Target size={20} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-800">0</span>
              <span className="text-sm text-gray-500 mt-1">realizadas</span>
            </div>
          </div>

          {/* Card 2: Nota Média */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-700">Nota Média</h3>
              <div className="p-2 bg-amber-50 text-amber-500 rounded-xl">
                <Award size={20} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-800">-/10</span>
              <span className="text-sm text-gray-500 mt-1">pontuação</span>
            </div>
          </div>

          {/* Card 3: Tempo Total */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-700">Tempo Total</h3>
              <div className="p-2 bg-emerald-50 text-emerald-500 rounded-xl">
                <Clock size={20} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-800">0h 0m</span>
              <span className="text-sm text-gray-500 mt-1">de prática</span>
            </div>
          </div>

          {/* Card 4: Progresso */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-gray-700">Progresso</h3>
              <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                <TrendingUp size={20} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-800">0%</span>
              <span className="text-sm text-gray-500 mt-1">evolução</span>
            </div>
          </div>
        </div>

        {/* Layout Principal Dividido */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna Esquerda: Simooladores de Treinamento */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <BookOpen className="text-[#A294F9]" size={24} />
              Simooladores de Treinamento
            </h2>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100/60 flex flex-col items-center justify-center min-h-[300px] text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-gray-300" size={32} />
              </div>
              <p className="text-gray-500 font-medium">
                Nenhum simoolador atribuído a você ainda. <br/> Contate seu administrador.
              </p>
            </div>
          </div>

          {/* Coluna Direita: Widgets */}
          <div className="space-y-8">
            
            {/* Widget: Progresso Semanal */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <BarChart className="text-[#A294F9]" size={20} />
                Progresso Semanal
              </h3>
              
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm font-medium text-gray-600">Meta semanal</span>
                <span className="text-sm font-bold text-gray-800">0/10 simoolações</span>
              </div>
              
              {/* Barra de Progresso */}
              <div className="w-full bg-gray-100 rounded-full h-3 mb-2 overflow-hidden">
                <div className="bg-[#A294F9] h-3 rounded-full w-[0%] transition-all duration-500"></div>
              </div>
              <p className="text-xs text-gray-400 text-right">0% concluído</p>
            </div>

            {/* Widget: Últimas Simoolações */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <History className="text-[#A294F9]" size={20} />
                Últimas Simoolações
              </h3>
              
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                  <History className="text-gray-300" size={24} />
                </div>
                <p className="text-sm text-gray-500">
                  Nenhuma simoolação realizada ainda
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
