import Sidebar from '@/components/Sidebar';
import RevenueCard from '@/components/RevenueCard';
import OrderChart from '@/components/OrderChart';

export default function DashboardPage() {
  return (
    // Container principal: Flexbox para colocar a Sidebar ao lado do conteúdo
<div className="flex min-h-screen bg-gray-50 text-slate-900">
      
      {/* 1. Sidebar Fixa */}
      <Sidebar />

      {/* 2. Área de Conteúdo */}
      <main className="flex-1 p-8">
        
        {/* Header do Dashboard */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            {/* Input de busca que você tem no print */}
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-simoola-purple"
            />
          </div>
        </header>

        {/* Grid de Cards - Responsivo: 1 coluna no mobile, 3 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card de Receita (Revenue) */}
          <div className="md:col-span-2">
            <RevenueCard />
          </div>

          {/* Card de Tempo de Pedido */}
          <div className="md:col-span-1">
            <OrderChart />
          </div>

          {/* Segunda linha de cards */}
          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Your Rating</h3>
            {/* Aqui entrarão os círculos de 85%, 92% */}
          </div>

          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Most Ordered Food</h3>
            {/* Lista de comidas */}
          </div>

          <div className="md:col-span-1">
            {/* Outro gráfico ou métrica */}
          </div>

        </div>
      </main>
    </div>
  );
}