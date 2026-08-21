import React from 'react';
import { Shield, Activity, Network, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse-glow" />

      {/* Main Container Panel */}
      <div className="relative rounded-2xl bg-[#0b1329]/90 border border-cyan-500/30 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            <div className="font-mono text-xs text-cyan-400 tracking-wider font-semibold uppercase flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>SOC MONITOR</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>OPERATIONAL</span>
          </div>
        </div>

        {/* Central Shield & Topology Visualization */}
        <div className="relative my-4 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden flex flex-col items-center justify-center">
          {/* Animated radar rings */}
          <div className="absolute w-48 h-48 rounded-full border border-cyan-500/15 animate-ping opacity-20" />
          <div className="absolute w-64 h-64 rounded-full border border-blue-500/10" />

          {/* Glowing Shield Centerpiece */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] my-2"
          >
            <Shield className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </motion.div>

          {/* Node Connections Grid */}
          <div className="w-full grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="p-2 rounded-lg bg-slate-900/60 border border-white/[0.05]">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">SYSTEM</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">OPERATIONAL</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/60 border border-white/[0.05]">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">NETWORK</span>
              <span className="text-xs font-mono text-cyan-400 font-semibold">SECURE</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/60 border border-white/[0.05]">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">MONITORING</span>
              <span className="text-xs font-mono text-blue-400 font-semibold">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Dashboard Status Cards Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">THREAT LEVEL</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">LOW / NORMAL</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">EVENTS</span>
                <span className="text-xs font-mono text-cyan-400 font-bold">ANALYZING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Security Logs Feed (Decorative) */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05] font-mono text-[11px] space-y-1.5">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-cyan-400">[SOC-LOG]</span>
            <span className="text-slate-500 text-[10px]">PACKET FILTERING</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-emerald-400">✓</span>
            <span>Firewall Rules Active • 0 Suspicious Drops</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-cyan-400">⚡</span>
            <span>SIEM Detection Engines Operational</span>
          </div>
        </div>

        {/* Caption Label (Mandatory rule: explicitly state decorative visual) */}
        <div className="mt-3 pt-2 text-center border-t border-white/[0.05]">
          <span className="text-[10px] font-mono text-slate-500 tracking-wide uppercase">
            Visual Representation • Security Dashboard Concept
          </span>
        </div>
      </div>
    </div>
  );
};
