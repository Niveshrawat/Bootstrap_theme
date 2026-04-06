import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rachel Bennett", role: "Strategy Director", img: "person-f-7", text: "Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning. The results exceeded our expectations." },
  { name: "Daniel Morgan", role: "Chief Innovation Officer", img: "person-m-7", text: "Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.", featured: true },
  { name: "Emma Thompson", role: "Digital Lead", img: "person-f-8", text: "Strategic partnership has enabled seamless digital transformation and operational excellence. Their team is truly world-class and deeply technical." },
  { name: "Christopher Lee", role: "Technical Director", img: "person-m-8", text: "Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics. A truly reliable partner for scale." },
  { name: "Olivia Carter", role: "Product Manager", img: "person-f-9", text: "Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.", featured: true },
  { name: "Nathan Brooks", role: "UX Director", img: "person-m-13", text: "Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates. Highly recommended." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Client Success Stories</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take our word for it—hear from the leaders who have transformed their organizations with our strategic digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white border rounded-[2.5rem] p-10 transition-all duration-300 ${
                t.featured 
                  ? "border-primary/20 shadow-2xl shadow-primary/10 ring-1 ring-primary/5" 
                  : "border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[10px] uppercase tracking-widest font-black px-4 py-2 rounded-full shadow-xl shadow-primary/30">
                  Top Review
                </div>
              )}
              
              <div className="absolute top-10 right-10 opacity-[0.05]">
                <Quote size={60} className="text-primary" />
              </div>

              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 mb-10 leading-relaxed text-lg italic font-medium">"{t.text}"</p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                <div className="relative">
                  <img
                    src={`https://bootstrapmade.com/content/demo/Elevate/assets/img/person/${t.img}.webp`}
                    alt={t.name}
                    className="w-14 h-14 rounded-2xl object-cover shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight">{t.name}</h4>
                  <span className="text-sm font-semibold text-slate-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
