import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Users, Server, AlertTriangle, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [trafficData, setTrafficData] = useState([]);
  const [serverLoad, setServerLoad] = useState([]);
  const [logs, setLogs] = useState([]);
  const [usersOnline, setUsersOnline] = useState(0);
  const [uptime, setUptime] = useState("0%");
  const [alerts, setAlerts] = useState(0);

  // Simulação de dados
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().getHours() + ":" + new Date().getMinutes();
      setTrafficData((prev) => [
        ...prev.slice(-6),
        { time, users: Math.floor(Math.random() * 200) + 50 },
      ]);

      setServerLoad([
        { name: "CPU", value: Math.floor(Math.random() * 100) },
        { name: "Memória", value: Math.floor(Math.random() * 100) },
        { name: "Disco", value: Math.floor(Math.random() * 100) },
      ]);

      setUsersOnline(Math.floor(Math.random() * 300));
      setUptime((99 + Math.random()).toFixed(2) + "%");
      setAlerts(Math.floor(Math.random() * 5));

      setLogs((prev) => [
        `[${new Date().toLocaleTimeString()}] ⚡ Evento gerado`,
        `[${new Date().toLocaleTimeString()}] ⚠️ Alerta de performance`,
        ...prev.slice(0, 4),
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Cores neon
  const neonColors = {
    blue: "#00f6ff",
    green: "#00ff99",
    pink: "#ff00ff",
    yellow: "#fff600",
    red: "#ff4c4c",
  };

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto text-white font-mono">
      <h1 className="text-6xl font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 mb-12 text-center animate-pulse">
        Painel Admin Futurista ⚡
      </h1>

      {/* Cards principais com animação */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {[{
          icon: <Users className="w-10 h-10 text-blue-400 mx-auto mb-2 animate-bounce" />,
          title: "Usuários Online",
          value: usersOnline,
          color: neonColors.blue
        },{
          icon: <Server className="w-10 h-10 text-green-400 mx-auto mb-2 animate-bounce" />,
          title: "Uptime",
          value: uptime,
          color: neonColors.green
        },{
          icon: <Cpu className="w-10 h-10 text-yellow-400 mx-auto mb-2 animate-bounce" />,
          title: "Carga CPU",
          value: serverLoad[0]?.value + "%",
          color: neonColors.yellow
        },{
          icon: <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-2 animate-ping" />,
          title: "Alertas",
          value: alerts,
          color: neonColors.red
        }].map((c, idx) => (
          <motion.div
            key={idx}
            className="bg-neutral-900 p-6 rounded-3xl border border-blue-600 hover:border-pink-500 transition text-center shadow-neon"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            {c.icon}
            <h2 className="text-2xl font-bold mb-2" style={{ color: c.color }}>{c.title}</h2>
            <p className="text-neutral-400 text-lg">{c.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Tráfego em tempo real */}
      <div className="bg-neutral-900 p-6 rounded-3xl border border-blue-600 mb-12 shadow-neon">
        <h2 className="text-3xl mb-4 font-bold text-blue-400 animate-pulse">
          Tráfego em Tempo Real
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" />
            <XAxis dataKey="time" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #00ff99" }} />
            <Line type="monotone" dataKey="users" stroke={neonColors.blue} strokeWidth={4} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Uso de servidor */}
      <div className="bg-neutral-900 p-6 rounded-3xl border border-green-600 mb-12 shadow-neon">
        <h2 className="text-3xl mb-4 font-bold text-green-400 animate-pulse">
          Uso do Servidor
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={serverLoad}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ backgroundColor: "#111", border: "1px solid #00ff99" }} />
            <Bar dataKey="value" fill={neonColors.green} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Logs recentes */}
      <div className="bg-neutral-900 p-6 rounded-3xl border border-red-600 shadow-neon">
        <h2 className="text-3xl mb-4 font-bold text-red-400 animate-pulse">Logs Recentes</h2>
        <ul className="space-y-2 text-neutral-300 text-sm max-h-64 overflow-y-auto">
          {logs.map((log, idx) => (
            <li key={idx} className="hover:text-pink-500 transition">{log}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
