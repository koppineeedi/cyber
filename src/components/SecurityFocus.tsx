import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Activity, Network, Zap, Lock, Shield } from 'lucide-react';
import { SECURITY_FOCUS_ITEMS } from '../data/portfolio';

export const SecurityFocus: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'Network':
        return <Network className="w-4 h-4 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-sky-400" />;
      case 'Lock':
        return <Lock className="w-4 h-4 text-purple-400" />;
      default:
        return <Shield className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="security-focus-strip" className="py-6 relative border-y border-white/[0.08] bg-[#080d1a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest shrink-0">
            <Shield className="w-4 h-4" />
            <span>SECURITY FOCUS</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full">
            {SECURITY_FOCUS_ITEMS.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-slate-200 hover:text-cyan-300 font-mono text-xs font-medium flex items-center gap-2 transition-all duration-200 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                {getIcon(item.iconName)}
                <span>{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
