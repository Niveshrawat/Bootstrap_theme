import { CheckCircle2, ArrowRight, TrendingUp, Shield, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    category: "Strategy",
    title: "Strategic Business Consulting",
    desc: "Our strategic consulting services help organizations identify growth opportunities, optimize operations, and implement sustainable business practices.",
    features: ["Market Analysis & Research", "Business Process Optimization", "Growth Strategy Development", "Performance Metrics & KPIs"],
  },
  {
    icon: Shield,
    category: "Technology",
    title: "Enterprise Technology Solutions",
    desc: "We provide enterprise-grade technology services designed to drive measurable results for organizations of all sizes, from startups to Fortune 500s.",
    features: ["System Integration Services", "Cloud Infrastructure Management", "Cybersecurity Solutions", "Enterprise Software Development"],
  },
  {
    icon: Users,
    category: "HR Solutions",
    title: "Talent Management & Development",
    desc: "Attract, retain, and develop world-class talent with our comprehensive human resources and organizational development solutions.",
    features: ["Executive Recruitment", "Leadership Training Programs", "Organizational Development", "Performance Management Systems"],
  },
  {
    icon: BarChart3,
    category: "Analytics",
    title: "Data Analytics & Intelligence",
    desc: "Unlock the power of your data with our advanced analytics and business intelligence solutions, providing actionable insights for growth.",
    features: ["Predictive Analytics Modeling", "Data Warehouse Solutions", "Dashboard & Reporting Tools", "Machine Learning Integration"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Expertise</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering high-impact solutions across various industries, we help you navigate complexity and achieve sustainable excellence.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 bg-white rounded-[2rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Comprehensive Business Solutions</h3>
            <p className="text-slate-500 text-lg">We provide enterprise-grade services designed to drive measurable results for organizations of all sizes.</p>
          </div>
          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 whitespace-nowrap">
            Request Consultation
          </button>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((s, idx) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-lg shadow-slate-200/30 transition-all hover:shadow-2xl hover:shadow-slate-300/50 group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                  <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase mb-1 block">{s.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{s.title}</h3>
                </div>
              </div>
              
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{s.desc}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-lg group/link">
                Learn More 
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0A0F1E] rounded-[3rem] p-10 lg:p-20 relative overflow-hidden group"
        >
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-full blur-[120px] -mr-40 group-hover:bg-primary/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/10 rounded-full blur-[100px] -ml-20 group-hover:bg-blue-600/20 transition-colors duration-700" />

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative z-10">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Ready to Transform Your Business Velocity?</h3>
              <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">Partner with our award-winning team to develop tailored solutions that drive sustainable and measurable growth.</p>
              
              <div className="flex flex-wrap gap-10">
                {[
                  { num: "850+", label: "Projects Completed" },
                  { num: "98%", label: "Satisfaction Rate" },
                  { num: "15+", label: "Years Experience" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-white mb-1 tracking-tight">{s.num}</div>
                    <div className="text-sm font-semibold text-white/40 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">
              <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 text-lg">
                Get Started Now
              </button>
              <button className="border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/5 transition-all text-lg">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
