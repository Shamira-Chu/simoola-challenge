import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import { 
  FolderOpen, 
  Plus, 
  Users, 
  UserCog, 
  BookOpen, 
  Settings, 
  Link as LinkIcon, 
  EyeOff, 
  Trash2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Simoola | Projetos',
  description: 'Gestão de projetos e equipes no Simoola.',
};

// Mock data based on the user's image
const projectsData = [
  {
    id: 1,
    name: 'fiap',
    subtitle: 'sbrubles',
    status: 'Ativo',
    coords: 0,
    users: 18,
    scenarios: 0,
  },
  {
    id: 2,
    name: 'Telecom',
    subtitle: '',
    status: 'Ativo',
    coords: 0,
    users: 0,
    scenarios: 0,
  },
  {
    id: 3,
    name: 'Igreen',
    subtitle: '',
    status: 'Ativo',
    coords: 0,
    users: 0,
    scenarios: 0,
  },
  {
    id: 4,
    name: 'Suporte CAJ',
    subtitle: '',
    status: 'Ativo',
    coords: 0,
    users: 11,
    scenarios: 2,
  },
  {
    id: 5,
    name: 'Operação Contel - voz',
    subtitle: '',
    status: 'Ativo',
    coords: 1,
    users: 17,
    scenarios: 0,
  },
  {
    id: 6,
    name: 'Operação Contel Chat',
    subtitle: '',
    status: 'Ativo',
    coords: 1,
    users: 17,
    scenarios: 0,
  }
];

export default function ProjetosPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-slate-900 font-sans">
      <Sidebar />
      
      <main className="flex-1 p-10 overflow-y-auto no-scrollbar">
        
        {/* Header da Página */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-2">
              <FolderOpen className="text-[#A294F9]" size={32} />
              Projetos
            </h1>
            <p className="text-gray-500">Organize simooladores, usuários e gestores em projetos</p>
          </div>
          
          <button className="bg-[#4338CA] hover:bg-[#3730A3] text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm flex items-center gap-2 self-start md:self-auto">
            <Plus size={20} />
            Novo Projeto
          </button>
        </header>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/60 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              
              {/* Header do Card */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  {project.subtitle && (
                    <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
                  )}
                </div>
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {project.status}
                </span>
              </div>

              {/* Estatísticas (Coord, Usuários, Cenários) */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8 mt-2">
                <div className="flex items-center gap-1.5">
                  <UserCog size={16} className="text-gray-400" />
                  <span><strong className="text-gray-700">{project.coords}</strong> coord.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={16} className="text-gray-400" />
                  <span><strong className="text-gray-700">{project.users}</strong> usuários</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={16} className="text-gray-400" />
                  <span><strong className="text-gray-700">{project.scenarios}</strong> cenários</span>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="mt-auto pt-4 border-t border-gray-50 flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  <Settings size={16} />
                  Gerenciar
                </button>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  <LinkIcon size={16} />
                  Link Convite
                </button>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                  <EyeOff size={16} />
                  Inativar
                </button>

                <button className="p-2 bg-red-50 text-red-500 border border-red-100 rounded-lg hover:bg-red-500 hover:text-white transition-colors ml-auto shadow-sm" title="Excluir">
                  <Trash2 size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
