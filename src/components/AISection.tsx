import { FileSearch, Image as ImageIcon, ShieldCheck } from 'lucide-react';

export default function AISection() {
  return (
    <section id="ai-verification" className="w-full py-20 md:py-28 bg-slate-50/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-left">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            POWERED BY AI
          </p>

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            The Real Problem Isn't Just Rent — It's Trust
          </h2>

          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            Fake listings. Fake documents. Fake landlords. MainTown is building AI into the core of how we solve this.
          </p>

          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal pt-1">
            Nigerian property records are some of the most fragmented, hardest-to-verify paperwork in the world — Certificates of Occupancy, Deed of Assignment chains, survey plans, and Lands Registry records that rarely exist in one clean, checkable place. MainTown is building an AI-powered verification layer using Google Gemini to read property documents, extract the key details, and flag inconsistencies before they ever reach a human reviewer — turning scattered paperwork into something that can actually be checked. The same approach applies to listing photos: AI-powered image analysis to catch reused or stolen photos before a listing ever goes live. This isn't a bolt-on feature. It's how we make 'verified' actually mean something, at a scale manual checking alone can't reach.
          </p>

          <div className="pt-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100 text-[10px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>IN DEVELOPMENT · POWERED BY GOOGLE GEMINI</span>
            </div>
          </div>
        </div>

        {/* 3 AI Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Document verification */}
          <div id="ai-card-documents" className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-purple-50/50 border border-purple-100/70 rounded-xl aspect-[1.28/1] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-2xl bg-white border border-purple-100 shadow-xs flex items-center justify-center text-primary">
                  <FileSearch className="w-8 h-8 stroke-[1.75]" />
                </div>
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-900 mt-6 mb-2">
                Document Verification
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Reading C of O, Deed of Assignment, and survey plans, structured automatically.
              </p>
            </div>
          </div>

          {/* Card 2: Photo authenticity */}
          <div id="ai-card-photos" className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-purple-50/50 border border-purple-100/70 rounded-xl aspect-[1.28/1] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-2xl bg-white border border-purple-100 shadow-xs flex items-center justify-center text-primary">
                  <ImageIcon className="w-8 h-8 stroke-[1.75]" />
                </div>
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-900 mt-6 mb-2">
                Photo Authenticity
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Catching reused or stolen listing images before they go live.
              </p>
            </div>
          </div>

          {/* Card 3: Built to scale trust */}
          <div id="ai-card-trust" className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="bg-purple-50/50 border border-purple-100/70 rounded-xl aspect-[1.28/1] flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-2xl bg-white border border-purple-100 shadow-xs flex items-center justify-center text-primary">
                  <ShieldCheck className="w-8 h-8 stroke-[1.75]" />
                </div>
              </div>
              <h3 className="font-sans text-xl font-semibold text-slate-900 mt-6 mb-2">
                Built to Scale Trust
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Checking hundreds of listings the way one careful human currently checks one.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
