import { CheckCircle, Cpu, ShieldCheck, TrendingUp, Users, CloudCog, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <>
      {/* Features Section 1 - Split Layout */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Innovation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Powerful Features</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience a suite of innovative tools designed to streamline your business operations and accelerate your growth.
            </p>
          </motion.div>

          {/* Split Content */}
          <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
            {/* Left - Dark Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0F1E] p-10 lg:p-16 flex flex-col justify-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 relative z-10">CORE CAPABILITIES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight relative z-10">Innovative Solutions for Modern Business</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed relative z-10">
                Our platform integrates cutting-edge technology with intuitive controls, giving you the power to manage your entire business ecosystem from a single dashboard.
              </p>
              <div className="space-y-5 relative z-10">
                {[
                  "Advanced Real-time Technology Integration",
                  "24/7 Professional Engineering Support",
                  "Highly Scalable Business Infrastructure"
                ].map((f) => (
                  <div key={f} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-white/80 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Light Feature Cards */}
            <div className="bg-slate-50 p-10 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {[
                { icon: Cpu, title: "Performance", desc: "Optimized architecture for maximum efficiency and speed.", color: "text-blue-500", bg: "bg-blue-500/10" },
                { icon: ShieldCheck, title: "Security", desc: "Enterprise-grade protection for your sensitive data.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { icon: TrendingUp, title: "Growth", desc: "Insightful analytics to drive your business expansion.", color: "text-amber-500", bg: "bg-amber-500/10" },
                { icon: Users, title: "Collaboration", desc: "Seamless teamwork tools for modern organizations.", color: "text-purple-500", bg: "bg-purple-500/10" },
              ].map((c, idx) => (
                <motion.div 
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <c.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">{c.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 2 - Grid Reveal */}
      <section className="py-24 bg-[#0A0F1E] relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[120px] -ml-20 -mt-20" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-600/10 rounded-full blur-[120px] -mr-20 -mb-20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Cpu, title: "AI-Powered Automation", desc: "Streamline your workflow with intelligent systems that learn and adapt to your unique needs." },
              { icon: CloudCog, title: "Cloud Native Engine", desc: "Native cloud support ensuring your applications stay resilient, portable, and infinitely scalable." },
              { icon: Users, title: "Seamless Team Dynamics", desc: "Bridge communication gaps with high-velocity tools that bring your global teams together." },
              { icon: BarChart3, title: "Deep-Dive Analytics", desc: "Predictive modeling and real-time visualization to transform complex data into clear action." },
            ].map((c, idx) => (
              <motion.div 
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <c.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 text-lg">
              Get Started Today
            </button>
            <button className="flex items-center justify-center gap-3 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-lg">
              Watch Experience <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
