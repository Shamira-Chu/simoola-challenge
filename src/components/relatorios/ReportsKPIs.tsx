import { 
  CheckCircle2, 
  Star, 
  Clock, 
  Zap, 
  Hourglass,
  Target,
  Users,
  Trophy,
  Timer,
  BarChart3
} from 'lucide-react';

export default function ReportsKPIs() {
  return (
    <div className="space-y-6 mb-8">
      
      {/* KPIs Principais (Linha 1) */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60">
        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BarChart3 className="text-[#A294F9]" size={20} />
          Métricas Operacionais
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* SLA */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3">
              <CheckCircle2 size={20} />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">83%</h4>
            <p className="text-sm font-semibold text-gray-600">SLA ⓘ</p>
            <p className="text-xs text-gray-400">Respostas no prazo</p>
          </div>

          {/* CSAT */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3">
              <Star size={20} />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">2.2</h4>
            <p className="text-sm font-semibold text-gray-600">CSAT ⓘ</p>
            <p className="text-xs text-gray-400">Satisfação (1-5)</p>
          </div>

          {/* TMA */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3">
              <Clock size={20} />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">11min</h4>
            <p className="text-sm font-semibold text-gray-600">TMA ⓘ</p>
            <p className="text-xs text-gray-400">Tempo de atendimento</p>
          </div>

          {/* TMPR */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3">
              <Zap size={20} />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">21s</h4>
            <p className="text-sm font-semibold text-gray-600">TMPR ⓘ</p>
            <p className="text-xs text-gray-400">1ª resposta</p>
          </div>

          {/* TMO */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mb-3">
              <Hourglass size={20} />
            </div>
            <h4 className="text-2xl font-bold text-gray-800">12s</h4>
            <p className="text-sm font-semibold text-gray-600">TMO ⓘ</p>
            <p className="text-xs text-gray-400">Ociosidade</p>
          </div>
        </div>
      </div>

      {/* KPIs Secundários (Linha 2 e 3 mescladas no Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Simulações Realizadas */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
            <Target size={24} />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-800">115</h4>
            <p className="text-sm text-gray-500">Simoolações realizadas ⓘ</p>
          </div>
        </div>

        {/* Usuários Ativos */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
            <Users size={24} />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-800">9</h4>
            <p className="text-sm text-gray-500">Usuários ativos ⓘ</p>
          </div>
        </div>

        {/* Nota Média */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
            <Trophy size={24} />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-800">3.5<span className="text-lg text-gray-400 font-normal">/10</span></h4>
            <p className="text-sm text-gray-500">Nota média ⓘ</p>
          </div>
        </div>

        {/* Duração Média */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
            <Timer size={24} />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-800">11m 51s</h4>
            <p className="text-sm text-gray-500">Duração média ⓘ</p>
          </div>
        </div>

        {/* Taxa de Conclusão */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex items-center gap-4 hover:shadow-md transition-shadow md:col-span-2">
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-gray-800">90%</h4>
            <p className="text-sm text-gray-500">Taxa de conclusão ⓘ</p>
          </div>
        </div>

      </div>

    </div>
  );
}


