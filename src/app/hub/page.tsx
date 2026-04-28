import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { 
  Search, 
  Settings, 
  UserCircle2, 
  FileText, 
  MessageSquare, 
  Bell 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Simoola | Hub CAJ',
  description: 'Central de atendimento e busca de clientes.',
};

export default function HubPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
      <Sidebar />
      
      <main className="flex-1 p-10 flex flex-col overflow-y-auto no-scrollbar">
        
        {/* Cabeçalho */}
        <header className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hub CAJ</h1>
            <p className="text-sm text-gray-500">Central de atendimento — modo demonstração</p>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            <Settings size={16} />
            Admin
          </button>
        </header>

        {/* Área Central (Estilo Motor de Busca) */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full -mt-20">
          
          {/* Ícone Redondo */}
          <div className="w-16 h-16 bg-[#EEF2FF] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#E0E7FF]">
            <Search className="text-[#4338CA]" size={28} />
          </div>

          {/* Saudações */}
          <p className="text-gray-500 mb-2">Olá, <strong className="text-gray-700">Denise Shamira Chuquimia</strong></p>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Buscar Cliente</h2>
          <p className="text-gray-400 mb-8 text-sm">Procure por CPF, nome, email ou Matrícula</p>

          {/* Barra de Busca Grande */}
          <div className="w-full relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-gray-400">
              <Search size={22} />
            </div>
            <input 
              type="text" 
              placeholder="CPF, nome, email ou Matrícula..." 
              className="w-full pl-14 pr-6 py-4 bg-white border-2 border-[#4338CA] rounded-full shadow-sm text-lg focus:outline-none focus:ring-4 focus:ring-[#4338CA]/20 transition-all text-gray-700"
            />
          </div>

          {/* Atalhos Rápidos */}
          <div className="w-full">
            <p className="text-center text-gray-500 text-sm mb-6">Busque um cliente para consultar:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              
              {/* Cadastro */}
              <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#4338CA]/30 transition-all group">
                <UserCircle2 className="text-[#3B82F6] mb-3 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold text-gray-800 text-sm mb-1">Cadastro</span>
                <span className="text-xs text-gray-400 text-center">Dados e contato</span>
              </button>

              {/* Faturas */}
              <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#4338CA]/30 transition-all group">
                <FileText className="text-[#3B82F6] mb-3 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold text-gray-800 text-sm mb-1">Faturas</span>
                <span className="text-xs text-gray-400 text-center">Reenviar e contestar</span>
              </button>

              {/* Protocolos */}
              <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#4338CA]/30 transition-all group">
                <MessageSquare className="text-[#3B82F6] mb-3 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold text-gray-800 text-sm mb-1">Protocolos</span>
                <span className="text-xs text-gray-400 text-center leading-tight">Abrir e suporte técnico</span>
              </button>

              {/* Alertas */}
              <button className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#4338CA]/30 transition-all group">
                <Bell className="text-[#3B82F6] mb-3 group-hover:scale-110 transition-transform" size={32} />
                <span className="font-bold text-gray-800 text-sm mb-1">Alertas</span>
                <span className="text-xs text-gray-400 text-center">Pendências e flags</span>
              </button>

            </div>
          </div>

          {/* Banner de Ambiente de Treinamento */}
          <div className="w-full max-w-4xl py-3 px-6 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-xl flex items-center justify-center gap-3 text-sm text-gray-500 shadow-sm">
            <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
            <p><strong className="text-gray-800">Ambiente de Treinamento</strong> — Este sistema e todos os dados exibidos são fictícios, destinados exclusivamente para fins de capacitação e simulação.</p>
          </div>

        </div>

      </main>
    </div>
  );
}
