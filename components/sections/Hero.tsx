'use client';

import { useEffect, useState } from 'react';
import { useLogger } from '@/context/LogContext';

export default function Hero() {
  const [text, setText] = useState('');
  const [uptime, setUptime] = useState(0);
  const [latency, setLatency] = useState(24);
  const [clientInfo, setClientInfo] = useState('DETECTING...');
  const [connectionStatus, setConnectionStatus] = useState('SECURE');
  const [showLogs, setShowLogs] = useState(false);
  const { logs, addLog } = useLogger();

  const fullText = 'FULL STACK SOFTWARE DEVELOPER';

  useEffect(() => {
    const timer = setInterval(() => setUptime((p) => p + 1), 1000);

    const measurePing = async () => {
      const start = performance.now();
      try {
        await fetch('/', { method: 'HEAD', cache: 'no-store' });
        const end = performance.now();
        const lat = Math.round(end - start);
        setLatency(lat);
        if (lat < 300) {
          setConnectionStatus('SECURE');
        } else {
          setConnectionStatus('UNSTABLE');
        }
      } catch (error) {
        setLatency(999);
        setConnectionStatus('OFFLINE');
      }
    };

    measurePing();
    const pingInterval = setInterval(measurePing, 2000);

    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent;
      let os = 'UNKNOWN_HOST';
      if (userAgent.indexOf('Win') !== -1) os = 'WIN_NT_SYSTEM';
      if (userAgent.indexOf('Mac') !== -1) os = 'DARWIN_KERNEL';
      if (userAgent.indexOf('Linux') !== -1) os = 'LINUX_SHELL';
      if (userAgent.indexOf('Android') !== -1) os = 'ANDROID_SYS';
      if (userAgent.indexOf('iPhone') || userAgent.indexOf('iPad')) os = 'IOS_DEVICE';
      setClientInfo(os);
    }

    return () => {
      clearInterval(timer);
      clearInterval(pingInterval);
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleLogs = () => {
    setShowLogs(!showLogs);
    addLog(showLogs ? 'User opened diagnostic panel.' : 'User minimized diagnostics.');
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/10">
      {/* Decorative Background Elements */}
      <div className="absolute right-12 top-24 w-64 h-64 border border-primary/20 rounded-full animate-spin [animation-duration:10s] pointer-events-none hidden md:block"></div>
      <div className="absolute right-12 top-24 w-60 h-60 border border-white/5 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse] pointer-events-none hidden md:block"></div>

      {/* Introduction Content */}
      <div className="w-full max-w-4xl relative z-10">
        <div className="flex items-center gap-2 mb-6 text-primary">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="text-xs font-mono tracking-widest">SYSTEM INITIALIZATION COMPLETE</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">
          Athul <span className="text-white/20">Krishna</span>
        </h1>

        <div className="flex items-center gap-4 text-xl md:text-2xl font-mono text-primary mb-12 h-8">
          <span className="text-white/60">&gt;</span>
          <span>{text}</span>
          <span className="w-3 h-8 bg-primary animate-cursor"></span>
        </div>

        <p className="max-w-xl text-white/60 leading-relaxed font-light mb-12 border-l-2 border-white/10 pl-6">
          Building secure, scalable SaaS platforms and high-performance web interfaces. Specialized
          in React, Node.js, and Cloud Infrastructure. Shipping resilient, secure-by-design
          solutions for complex applications.
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="/Athul_Krishna_CV.pdf"
            download
            onClick={() => addLog('FILE_TRANSFER: Initiated download of "Resume.pdf"', 'SUCCESS')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined">download</span>
            Download CV
          </a>
          <button
            onClick={toggleLogs}
            className={`border border-white/20 hover:bg-white/5 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all flex items-center gap-3 ${showLogs ? 'bg-white/10' : ''} cursor-pointer`}
          >
            <span className="material-symbols-outlined">terminal</span>
            {showLogs ? 'Close Logs' : 'View Logs'}
          </button>
        </div>
      </div>

      {/* Connection Log - UPGRADED Telemetry */}
      <div className="absolute bottom-12 right-12 text-right hidden lg:block font-mono">
        {/* Real User OS */}
        <div className="flex items-center justify-end gap-2 text-[10px] text-white/40 mb-1">
          <span>HOST_ID:</span>
          <span className="text-primary">{clientInfo}</span>
        </div>

        {/* Live Session Timer */}
        <div className="flex items-center justify-end gap-2 text-[10px] text-white/40 mb-1">
          <span>SESSION_UPTIME:</span>
          <span className="text-white">{formatTime(uptime)}</span>
        </div>

        {/* Sim. Latency & Strength */}
        <div className="flex flex-col gap-1 items-end mt-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] text-white/30">PING: {latency}ms</span>
          </div>
          <div className="flex gap-1">
            <div
              className={`w-1 h-1 ${latency > 500 ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}
            ></div>
            <div
              className={`w-1 h-1 ${latency < 300 ? 'bg-green-500' : 'bg-green-500/20'} animate-pulse [animation-delay:100ms]`}
            ></div>
            <div
              className={`w-1 h-1 ${latency < 150 ? 'bg-green-500' : 'bg-green-500/20'} animate-pulse [animation-delay:200ms]`}
            ></div>
            <div className={`w-1 h-1 ${latency < 50 ? 'bg-green-500' : 'bg-green-500/20'}`}></div>
          </div>
          <span
            className={`text-[10px] font-bold tracking-widest mt-1 ${
              connectionStatus === 'SECURE'
                ? 'text-green-500'
                : connectionStatus === 'UNSTABLE'
                  ? 'text-yellow-500'
                  : 'text-red-500 animate-pulse'
            }`}
          >
            {connectionStatus === 'SECURE' && 'SECURE_CONNECTION_ESTABLISHED'}
            {connectionStatus === 'UNSTABLE' && 'CONNECTION_UNSTABLE'}
            {connectionStatus === 'OFFLINE' && 'CONNECTION_OFFLINE'}
          </span>
        </div>
      </div>

      {showLogs && (
        <div className="absolute top-24 right-6 lg:right-12 w-96 bg-black/95 backdrop-blur-md border border-white/10 p-4 rounded-lg font-mono text-[10px] text-green-400 shadow-2xl animate-in slide-in-from-top-4 fade-in z-20 pointer-events-auto flex flex-col">
          <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2 bg-black/50 shrink-0">
            <span className="text-white/50">DIAGNOSTIC_STREAM</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <div className="flex flex-col gap-1 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2 overscroll-contain">
            {logs.map((log, i) => (
              <div
                key={i}
                className="opacity-80 hover:opacity-100 transition-opacity break-words shrink-0"
              >
                <span className="text-white/30 mr-2">&gt;</span>
                {log}
              </div>
            ))}
            {logs.length === 0 && <div className="text-white/30">Listening for events...</div>}
          </div>
        </div>
      )}
    </section>
  );
}
