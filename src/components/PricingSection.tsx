import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Nova Starter",
    desc: "Perfect for individuals and small teams starting their digital journey.",
    price: 19,
    features: ["Core Analytics Dashboard", "Up to 5 Projects", "Standard Email Support", "Basic Cloud Integration"],
    cta: "Get Started",
  },
  {
    name: "Orbit Standard",
    desc: "Advanced tools for growing businesses that need more power and speed.",
    price: 39,
    features: ["Advanced Data Visualization", "Unlimited Projects", "Priority 24/7 Support", "Full API Access"],
    cta: "Choose Plan",
  },
  {
    name: "Zenith Plus",
    desc: "Our most popular plan for established organizations looking to scale fast.",
    price: 59,
    features: ["AI-Powered Insights", "Custom Integration Suite", "Dedicated Support Manager", "Enterprise Security"],
    cta: "Join Now",
    featured: true,
  },
  {
    name: "Lumen Elite",
    desc: "Custom-built solutions for global enterprises with complex requirements.",
    price: 89,
    features: ["Full White-labeling", "Custom Development Time", "On-site Training Session", "99.99% Uptime SLA"],
    cta: "Discover More",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-slate-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Investment</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the perfect plan for your business stage. No hidden fees, no long-term contracts. Just pure value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className={`relative bg-white rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col ${
                plan.featured 
                  ? "border-primary shadow-2xl shadow-primary/20 ring-1 ring-primary/10" 
                  : "border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-black tracking-[0.2em] px-6 py-2 rounded-full shadow-xl shadow-primary/30">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{plan.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{plan.desc}</p>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-400">$</span>
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                  <span className="text-slate-400 font-semibold text-sm">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-slate-600 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 text-lg ${
                  plan.featured
                    ? "bg-primary text-white shadow-xl shadow-primary/25 hover:shadow-primary/40"
                    : "bg-slate-50 text-slate-900 border border-slate-100 hover:bg-slate-100"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Enterprise Banner */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
          <p className="text-slate-400 font-medium">Need a custom solution for your enterprise? <a href="#contact" className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">Contact our sales team</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
