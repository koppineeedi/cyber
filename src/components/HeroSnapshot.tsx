import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  ShieldAlert,
  MapPin,
  Briefcase,
  CheckCircle2,
  UserCheck
} from 'lucide-react';
import { PROFILE_SNAPSHOT } from '../data/portfolio';
import { GlassCard } from './GlassCard';

export const HeroSnapshot: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'Award':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-4 h-4 text-blue-400" />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-sky-400" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-indigo-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <UserCheck className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full mt-6"
    >
      <GlassCard className="p-5 md:p-6 bg-gradient-to-r from-slate-900/90 via-[#0b1329]/95 to-slate-900/90 border-cyan-500/30 text-left">
        <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-white/[0.08]">
          <UserCheck className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-200 uppercase">
            PROFILE SNAPSHOT
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {PROFILE_SNAPSHOT.map((item) => (
            <div
              key={item.label}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                {getIcon(item.iconName)}
                <span className="text-[10px] font-mono uppercase tracking-wider">{item.label}</span>
              </div>
              <span className="text-xs font-bold font-heading text-slate-100 truncate">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
};
