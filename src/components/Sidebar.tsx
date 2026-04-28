"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart2,
  Briefcase,
  Bot,
  Users,
  FileText,
  Network,
  Settings,
  Blocks,
  LogOut,
  UserCircle
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: BarChart2, href: '/' },
    { name: 'Projetos', icon: Briefcase, href: '/projetos' },
    { name: 'Simooladores', icon: Bot, href: '/simooladores' },
    { name: 'Usuários', icon: Users, href: '/usuarios' },
    { name: 'Relatórios', icon: FileText, href: '/relatorios' },
    { name: 'Hub', icon: Network, href: '/hub' },
  ];

  const othersItems = [
    { name: 'Configurações', icon: Settings, href: '/configuracoes' },
    { name: 'Integrações', icon: Blocks, href: '/integracoes' },
    { name: 'Sair', icon: LogOut, href: '#' },
  ];

  return (
    <aside className="w-[280px] bg-[#C5B4FF] min-h-screen p-6 flex flex-col font-sans shrink-0">
      {/* Logo Simoola */}
      <div className="mb-10">
        <Link href="/">
          <h1 className="text-4xl font-extrabold text-[#FFC107] tracking-wider cursor-pointer">
            Simoola
          </h1>
        </Link>
      </div>

      {/* Perfil Simples */}
      <Link href="/profile" className="flex items-center gap-4 mb-10 text-white/90 hover:bg-white/10 p-2 rounded-2xl transition-all cursor-pointer -ml-2">
        <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center border-[1.5px] border-white/50 overflow-hidden shrink-0">
          <UserCircle size={48} strokeWidth={1} className="text-white/80" />
        </div>
        <span className="font-semibold text-lg text-white">Usuario</span>
      </Link>

      {/* Seção MENU */}
      <div className="mb-10">
        <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-4">MENU</p>
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Verifica se a rota atual é exatamente igual ao href, ou se começa com ele (para subpáginas)
            // Tratamento especial para '/' para não ficar sempre ativo.
            const isActive = item.href === '/' 
              ? pathname === '/' 
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${
                  isActive 
                  ? 'bg-white/20 text-[#5D5A88] shadow-sm backdrop-blur-sm' 
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-xl ${isActive ? 'bg-indigo-400/20 text-indigo-500' : ''}`}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-[#5D5A88]" : ""} />
                </div>
                <span className={`font-medium ${isActive ? 'text-[#5D5A88] font-bold' : ''}`}>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Seção OTHERS */}
      <div>
        <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-4">OTHERS</p>
        <nav className="flex flex-col gap-1">
          {othersItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all text-white/70 hover:bg-white/10 hover:text-white"
              >
                <div className="flex items-center justify-center w-8 h-8">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}