import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Award, BookOpen } from 'lucide-react';
import { CREDENTIALS_DATA } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const Certifications: React.FC = () => {
  const featuredCredentials = CREDENTIALS_DATA.filter((i) => i.organization !== 'Credly');
  const credlyBadges = CREDENTIALS_DATA.filter((i) => i.organization === 'Credly');

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="VERIFIED CREDENTIALS"
          title="Verified Credentials & Learning"
          subtitle="Official industry credentials, verified skills badges, and continuous learning achievements."
        />

        {/* Featured Key Credentials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
          {featuredCredentials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6 border-cyan-500/20">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold">
                      {item.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      FEATURED
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300 text-xs font-mono mb-2">
                    {item.organization === 'Cisco Networking Academy' ? (
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <BookOpen className="w-4 h-4 text-cyan-400" />
                    )}
                    <span className="font-semibold">{item.organization}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-100 mb-4">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-slate-200 hover:text-cyan-300 transition-all font-mono text-xs font-semibold flex items-center justify-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>{item.buttonLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Credly Verified Badges Compact Grid */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Credly Verified Badges ({credlyBadges.length})</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">
              VERIFIED BADGE REPOSITORY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {credlyBadges.map((badge, idx) => (
              <a
                key={badge.id}
                href={badge.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-cyan-500/10 border border-white/[0.06] hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-all flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase mb-1">
                    CREDLY BADGE #{idx + 1}
                  </span>
                  <span className="text-xs font-semibold font-heading text-slate-200 group-hover:text-cyan-300 block mb-2">
                    {badge.title}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] text-[11px] font-mono text-cyan-400 font-medium">
                  <span>View Badge</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
