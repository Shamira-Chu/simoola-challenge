import { NextResponse } from 'next/server';

export async function GET() {
  // Simulação de dados vindo de um banco de dados
  const tasks = [
    {
      id: 1,
      department: 'Treinamento Atendimento',
      stage: 'Em Andamento',
      assigned: 'Ana Clara',
      team: 'Suporte N1',
      date: new Date().toISOString(),
      status: 'Pending',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      department: 'Simulação de Crise',
      stage: 'Revisão',
      assigned: 'Carlos Eduardo',
      team: 'Gestão',
      date: new Date().toISOString(),
      status: 'Done',
      avatar: '👨‍💼'
    },
    {
      id: 3,
      department: 'Onboarding Novo Sistema',
      stage: 'Planejamento',
      assigned: 'Beatriz',
      team: 'Vendas',
      date: new Date(new Date().getTime() + 86400000).toISOString(), // Tomorrow
      status: 'Testing',
      avatar: '👩‍💻'
    }
  ];

  return NextResponse.json(tasks);
}
