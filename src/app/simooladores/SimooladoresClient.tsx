"use client";

import { useState } from 'react';
import { Layers, BotMessageSquare } from 'lucide-react';
import SimulatorsTab from '@/components/simooladores/SimulatorsTab';
import AgentsTab from '@/components/simooladores/AgentsTab';

type Tab = 'simulators' | 'agents';

export default function SimooladoresClient() {
  const [activeTab, setActiveTab] = useState<Tab>('simulators');

  return (
    <div className="flex-1 flex flex-col">
      {/* Segmented Control (Tabs) */}
      <div className="flex p-1 bg-gray-200/50 rounded-xl w-fit mb-10 shadow-inner">
        <button 
          onClick={() => setActiveTab('simulators')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
            activeTab === 'simulators' 
              ? 'bg-white text-[#4338CA] shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Layers size={18} />
          Cenários (Simooladores)
        </button>
        
        <button 
          onClick={() => setActiveTab('agents')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
            activeTab === 'agents' 
              ? 'bg-white text-[#A294F9] shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <BotMessageSquare size={18} />
          Biblioteca de Agentes
        </button>
      </div>

      {/* Renderização do Conteúdo da Aba */}
      <div className="min-h-[500px]">
        {activeTab === 'simulators' && <SimulatorsTab />}
        {activeTab === 'agents' && <AgentsTab />}
      </div>
    </div>
  );
}
