export default function HeroBanner() {
  return (
    <div className="bg-[#0F0F12] rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center min-h-[160px] shadow-lg">
      <div className="relative z-10 max-w-lg">
        <p className="text-[#C5B4FF] text-sm font-medium mb-2 tracking-wider">BOM DIA, ADMINISTRADOR</p>
        <h2 className="text-3xl font-bold leading-tight">
          Verifique suas tarefas diárias &amp; Cronogramas
        </h2>
      </div>
      
      {/* Decoração abstrata para representar o ilustrado no design */}
      <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-[#C5B4FF]/20 to-transparent pointer-events-none"></div>
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFC107] to-amber-600 opacity-20 blur-2xl"></div>
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#A294F9] to-indigo-500 opacity-20 blur-2xl absolute -right-10"></div>
        {/* Simulação da ilustração com texto/ícones placeholder */}
        <div className="relative z-20 text-6xl">👨‍💻</div>
      </div>
    </div>
  );
}
