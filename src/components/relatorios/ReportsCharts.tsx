"use client";

import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, ComposedChart, Line
} from 'recharts';

// Dados Mockados para os gráficos
const popularSimsData = [
  { name: '[VOZ] Atendimento...', sessions: 74 },
  { name: 'CHAT - Atendimento...', sessions: 41 },
];

const gradesData = [
  { name: '2-4', value: 44, color: '#A294F9' },
  { name: '4-6', value: 39, color: '#4338CA' },
  { name: '0-2', value: 24, color: '#D8B4E2' },
  { name: '6-8', value: 8, color: '#3B82F6' },
];

const trendData = [
  { date: '15/04', volume: 1, performance: 2 },
  { date: '17/03', volume: 4, performance: 5 },
  { date: '18/03', volume: 22, performance: 4 },
  { date: '19/03', volume: 50, performance: 3 },
  { date: '22/03', volume: 19, performance: 5 },
  { date: '23/03', volume: 16, performance: 4 },
  { date: '24/03', volume: 4, performance: 3 },
];

const categoryData = [
  { name: 'suporte', sessions: 115, avgGrade: 3.5 },
];

export default function ReportsCharts() {
  return (
    <div className="space-y-6">
      
      {/* Linha 1: Populares e Distribuição */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Simooladores Mais Populares */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100/60 flex flex-col h-[350px]">
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Simooladores Mais Populares</h3>
            <p className="text-sm text-gray-500 mb-6">Top 10 simooladores por número de sessões</p>
          </div>
          <div className="flex-1 w-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={popularSimsData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#f0f0f0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 11}} width={120} />
                <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="sessions" fill="#3B82F6" barSize={40} radius={[0, 4, 4, 0]} label={{ position: 'right', fill: '#6b7280', fontSize: 12 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribuição de Notas */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100/60 flex flex-col h-[350px]">
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Distribuição de Notas</h3>
            <p className="text-sm text-gray-500 mb-6">Sessões agrupadas por faixa de pontuação</p>
          </div>
          <div className="flex-1 w-full flex items-center justify-center min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gradesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value, percent }) => `${name}: ${value} (${((percent || 0) * 100).toFixed(0)}%)`}
                  labelLine={true}
                >
                  {gradesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Linha 2: Tendência de Simulações */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100/60 flex flex-col h-[400px]">
        <div>
          <h3 className="font-bold text-gray-800 text-lg">Tendência de Simoolações</h3>
          <p className="text-sm text-gray-500 mb-6">Volume e desempenho nos últimos 14 dias</p>
        </div>
        <div className="flex-1 w-full min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={trendData} margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f0f0f0" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Bar yAxisId="left" dataKey="volume" fill="#2563EB" barSize={50} radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="performance" stroke="#22C55E" strokeWidth={2} dot={{ r: 4, fill: '#fff', stroke: '#22C55E', strokeWidth: 2 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Linha 3: Performance por Categoria */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100/60 flex flex-col h-[400px]">
        <div>
          <h3 className="font-bold text-gray-800 text-lg">Performance por Categoria</h3>
          <p className="text-sm text-gray-500 mb-6">Sessões e nota média por categoria de cenário</p>
        </div>
        <div className="flex-1 w-full min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={categoryData} margin={{ top: 20, right: 20, bottom: 20, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
              <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Bar yAxisId="left" dataKey="sessions" fill="#2563EB" barSize={100} radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="avgGrade" stroke="#22C55E" strokeWidth={0} dot={{ r: 5, fill: '#22C55E' }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
