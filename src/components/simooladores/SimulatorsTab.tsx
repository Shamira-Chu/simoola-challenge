import { Search, Plus, Eye, Edit, Trash2, Filter } from 'lucide-react';

const simulatorsMock = [
  {
    id: 1,
    name: 'CHAT - Atendimento Saneamento - CAJ',
    tags: ['Suporte', 'Chat', 'Fácil'],
    date: '19/03/2026',
    status: 'Ativo'
  },
  {
    id: 2,
    name: '[VOZ] Atendimento Companhia de água - CAJ',
    description: 'Você é um cliente de uma empresa de saneamento entrando em contato pelo chat de...',
    tags: ['Suporte', 'Voz', 'Médio'],
    date: '18/03/2026',
    status: 'Ativo'
  }
];

export default function SimulatorsTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header específico de Simooladores */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-gray-500">Gerencie os simooladores de treinamento</p>
        </div>
        <button className="bg-[#4338CA] hover:bg-[#3730A3] text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2 self-start md:self-auto">
          <Plus size={20} />
          Novo Simoolador
        </button>
      </div>

      {/* Busca e Filtros */}
      <div className="space-y-4 mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Buscar simooladores..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5B4FF] transition-all"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-500 mr-2">
            <Filter size={16} />
            <span className="font-semibold">Filtros:</span>
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-[#C5B4FF]">
            <option>Todas as categorias</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-[#C5B4FF]">
            <option>Todos os modos</option>
          </select>
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-[#C5B4FF]">
            <option>Ativos</option>
          </select>
          <button className="text-gray-400 hover:text-gray-600 px-2 transition-colors">Limpar filtros</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/60 flex flex-col">
          <span className="text-3xl font-bold text-gray-800">2</span>
          <span className="text-sm font-semibold text-gray-400">Total</span>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/60 flex flex-col">
          <span className="text-3xl font-bold text-gray-800">2</span>
          <span className="text-sm font-semibold text-gray-400">Ativos</span>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/60 flex flex-col opacity-70">
          <span className="text-3xl font-bold text-gray-800">0</span>
          <span className="text-sm font-semibold text-gray-400">Inativos</span>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100/60 flex flex-col">
          <span className="text-3xl font-bold text-gray-800">2</span>
          <span className="text-sm font-semibold text-gray-400">Resultados</span>
        </div>
      </div>

      {/* Grid de Simooladores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulatorsMock.map((sim) => (
          <div key={sim.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex flex-col hover:shadow-md transition-shadow">
            
            <div className="flex justify-between items-start mb-3 gap-2">
              <h3 className="font-bold text-gray-800 leading-tight">{sim.name}</h3>
              <span className="bg-[#4338CA] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                {sim.status}
              </span>
            </div>

            {sim.description && (
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{sim.description}</p>
            )}

            <div className="flex flex-wrap gap-2 mb-4 mt-auto pt-2">
              {sim.tags.map(tag => {
                let colorClass = 'bg-gray-100 text-gray-600';
                if (tag === 'Chat') colorClass = 'bg-blue-100 text-blue-600';
                if (tag === 'Voz') colorClass = 'bg-emerald-100 text-emerald-600';
                return (
                  <span key={tag} className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                    {tag}
                  </span>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
              📅 {sim.date}
            </div>

            {/* Ações */}
            <div className="flex items-center gap-2 pt-4 border-t border-gray-50 mt-auto">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                <Eye size={16} /> Ver
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                <Edit size={16} /> Editar
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                Testar
              </button>
              
              <button className="p-1.5 ml-auto text-gray-400 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6h14z"></path></svg>
              </button>
              <button className="p-1.5 text-red-500 bg-red-50 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
