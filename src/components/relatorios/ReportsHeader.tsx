"use client";

import { BarChart3, Download, Database, Filter } from 'lucide-react';

export default function ReportsHeader() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6 mb-8">
      
      {/* Título */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-2">
          <BarChart3 className="text-[#A294F9]" size={32} />
          Relatórios
        </h1>
        <p className="text-gray-500">Métricas e performance da central de simulação</p>
      </div>

      {/* Ações e Filtros Globais */}
      <div className="flex flex-col md:flex-row gap-4 items-end md:items-center">
        
        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-3 text-sm border-r border-gray-200 pr-4 mr-1">
          <div className="flex items-center gap-2 text-gray-500">
            <Filter size={16} />
            <span className="font-semibold hidden md:inline">Filtros:</span>
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-[#C5B4FF]">
            <option>Todo período</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-[#C5B4FF]">
            <option>Todos os projetos</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-[#C5B4FF]">
            <option>Todos os usuários</option>
          </select>
          <button className="text-gray-400 hover:text-gray-600 px-2 transition-colors">Limpar</button>
        </div>

        {/* Botões Power BI e Download */}
        <div className="flex gap-3">
          <button className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border border-yellow-200 px-5 py-2.5 rounded-xl font-semibold transition-colors shadow-sm flex items-center gap-2" title="Conectar dados ao Power BI">
            <Database size={18} />
            Power BI
          </button>
          
          <div className="relative group">
            <button className="bg-[#4338CA] hover:bg-[#3730A3] text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2">
              <Download size={18} />
              Exportar
            </button>
            {/* Menu Dropdown simples de Exportação via hover */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden flex flex-col">
              <button className="text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4338CA] font-medium transition-colors">
                Exportar CSV
              </button>
              <button className="text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4338CA] font-medium transition-colors border-t border-gray-50">
                Exportar Relatório PDF
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
