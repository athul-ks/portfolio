'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type LogContextType = {
  logs: string[];
  addLog: (message: string, type?: 'INFO' | 'WARN' | 'SUCCESS' | 'ERROR') => void;
};

const LogContext = createContext<LogContextType | undefined>(undefined);

export function LogProvider({ children }: { children: ReactNode }) {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = useCallback(
    (message: string, type: 'INFO' | 'WARN' | 'SUCCESS' | 'ERROR' = 'INFO') => {
      const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
      const prefix =
        type === 'INFO'
          ? 'SYS_EVENT'
          : type === 'WARN'
            ? 'SEC_OPS_WARN'
            : type === 'ERROR'
              ? 'ERROR_OP'
              : 'SUCCESS_OP';
      setLogs((prev) => [`[${timestamp}] ${prefix}: ${message}`, ...prev].slice(0, 50));
    },
    []
  );

  return <LogContext.Provider value={{ logs, addLog }}>{children}</LogContext.Provider>;
}

export function useLogger() {
  const context = useContext(LogContext);
  if (!context) throw new Error('useLogger must be used within a LogProvider');
  return context;
}
