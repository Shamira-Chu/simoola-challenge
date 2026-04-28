import { Rocket, Trophy, DollarSign } from 'lucide-react';

export default function KpiCards() {
  return (
    <div className="space-y-4 mt-6">
      
      {/* Projetos Abertos */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-50 text-[#A294F9] flex items-center justify-center">
            <Rocket size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400">Projetos Abertos</p>
            <h4 className="text-xl font-bold text-gray-800">500</h4>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors">
          <span className="text-sm font-bold">&gt;</span>
        </div>
      </div>

      {/* Concluídos */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400">Concluídos com Sucesso</p>
            <h4 className="text-xl font-bold text-gray-800">3502</h4>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors">
          <span className="text-sm font-bold">&gt;</span>
        </div>
      </div>

      {/* Ganhos / Performance */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400">Economia este mês</p>
            <h4 className="text-xl font-bold text-gray-800">R$ 15.000</h4>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors">
          <span className="text-sm font-bold">&gt;</span>
        </div>
      </div>

    </div>
  );
}
