"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', simoolations: 40, activeUsers: 24 },
  { name: 'Feb', simoolations: 30, activeUsers: 13 },
  { name: 'Mar', simoolations: 20, activeUsers: 58 },
  { name: 'Apr', simoolations: 27, activeUsers: 39 },
  { name: 'May', simoolations: 18, activeUsers: 48 },
  { name: 'Jun', simoolations: 23, activeUsers: 38 },
  { name: 'Jul', simoolations: 34, activeUsers: 43 },
  { name: 'Aug', simoolations: 44, activeUsers: 23 },
  { name: 'Sep', simoolations: 31, activeUsers: 15 },
  { name: 'Oct', simoolations: 50, activeUsers: 30 },
  { name: 'Nov', simoolations: 45, activeUsers: 25 },
  { name: 'Dec', simoolations: 60, activeUsers: 40 },
];

export default function ActivitiesChart() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mt-6 h-[350px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-gray-800">Atividades</h3>
        <div className="flex gap-2">
          <button className="px-4 py-1 text-xs font-semibold bg-[#0F0F12] text-white rounded-full">Este Mês</button>
          <button className="px-4 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">Esta Semana</button>
        </div>
      </div>
      
      <div className="flex-1 w-full mt-4" style={{ minHeight: '250px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            {/* The image shows staggered bars. We will use two bars per month */}
            <Bar dataKey="simoolations" fill="#A294F9" radius={[10, 10, 10, 10]} barSize={8} />
            <Bar dataKey="activeUsers" fill="#FF8A65" radius={[10, 10, 10, 10]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
