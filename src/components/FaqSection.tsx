import { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { 
    q: "How does the implementation process work?", 
    a: "Our implementation process is designed to be seamless. We start with a discovery phase, followed by architecture design, development, and a comprehensive QA process before final deployment and training." 
  },
  { 
    q: "Can I integrate with my existing tech stack?", 
    a: "Absolutely. Our platform is built with a 'hub-first' philosophy, featuring pre-built connectors for all major ERP, CRM, and productivity tools, as well as a robust API for custom integrations." 
  },
  { 
    q: "What kind of support can I expect?", 
    a: "We provide 24/7 technical support with guaranteed response times. Depending on your plan, you'll also have access to a dedicated account manager and regular strategy reviews." 
  },
  { 
    q: "Is my data secure on your platform?", 
    a: "Security is our top priority. We use enterprise-grade encryption (AES-256), conduct regular third-party audits, and maintain full compliance with SOC2, GDPR, and ISO 27001 standards." 
  },
  { 
    q: "How do you handle scaling as our business grows?", 
    a: "Our infrastructure is built on a cloud-native, auto-scaling architecture. This means your platform automatically adjusts resources to handle increased load without any manual intervention required." 
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Common Questions</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Find quick answers to common queries about our platform, security, and implementation. Can't find what you're looking for? Reach out to our team.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-all group-hover:rotate-12">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Still have questions?</h4>
                <p className="text-slate-500 text-sm font-medium">Chat with our experts 24/7</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`group rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-slate-50 border-primary shadow-xl shadow-slate-200/50" 
                      : "bg-white border-slate-100 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-8 text-left transition-all"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                      }`}>
                        <HelpCircle size={20} />
                      </div>
                      <h4 className={`text-lg font-bold transition-colors ${isOpen ? "text-slate-900" : "text-slate-700 hover:text-slate-900"}`}>
                        {faq.q}
                      </h4>
                    </div>
                    <div className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-slate-300"}`}>
                      <ChevronDown size={24} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 pl-[4.5rem]">
                          <p className="text-slate-500 text-base leading-relaxed font-medium">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
