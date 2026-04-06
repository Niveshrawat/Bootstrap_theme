import { useState } from "react";
import { Eye, FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All Projects", "Consulting", "Financial Services", "Technology", "Enterprise Solutions"];

const projects = [
  { img: "portfolio-3", cat: "Consulting", label: "Management Consulting", title: "Enterprise Transformation Initiative", year: "2024", desc: "Strategic overhaul of core business processes for a global manufacturing leader.", m1: { label: "ROI Improvement", value: "+42%" }, m2: { label: "Timeline", value: "18 Months" } },
  { img: "portfolio-7", cat: "Financial Services", label: "Financial Services", title: "Risk Management Platform Implementation", year: "2024", desc: "Next-gen risk assessment system for a tier-1 multinational banking institution.", m1: { label: "Risk Reduction", value: "-35%" }, m2: { label: "Compliance", value: "100%" } },
  { img: "portfolio-9", cat: "Technology", label: "Technology Solutions", title: "Cloud Migration & Infrastructure Modernization", year: "2023", desc: "End-to-end cloud transformation for a high-growth fintech scaleup.", m1: { label: "Cost Savings", value: "$2.4M" }, m2: { label: "Uptime", value: "99.9%" } },
  { img: "portfolio-11", cat: "Enterprise Solutions", label: "Enterprise Solutions", title: "Global ERP System Integration", year: "2023", desc: "Unifying operations across 12 countries with a central intelligent ERP.", m1: { label: "Efficiency Gain", value: "+58%" }, m2: { label: "Users", value: "12,000+" } },
  { img: "portfolio-5", cat: "Consulting", label: "Strategic Planning", title: "Market Expansion Strategy Development", year: "2024", desc: "Data-driven expansion plan for an e-commerce giant's entry into new markets.", m1: { label: "Market Share", value: "+28%" }, m2: { label: "New Markets", value: "7" } },
  { img: "portfolio-12", cat: "Technology", label: "Digital Transformation", title: "AI-Powered Analytics Platform", year: "2023", desc: "Custom AI engine for real-time consumer behavior predictive analytics.", m1: { label: "Data Processing", value: "10x Faster" }, m2: { label: "Accuracy", value: "97%" } },
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All Projects");
  const filtered = filter === "All Projects" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Portfolio</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover how we've helped leading organizations across various sectors overcome challenges and achieve remarkable digital growth.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${
                filter === c 
                  ? "bg-primary text-white shadow-xl shadow-primary/25" 
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div 
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={`https://bootstrapmade.com/content/demo/Elevate/assets/img/portfolio/${p.img}.webp`} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                    {p.label}
                  </span>
                </div>
                
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
                    <span className="text-sm font-bold text-slate-300">{p.year}</span>
                  </div>
                  <p className="text-slate-500 mb-8 leading-relaxed italic">"{p.desc}"</p>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8 border-t border-slate-50">
                    <div className="flex gap-10">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">{p.m1.label}</span>
                        <span className="text-xl font-black text-primary">{p.m1.value}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">{p.m2.label}</span>
                        <span className="text-xl font-black text-primary">{p.m2.value}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                        <FileText className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 border border-slate-100 rounded-[3rem] p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Ready to Drive Your Business Forward?</h3>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">Let's collaborate to build something extraordinary. Schedule a strategy session with our experts today.</p>
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 text-lg inline-flex items-center gap-3">
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
