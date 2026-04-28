export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Food Order', icon: '🍱', active: false },
    { name: 'Manage Menu', icon: '📋', active: false },
    { name: 'Customer Review', icon: '⭐', active: false },
  ];

  const othersItems = [
    { name: 'Settings', icon: '⚙️' },
    { name: 'Payment', icon: '💳' },
    { name: 'Accounts', icon: '👤' },
    { name: 'Help', icon: '❓' },
  ];

  return (
    <aside className="w-64 bg-simoola-purple min-h-screen p-6 flex flex-col border-r border-simoola-purple/30">
      {/* Logo Simoola */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-simoola-yellow tracking-tight">
          Simoola
        </h1>
      </div>

      {/* Perfil Simples */}
      <div className="flex items-center gap-3 mb-10 text-simoola-text">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
           👤
        </div>
        <span className="font-semibold text-lg">Usuario</span>
      </div>

      {/* Seção MENU */}
      <div className="mb-8">
        <p className="text-xs font-bold text-simoola-text uppercase tracking-widest mb-4 opacity-60">Menu</p>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                item.active 
                ? 'bg-simoola-purple/30 text-simoola-dark shadow-sm' 
                : 'text-simoola-text hover:bg-white/40'
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Seção OTHERS */}
      <div>
        <p className="text-xs font-bold text-simoola-text uppercase tracking-widest mb-4 opacity-60">Others</p>
        <nav className="flex flex-col gap-2">
          {othersItems.map((item) => (
            <div key={item.name} className="flex items-center gap-3 p-3 text-simoola-text hover:bg-white/40 rounded-xl cursor-pointer transition-all">
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}