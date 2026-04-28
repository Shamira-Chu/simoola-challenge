import { Search, Plus, Sparkles, Edit2, Trash2, Check } from 'lucide-react';

const agentsMock = [
  {
    id: 1,
    name: 'Fernanda Costa',
    difficulty: 'hard',
    trait: 'resistente',
    language: 'Português',
    project: 'Suporte CAJ',
    date: '20/03/2026',
    description: 'Mulher desconfiada, já ligou outras vezes sem resolução',
    configured: true
  },
  {
    id: 2,
    name: 'Ana Santos',
    difficulty: 'medium',
    trait: 'impaciente',
    language: 'Português',
    project: 'Suporte CAJ',
    tag: 'Suporte',
    date: '20/03/2026',
    description: 'Mulher furiosa, problema sério no serviço, filhos pequenos em casa',
    configured: true
  },
  {
    id: 3,
    name: 'Roberto Souza',
    difficulty: 'easy',
    trait: 'amigável',
    language: 'Português',
    project: 'Suporte CAJ',
    date: '19/03/2026',
    description: 'Senhor idoso, confuso com os débitos, precisa de explicações simples',
    configured: true
  },
  {
    id: 4,
    name: 'Maria Oliveira',
    difficulty: 'medium',
    trait: 'resistente',
    language: 'Português',
    project: 'Suporte CAJ',
    date: '19/03/2026',
    description: 'Empresária ocupada, quer resolver rápido e sem enrolação',
    configured: true
  },
  {
    id: 5,
    name: 'Carlos Silva',
    difficulty: 'easy',
    trait: 'amigável',
    language: 'Português',
    project: 'Suporte CAJ',
    date: '19/03/2026',
    description: 'Homem educado, primeira vez que liga, quer entender a situação.',
    configured: false
  }
];

export default function AgentsTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header específico de Agentes */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-gray-500">Crie e gerencie agentes de voz e chat para seus simooladores</p>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-[#4338CA] hover:bg-[#3730A3] text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2">
            <Plus size={18} />
            Criar Agente Manual
          </button>
          <button className="bg-[#A294F9] hover:bg-[#8B7DE0] text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2">
            <Sparkles size={18} />
            Gerar com IA
          </button>
        </div>
      </div>

      {/* Tipo de Agente Toggle */}
      <div className="flex p-1 bg-white border border-gray-100 rounded-xl w-fit mb-6 shadow-sm">
        <button className="px-6 py-2 bg-gray-50 text-gray-800 font-semibold rounded-lg shadow-sm text-sm">
          🎙️ Agentes de Voz
        </button>
        <button className="px-6 py-2 text-gray-500 hover:text-gray-700 font-medium rounded-lg text-sm transition-colors">
          💬 Agentes de Chat
        </button>
      </div>

      {/* Busca */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Buscar por nome, persona, categoria..." 
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5B4FF] transition-all"
        />
      </div>

      {/* Grid de Agentes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agentsMock.map((agent) => (
          <div key={agent.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex flex-col hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* Decoração superior colorida baseada na dificuldade */}
            <div className={`absolute top-0 left-0 w-full h-1 ${
              agent.difficulty === 'hard' ? 'bg-red-400' : 
              agent.difficulty === 'medium' ? 'bg-amber-400' : 'bg-emerald-400'
            }`}></div>

            <div className="flex justify-between items-start mb-2 pt-2">
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">{agent.name}</h3>
                <p className="text-sm text-gray-500">
                  {agent.difficulty} • {agent.trait}
                </p>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <Edit2 size={16} />
                </button>
                <button className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              <span className="flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded">
                <span className="text-[10px]">BR</span> {agent.language}
              </span>
              <span className="flex items-center gap-1 px-2 py-0.5 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded">
                📁 {agent.project}
              </span>
              {agent.tag && (
                <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded">
                  {agent.tag}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-6 mt-2 line-clamp-3 leading-relaxed">
              {agent.description}
            </p>

            {/* Rodapé do Card */}
            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
              <span className="text-xs text-gray-400">{agent.date}</span>
              
              {agent.configured ? (
                <div className="flex items-center gap-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                  <Check size={12} /> ElevenLabs configurado
                </div>
              ) : (
                <div className="flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                  Configuração pendente
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
