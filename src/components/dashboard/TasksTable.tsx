"use client";

import { useState, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { format } from 'date-fns';

export default function TasksTable() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching tasks:", err);
        setLoading(false);
      });
  }, []);

  const getStatusStyle = (status: string) => {
    switch(status.toLowerCase()) {
      case 'pending':
        return 'bg-amber-100 text-amber-700';
      case 'done':
        return 'bg-emerald-100 text-emerald-700';
      case 'testing':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mt-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-gray-800">Tarefas de Hoje</h3>
        <button className="text-[#A294F9] text-sm font-semibold hover:underline">Ver todas</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm border-b border-gray-100">
              <th className="pb-3 font-medium">Departamento</th>
              <th className="pb-3 font-medium">Estágio</th>
              <th className="pb-3 font-medium">Responsável</th>
              <th className="pb-3 font-medium">Equipe</th>
              <th className="pb-3 font-medium">Data</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {loading ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-400">Carregando tarefas...</td>
              </tr>
            ) : tasks.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-400">Nenhuma tarefa para hoje.</td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-medium text-gray-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                      {task.avatar}
                    </div>
                    {task.department}
                  </td>
                  <td className="py-4 text-gray-600">{task.stage}</td>
                  <td className="py-4 text-gray-800 font-medium">{task.assigned}</td>
                  <td className="py-4 text-gray-600">{task.team}</td>
                  <td className="py-4 text-gray-600">{format(new Date(task.date), 'dd/MM/yyyy')}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="py-4 text-center">
                    <button className="text-gray-400 hover:text-gray-800 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
