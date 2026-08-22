import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'logs' | 'packets' | 'rules'>('logs');
  const [logs, setLogs] = useState([
    { id: 1, time: '12:44:01', level: 'INFO', msg: 'SOC Monitoring Node online • Interface eth0' },
    { id: 2, time: '12:44:05', level: 'WARN', msg: 'TCP SYN scan detected from 192.168.1.105' },
    { id: 3, time: '12:44:09', level: 'ALERT', msg: 'SIEM Rule Match: Exploit Scenario Replay SQLi' },
    { id: 4, time: '12:44:12', level: 'INFO', msg: 'AES-256-GCM Payload Integrity Verified' }
  ]);

  const [packets] = useState([
    { id: 'PKT-101', proto: 'TCP', src: '10.0.0.12:443', dst: '192.168.1.5:52104', status: 'ESTABLISHED' },
    { id: 'PKT-102', proto: 'HTTP', src: '192.168.1.5', dst: '10.0.0.20:80', status: 'GET /api/v1/auth' },
    { id: 'PKT-103', proto: 'DNS', src: '192.168.1.5', dst: '8.8.8.8:53', status: 'QUERY A sec.internal' },
    { id: 'PKT-104', proto: 'HTTPS', src: '10.0.0.15:443', dst: '192.168.1.5:44812', status: 'TLSv1.3 AES' }
  ]);

  const [rules] = useState([
    { rule: 'SIG-001', name: 'SQL Injection Attack Vector', status: 'ACTIVE', severity: 'HIGH' },
    { rule: 'SIG-002', name: 'Nmap TCP SYN Port Sweep', status: 'ACTIVE', severity: 'MEDIUM' },
    { rule: 'SIG-003', name: 'AES-GCM Key Derivation PBKDF2', status: 'VERIFIED', severity: 'INFO' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString('en-US', { hour12: false });
      const events = [
        { level: 'INFO', msg: 'Packet stream telemetry synced (256 B/s)' },
        { level: 'WARN', msg: 'Unusual port query detected on port 8080' },
        { level: 'INFO', msg: 'Wireshark pcap buffer updated' }
      ];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setLogs((prev) => [
        { id: Date.now(), time: newTime, level: randomEvent.level, msg: randomEvent.msg },
        ...prev.slice(0, 3)
      ]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GlassCard className="p-5 md:p-6 relative overflow-hidden bg-[#060a16]/90 border-cyan-500/30 text-left shadow-2xl">
      {/* Decorative top bar */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            SOC THREAT MONITORING CONSOLE
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">
            LIVE SIMULATOR
          </span>
        </div>
      </div>

      {/* Interactive Console Tabs */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setActiveTab('logs')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'logs'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-white/[0.03] text-slate-400 hover:text-slate-200'
          }`}
        >
          SIEM Log Feed
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('packets')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'packets'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-white/[0.03] text-slate-400 hover:text-slate-200'
          }`}
        >
          Packet Stream
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('rules')}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'rules'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-white/[0.03] text-slate-400 hover:text-slate-200'
          }`}
        >
          Detection Rules
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="min-h-[220px] rounded-xl bg-[#03060f] border border-white/[0.08] p-4 font-mono text-xs space-y-2.5">
        {activeTab === 'logs' && (
          <div className="space-y-2">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2 animate-in fade-in duration-300">
                <span className="text-slate-500 shrink-0">[{log.time}]</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                    log.level === 'ALERT'
                      ? 'bg-red-500/20 text-red-400'
                      : log.level === 'WARN'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-cyan-500/20 text-cyan-400'
                  }`}
                >
                  {log.level}
                </span>
                <span className="text-slate-300 truncate">{log.msg}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'packets' && (
          <div className="space-y-2">
            {packets.map((pkt) => (
              <div key={pkt.id} className="flex items-center justify-between p-1.5 rounded bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold text-[10px]">
                    {pkt.proto}
                  </span>
                  <span className="text-slate-300 text-[11px]">{pkt.src} ➔ {pkt.dst}</span>
                </div>
                <span className="text-slate-400 text-[10px]">{pkt.status}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="space-y-2">
            {rules.map((r) => (
              <div key={r.rule} className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
                <div>
                  <span className="text-cyan-400 font-bold mr-2">{r.rule}</span>
                  <span className="text-slate-200">{r.name}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Metrics Summary Strip */}
      <div className="grid grid-cols-3 gap-3 mt-4 text-center font-mono">
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] text-slate-400 block">THREAT SCORE</span>
          <span className="text-sm font-bold text-emerald-400">LOW (0.02)</span>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] text-slate-400 block">ACTIVE SIEM</span>
          <span className="text-sm font-bold text-cyan-400">ONLINE</span>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] text-slate-400 block">BLUE TEAM</span>
          <span className="text-sm font-bold text-sky-400">READY</span>
        </div>
      </div>
    </GlassCard>
  );
};
