import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Let's Build Together</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to elevate your digital presence? We're here to help you navigate your next big breakthrough. Reach out and let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-[#0A0F1E] rounded-[2.5rem] p-10 text-white relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -mr-16 -mt-16 transition-colors group-hover:bg-primary/30" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Contact Information</h3>
                <p className="text-white/60 mb-10 leading-relaxed font-medium">We're available 24/7 to discuss your project requirements and offer strategic guidance.</p>
                
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Email Support", value: "hello@elevate.digital" },
                    { icon: Phone, label: "Direct Line", value: "+1 (555) 000-8888" },
                    { icon: MapPin, label: "Headquarters", value: "Silicon Valley, CA 94025" },
                  ].map((item) => (
                    <motion.div 
                      key={item.label} 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-5 group/item"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover/item:bg-primary group-hover/item:border-primary shadow-lg">
                        <item.icon className="w-5 h-5 text-primary group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 block mb-1">{item.label}</span>
                        <span className="text-white font-bold tracking-tight">{item.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 pt-10 border-t border-white/5">
                  <div className="flex gap-4">
                    {["Twitter", "LinkedIn", "Instagram"].map(social => (
                      <button key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                        <span className="sr-only">{social}</span>
                        <ArrowRight size={16} className="-rotate-45" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-full"
          >
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl shadow-slate-200/50 h-full">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all placeholder:text-slate-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 disabled:opacity-70 text-lg group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isSubmitting ? "animate-pulse" : ""}`} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
