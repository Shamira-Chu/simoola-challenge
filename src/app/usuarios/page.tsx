import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { 
  Users, 
  Upload, 
  Plus, 
  Search, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  KeyRound,
  Send,
  Trash2,
  ChevronDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Simoola | Usuários',
  description: 'Gestão de usuários e permissões.',
};

const usersMock = [
  {
    id: 1,
    name: 'Denise Shamira Chuquimia',
    email: 'shamiraxp10@gmail.com',
    status: 'Ativo',
    role: 'Admin',
    lastLogin: '28/04/2026 10:45'
  },
  {
    id: 2,
    name: 'Lucas Buzato Venarusso',
    email: 'lbuzatovenarusso@gmail.com',
    status: 'Ativo',
    role: 'Administrador',
    lastLogin: '28/04/2026 08:17'
  },
  {
    id: 3,
    name: 'Isabella Tragante de Siqueira',
    email: 'isabella.tragante@hotmail.com',
    status: 'Ativo',
    role: 'Usuário',
    lastLogin: '27/04/2026 23:16'
  },
  {
    id: 4,
    name: 'Leonardo Henrique Basset',
    email: 'leonardo.basset@gmail.com',
    status: 'Ativo',
    role: 'Gestor',
    lastLogin: '27/04/2026 22:18'
  }
];

export default function UsuariosPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto no-scrollbar">
        
        {/* Header da Página */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-2">
              <Users className="text-[#A294F9]" size={32} />
              Usuários
            </h1>
            <p className="text-gray-500">Gerencie os usuários da sua empresa</p>
          </div>
          
          <div className="flex gap-3 self-start md:self-auto">
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2">
              <Upload size={18} />
              Importar
            </button>
            <button className="bg-[#4338CA] hover:bg-[#3730A3] text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2">
              <Plus size={18} />
              Novo Usuário
            </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex justify-between items-start hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-2">Total de Usuários</p>
              <h3 className="text-4xl font-bold text-gray-800">49</h3>
            </div>
            <div className="p-2 bg-gray-50 text-gray-400 rounded-xl">
              <Users size={20} />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex justify-between items-start hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-2">Ativos</p>
              <h3 className="text-4xl font-bold text-gray-800">35</h3>
            </div>
            <div className="p-2 bg-emerald-50 text-emerald-500 rounded-xl">
              <CheckCircle2 size={20} />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 flex justify-between items-start hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-2">Nunca Acessou</p>
              <h3 className="text-4xl font-bold text-gray-800">14</h3>
            </div>
            <div className="p-2 bg-amber-50 text-amber-500 rounded-xl">
              <AlertCircle size={20} />
            </div>
          </div>
        </div>

        {/* Barra de Busca */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Buscar por nome ou email..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5B4FF] transition-all"
          />
        </div>

        {/* Tabela de Usuários */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100/60">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">Lista de Usuários</h2>
            <p className="text-sm text-gray-500">49 usuário(s) encontrado(s)</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-100">
                  <th className="pb-4 font-semibold w-1/3">Usuário ↑↓</th>
                  <th className="pb-4 font-semibold">Status ↑↓</th>
                  <th className="pb-4 font-semibold">Papel ↑↓</th>
                  <th className="pb-4 font-semibold">Último Login ↓</th>
                  <th className="pb-4 font-semibold text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {usersMock.map((user) => (
                  <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    
                    {/* Usuário */}
                    <td className="py-4 pr-4">
                      <p className="font-bold text-gray-800">{user.name}</p>
                      <p className="text-gray-500">{user.email}</p>
                    </td>

                    {/* Status */}
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <CheckCircle2 size={12} />
                        {user.status}
                      </span>
                    </td>

                    {/* Papel (Role) */}
                    <td className="py-4">
                      {user.role === 'Admin' ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-500">
                          {user.role}
                        </span>
                      ) : (
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors group">
                          {user.role}
                          <ChevronDown size={14} className="text-gray-400 group-hover:text-gray-600" />
                        </button>
                      )}
                    </td>

                    {/* Último Login */}
                    <td className="py-4 text-gray-500 flex items-center gap-2 mt-1">
                      📅 {user.lastLogin}
                    </td>

                    {/* Ações */}
                    <td className="py-4 text-center">
                      <div className="flex justify-center items-center gap-3 text-gray-400">
                        <button className="hover:text-gray-800 transition-colors" title="Visualizar">
                          <Eye size={18} />
                        </button>
                        <button className="hover:text-gray-800 transition-colors" title="Resetar Senha">
                          <KeyRound size={18} />
                        </button>
                        <button className="hover:text-gray-800 transition-colors" title="Enviar Convite">
                          <Send size={18} />
                        </button>
                        <button className="hover:text-red-500 transition-colors" title="Excluir">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
