import { motion } from "framer-motion";
import { ArrowUp, Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0F1E] pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 rounded-full blur-[100px] -ml-20 -mb-20" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/5 rounded-full blur-[80px] -mr-20 -mt-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <a href="#hero" className="text-3xl font-black text-white tracking-tighter mb-8 block group">
              Elevate<span className="text-primary group-hover:animate-pulse">.</span>
            </a>
            <p className="text-white/40 text-lg leading-relaxed mb-10">
              Transforming the digital landscape with innovative strategy and high-velocity engineering. Built for those who dare to lead.
            </p>
            <div className="flex gap-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 tracking-wider uppercase text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Features", "Services", "Portfolio"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-white/40 hover:text-primary transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-8 tracking-wider uppercase text-xs">Resources</h4>
            <ul className="space-y-4">
              {["Support Center", "API Reference", "Case Studies", "Terms of Service", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 hover:text-primary transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-8 tracking-wider uppercase text-xs">Get in Touch</h4>
            <div className="space-y-6">
              {[
                { icon: Mail, value: "hello@elevate.digital" },
                { icon: Phone, value: "+1 (555) 000-8888" },
                { icon: MapPin, value: "Silicon Valley, California" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={18} />
                  </div>
                  <span className="text-white/60 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-white">Elevate Digital Solutions</span>. All rights reserved.
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-white/50 hover:text-white hover:border-primary transition-all"
          >
            <span className="text-sm font-bold tracking-widest uppercase">Back to top</span>
            <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
