export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#F8F9FA]">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner animado premium */}
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-[#A294F9]/20 rounded-full"></div>
          <div className="absolute w-full h-full border-4 border-t-[#A294F9] rounded-full animate-spin"></div>
        </div>
        <p className="text-[#A294F9] font-semibold animate-pulse">Carregando Simoola...</p>
      </div>
    </div>
  );
}
