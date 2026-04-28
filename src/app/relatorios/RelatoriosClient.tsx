"use client";

import { useState } from 'react';
import ReportsHeader from '@/components/relatorios/ReportsHeader';
import ReportsKPIs from '@/components/relatorios/ReportsKPIs';
import ReportsCharts from '@/components/relatorios/ReportsCharts';
import RankingTable from '@/components/relatorios/RankingTable';

type Tab = 'visao-geral' | 'ranking' | 'nota-media' | 'suporte' | 'vendas' | 'pesquisa' | 'simooladores' | 'tendencias';

export default function RelatoriosClient() {
  const [activeTab, setActiveTab] = useState<Tab>('visao-geral');

  const tabs = [
    { id: 'visao-geral', label: 'Visão Geral' },
    { id: 'ranking', label: 'Ranking' },
    { id: 'nota-media', label: 'Nota Média' },
    { id: 'suporte', label: 'Suporte' },
    { id: 'vendas', label: 'Vendas' },
    { id: 'pesquisa', label: 'Pesquisa' },
    { id: 'simooladores', label: 'Simooladores' },
    { id: 'tendencias', label: 'Tendências' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Header (Título, Filtros, Botões Power BI e Download) */}
      <ReportsHeader />

      {/* Menu de Abas (Tabs) Deslizante */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 mb-8 pb-2 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as Tab)}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-white text-[#4338CA] shadow-sm border border-gray-200' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Renderização do Conteúdo baseado na Aba */}
      <div className="min-h-[500px]">
        
        {/* Aba: Visão Geral */}
        {activeTab === 'visao-geral' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ReportsKPIs />
            <ReportsCharts />
          </div>
        )}

        {/* Aba: Ranking */}
        {activeTab === 'ranking' && (
          <RankingTable />
        )}

        {/* Outras Abas (Placeholder) */}
        {activeTab !== 'visao-geral' && activeTab !== 'ranking' && (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100/60 animate-in fade-in">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Aba em Desenvolvimento</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              As informações específicas de "{tabs.find(t => t.id === activeTab)?.label || 'esta aba'}" estarão disponíveis em breve.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
