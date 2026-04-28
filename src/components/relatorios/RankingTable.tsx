"use client";

import { Info } from 'lucide-react';

const rankingData = [
  { id: 1, name: 'Marina Vaz', email: 'marina@scooto.co', notaVoz: '6', pesoVoz: '1x', notaChat: '-', pesoChat: '', notaMulti: '-', pesoMulti: '', media: '6', sessõesVoz: 1, sessõesChat: 0, sessõesMulti: 0, tempoTotal: '7m' },
  { id: 2, name: 'Gabriela Ioshimoto', email: 'gabriela@scooto.co', notaVoz: '6.3', pesoVoz: '2x', notaChat: '-', pesoChat: '', notaMulti: '4.9', pesoMulti: '1x', media: '5.6', sessõesVoz: 2, sessõesChat: 0, sessõesMulti: 1, tempoTotal: '1h 12m' },
  { id: 3, name: 'Dayane Mendes de Araújo Barbosa', email: 'day@scooto.co', notaVoz: '-', pesoVoz: '', notaChat: '-', pesoChat: '', notaMulti: '4.9', pesoMulti: '2x', media: '4.9', sessõesVoz: 0, sessõesChat: 0, sessõesMulti: 2, tempoTotal: '4h 30m' },
  { id: 4, name: 'karen', email: 'karen@scooto.co', notaVoz: '-', pesoVoz: '', notaChat: '-', pesoChat: '', notaMulti: '4.6', pesoMulti: '1x', media: '4.6', sessõesVoz: 0, sessõesChat: 0, sessõesMulti: 1, tempoTotal: '1h 5m' },
  { id: 5, name: 'Juliana Batista de Oliveira', email: 'juliana.batista@scooto.co', notaVoz: '-', pesoVoz: '', notaChat: '-', pesoChat: '', notaMulti: '4.1', pesoMulti: '1x', media: '4.1', sessõesVoz: 0, sessõesChat: 0, sessõesMulti: 1, tempoTotal: '16h 2m' },
  { id: 6, name: 'Mariana Martins', email: 'mariana@scooto.com.br', notaVoz: '5.7', pesoVoz: '2x', notaChat: '-', pesoChat: '', notaMulti: '1.9', pesoMulti: '1x', media: '3.8', sessõesVoz: 2, sessõesChat: 0, sessõesMulti: 1, tempoTotal: '10m' },
  { id: 7, name: 'moana', email: 'moana@scooto.co', notaVoz: '3.9', pesoVoz: '32x', notaChat: '0', pesoChat: '1x', notaMulti: '2.6', pesoMulti: '27x', media: '3.3', sessõesVoz: 32, sessõesChat: 1, sessõesMulti: 27, tempoTotal: '4h 15m' },
];

export default function RankingTable() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100/60 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Ranking de Performance</h2>
        <p className="text-sm text-gray-500">Visão consolidada por modo de simulação para recrutamento</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="text-gray-400 text-xs border-b border-gray-100">
              <th className="pb-4 font-semibold w-12 text-center">#</th>
              <th className="pb-4 font-semibold w-64">Candidata ↑↓</th>
              
              <th className="pb-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1">Nota Média Voz <Info size={12}/></div>
              </th>
              <th className="pb-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1">Nota Média Chat <Info size={12}/></div>
              </th>
              <th className="pb-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1">Nota Média Multi <Info size={12}/></div>
              </th>
              
              <th className="pb-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1 text-gray-600 font-bold">Média das notas Médias <Info size={12}/></div>
              </th>
              
              <th className="pb-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1">Nº Sessões Voz <Info size={12}/></div>
              </th>
              <th className="pb-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1">Nº Sessões Chat <Info size={12}/></div>
              </th>
              <th className="pb-4 font-semibold text-center">
                <div className="flex items-center justify-center gap-1">Nº Sessões Multi <Info size={12}/></div>
              </th>
              
              <th className="pb-4 font-semibold text-right pr-4">Soma Tempo Total</th>
            </tr>
          </thead>
          
          <tbody className="text-sm">
            {rankingData.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                
                {/* ID */}
                <td className="py-4 text-center font-bold text-gray-800">{row.id}</td>
                
                {/* Candidata */}
                <td className="py-4 pr-4">
                  <p className="font-bold text-gray-800 line-clamp-1">{row.name}</p>
                  <p className="text-xs text-gray-500 truncate max-w-[220px]">{row.email}</p>
                </td>

                {/* Nota Voz */}
                <td className="py-4 text-center">
                  <span className="font-bold text-gray-800">{row.notaVoz}</span>
                  {row.pesoVoz && <span className="block text-xs text-gray-400 mt-0.5">{row.pesoVoz}</span>}
                </td>

                {/* Nota Chat */}
                <td className="py-4 text-center">
                  <span className="font-bold text-gray-800">{row.notaChat}</span>
                  {row.pesoChat && <span className="block text-xs text-gray-400 mt-0.5">{row.pesoChat}</span>}
                </td>

                {/* Nota Multi */}
                <td className="py-4 text-center">
                  <span className="font-bold text-gray-800">{row.notaMulti}</span>
                  {row.pesoMulti && <span className="block text-xs text-gray-400 mt-0.5">{row.pesoMulti}</span>}
                </td>

                {/* Média Final */}
                <td className="py-4 text-center bg-gray-50/30">
                  <span className="font-extrabold text-gray-900 text-base">{row.media}</span>
                </td>

                {/* Sessões */}
                <td className="py-4 text-center text-gray-600 font-medium">{row.sessõesVoz}</td>
                <td className="py-4 text-center text-gray-600 font-medium">{row.sessõesChat}</td>
                <td className="py-4 text-center text-gray-600 font-medium">{row.sessõesMulti}</td>

                {/* Tempo Total */}
                <td className="py-4 text-right pr-4 text-gray-500 font-medium">
                  {row.tempoTotal}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
