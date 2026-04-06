import { CheckCircle2, PlayCircle, Shield, Zap, Layers, Settings, Trophy, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-[80px] -ml-20 -mb-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Discovery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Story & Vision</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We are dedicated to bridging the gap between complex technology and intuitive user experiences, empowering businesses to thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Empowering businesses with intelligent digital solutions</h3>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              Through years of expertise and constant innovation, we've developed a methodology that delivers consistent results and builds long-term value for our partners.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { num: "850+", label: "Active Clients" },
                { num: "99.2%", label: "Success Rate" },
                { num: "12+", label: "Years Exp." },
              ].map((s) => (
                <div key={s.label} className="group cursor-default">
                  <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{s.num}</div>
                  <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-5 mb-12">
              {[
                "Enterprise-grade security and data compliance",
                "24/7 dedicated multi-layered support team",
                "Highly scalable infrastructure designed for growth"
              ].map((f) => (
                <div key={f} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 font-medium">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95">
                Learn More
              </button>
              <button className="flex items-center gap-2 border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                <PlayCircle className="w-5 h-5 text-primary" /> Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://bootstrapmade.com/content/demo/Elevate/assets/img/about/about-5.webp" 
                alt="Main about" 
                className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white" 
              />
              
              {/* Floating Award Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-6 bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-5 flex items-center gap-4 shadow-xl z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xl">95%</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Client Retention</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-6 bg-white/95 backdrop-blur-md border border-slate-100 rounded-3xl p-5 flex items-center gap-4 shadow-xl z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xl">3.2x</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ROI Average</div>
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://bootstrapmade.com/content/demo/Elevate/assets/img/about/about-square-8.webp" 
                className="w-full rounded-3xl shadow-lg transition-transform duration-300"
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://bootstrapmade.com/content/demo/Elevate/assets/img/about/about-square-12.webp" 
                className="w-full rounded-3xl shadow-lg transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Feature Cards with Staggered Reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Secure Platform", desc: "Enterprise-grade safety features to protect your most valuable digital assets.", color: "bg-blue-500" },
            { icon: Zap, title: "Peak Velocity", desc: "Optimized performance that delivers an ultra-fast experience to your end users.", color: "bg-amber-500" },
            { icon: Layers, title: "Deep Integration", desc: "Seamlessly connects with your existing tech stack and workflow tools.", color: "bg-purple-500" },
            { icon: Settings, title: "Full Customization", desc: "Flexible architecture that adapts perfectly to your unique business needs.", color: "bg-emerald-500" },
          ].map((card, idx) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon className={`w-7 h-7 text-white mix-blend-darken`} />
                <card.icon className={`w-7 h-7 absolute`} style={{ color: `hsl(var(--primary))` }} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{card.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
