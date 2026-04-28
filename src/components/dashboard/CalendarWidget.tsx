"use client";

import { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    // Fetch mock API tasks to show markers
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-lg">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <h3 className="font-bold text-gray-800 text-sm">
          {format(currentDate, 'MMMM yyyy', { locale: ptBR }).replace(/^\w/, (c) => c.toUpperCase())}
        </h3>
        <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-lg">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-semibold text-xs text-gray-400 py-2" key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: ptBR }).substring(0, 3).toUpperCase()}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        
        // Check if there's a task on this day
        const hasTask = tasks.some(task => isSameDay(new Date(task.date), cloneDay));

        days.push(
          <div
            className={`flex flex-col items-center justify-center py-2 cursor-pointer transition-all rounded-xl
              ${!isSameMonth(day, monthStart) ? "text-gray-300" : isSameDay(day, selectedDate) ? "bg-[#FF8A65] text-white font-bold shadow-md" : "text-gray-700 hover:bg-gray-100 font-medium"}
            `}
            key={day.toISOString()}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="text-sm">{formattedDate}</span>
            {hasTask && !isSameDay(day, selectedDate) && (
              <div className="w-1.5 h-1.5 bg-[#A294F9] rounded-full mt-1"></div>
            )}
            {hasTask && isSameDay(day, selectedDate) && (
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1"></div>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1" key={day.toISOString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
