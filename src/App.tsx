/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  ChevronRight, 
  Dumbbell, 
  Calendar, 
  Trophy, 
  Clock, 
  Sparkles,
  Info,
  Menu,
  X,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import { CHALLENGE_DATA, DayRoutine, Exercise } from './data/challenge';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [selectedDay, setSelectedDay] = useState<DayRoutine>(CHALLENGE_DATA[0]);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('glutefit_progress');
    if (saved) {
      setCompletedDays(JSON.parse(saved));
    }
  }, []);

  const toggleDayCompletion = (day: number) => {
    setCompletedDays(prev => {
      const next = prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day];
      localStorage.setItem('glutefit_progress', JSON.stringify(next));
      return next;
    });
  };

  // Helper to convert Drive view link to embed link
  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('drive.google.com')) {
      return url.replace('/view?usp=sharing', '/preview').replace('/view', '/preview');
    }
    return url;
  };

  return (
    <div className="flex h-screen bg-[#FDFBF7] text-[#344E41] font-sans overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-[#E6E1D6] transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-[#E6E1D6] flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#A3B18A] rounded-xl flex items-center justify-center text-white shrink-0">
                <Dumbbell size={24} />
              </div>
              <h1 className="font-bold text-lg leading-tight tracking-tight">Desafío de Glúteos 30 Días</h1>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-[#588157]">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="px-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider opacity-60">Tu Progreso</span>
                <span className="text-sm font-bold text-[#A3B18A]">{completedDays.length}/30 Días</span>
              </div>
              <div className="w-full h-2 bg-[#E6E1D6] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#A3B18A]"
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedDays.length / 30) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="px-2 text-xs font-bold uppercase tracking-widest opacity-40 mb-3">Clases del Desafío</h3>
              {CHALLENGE_DATA.map(day => (
                <button
                  key={day.day}
                  onClick={() => {
                    setSelectedDay(day);
                    setIsSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left group",
                    selectedDay.day === day.day 
                      ? "bg-[#A3B18A]/10 border border-[#A3B18A]/20" 
                      : "hover:bg-[#F3F1ED] border border-transparent"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors shrink-0",
                    completedDays.includes(day.day) 
                      ? "bg-[#A3B18A] text-white" 
                      : selectedDay.day === day.day 
                        ? "bg-[#3A5A40] text-white"
                        : "bg-[#E6E1D6] text-[#344E41]/60"
                  )}>
                    {completedDays.includes(day.day) ? <CheckCircle2 size={16} /> : day.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "text-sm font-bold truncate",
                      selectedDay.day === day.day ? "text-[#3A5A40]" : "text-[#344E41]"
                    )}>
                      {day.title}
                    </p>
                    <p className="text-[10px] opacity-60 truncate">{day.focus}</p>
                  </div>
                  {selectedDay.day === day.day && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-[#E6E1D6] bg-[#FDFBF7]">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E6E1D6] shadow-sm">
              <div className="w-8 h-8 rounded-full bg-[#D4A373] flex items-center justify-center text-white shrink-0">
                <Dumbbell size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">Profe Lojana Sarquis</p>
                <p className="text-[10px] opacity-60">Tu Coach de Glúteos</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative min-w-0 overflow-y-auto">
        {/* Header */}
        <header className="min-h-[72px] border-b border-[#E6E1D6] bg-white/90 backdrop-blur-md flex items-center px-4 sm:px-6 sticky top-0 z-40 py-2">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden mr-3 p-2 hover:bg-[#F3F1ED] rounded-lg text-[#588157]"
          >
            <Menu size={24} />
          </button>
          <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#D4A373] shrink-0" />
              <span className="font-bold text-sm sm:text-base text-[#A3B18A]">Día {selectedDay.day}</span>
            </div>
            <h2 className="font-bold text-base sm:text-lg truncate leading-tight">{selectedDay.title}</h2>
          </div>
          <div className="ml-2 shrink-0">
            <button 
              onClick={() => toggleDayCompletion(selectedDay.day)}
              className={cn(
                "flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95",
                completedDays.includes(selectedDay.day)
                  ? "bg-[#A3B18A] text-white"
                  : "bg-[#3A5A40] text-white hover:bg-[#344E41]"
              )}
            >
              {completedDays.includes(selectedDay.day) ? (
                <><CheckCircle2 size={16} className="sm:w-[18px] sm:h-[18px]" /> <span className="hidden xs:inline">Completado</span><span className="xs:hidden">Listo</span></>
              ) : (
                <><span className="hidden xs:inline">Marcar Completado</span><span className="xs:hidden">Completar</span></>
              )}
            </button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto w-full p-4 sm:p-8 space-y-6 sm:space-y-10">
          {/* Video Player Section */}
          <section className="space-y-4">
            <div className="aspect-video w-full bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl relative border-2 sm:border-4 border-white">
              {getEmbedUrl(selectedDay.exercises[0]?.videoUrl) ? (
                <iframe
                  src={getEmbedUrl(selectedDay.exercises[0]?.videoUrl)!}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/40 gap-4">
                  <Play size={48} className="sm:w-16 sm:h-16" />
                  <p className="font-medium text-sm sm:text-base">Video no disponible</p>
                </div>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 bg-[#A3B18A]/10 px-3 py-1.5 rounded-full text-[#3A5A40] font-bold">
                <Clock size={14} />
                <span>~25 min</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#D4A373]/10 px-3 py-1.5 rounded-full text-[#D4A373] font-bold">
                <Trophy size={14} />
                <span>Nivel Intermedio</span>
              </div>
            </div>
          </section>

          {/* Class Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              <section className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                  <Info size={22} className="text-[#A3B18A] shrink-0" />
                  Sobre esta clase
                </h3>
                <p className="text-[#344E41]/80 leading-relaxed text-base sm:text-lg">
                  {selectedDay.focus} En esta sesión nos enfocaremos en la técnica correcta para maximizar la activación muscular sin riesgo de lesiones.
                </p>
                
                <div className="bg-[#F3F1ED] p-5 sm:p-6 rounded-2xl border border-[#E6E1D6]">
                  <h4 className="font-bold mb-2 flex items-center gap-2 text-[#D4A373]">
                    <Sparkles size={18} className="shrink-0" />
                    Tip de la Coach
                  </h4>
                  <p className="italic text-[#344E41]/70 text-sm sm:text-base">"{selectedDay.tip}"</p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Rutina de Ejercicios</h3>
                <div className="space-y-3">
                  {selectedDay.exercises.map((ex, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between p-4 sm:p-5 bg-white rounded-2xl border border-[#E6E1D6] hover:border-[#A3B18A] transition-colors shadow-sm group"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center font-bold text-[#A3B18A] border border-[#E6E1D6] text-sm sm:text-base shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-sm sm:text-base">{ex.name}</h5>
                          <p className="text-xs sm:text-sm opacity-60">{ex.reps}</p>
                        </div>
                      </div>
                      {ex.videoUrl && (
                        <a 
                          href={ex.videoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 text-[#A3B18A] hover:bg-[#A3B18A]/10 rounded-lg transition-colors shrink-0"
                          title="Ver video original"
                        >
                          <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Mobile Final Action Button */}
              <div className="lg:hidden pt-4 pb-8">
                <button 
                  onClick={() => toggleDayCompletion(selectedDay.day)}
                  className={cn(
                    "w-full flex items-center justify-center gap-3 p-5 rounded-2xl text-lg font-bold transition-all shadow-lg active:scale-[0.98]",
                    completedDays.includes(selectedDay.day)
                      ? "bg-[#A3B18A] text-white"
                      : "bg-[#3A5A40] text-white"
                  )}
                >
                  {completedDays.includes(selectedDay.day) ? (
                    <><CheckCircle2 size={24} /> ¡Clase Completada!</>
                  ) : (
                    "Finalizar Clase de Hoy"
                  )}
                </button>
              </div>
            </div>

            {/* Sidebar Stats/Info */}
            <aside className="space-y-6 pb-10 sm:pb-0">
              <div className="bg-[#3A5A40] text-white p-6 rounded-3xl shadow-lg space-y-4">
                <h4 className="font-bold text-lg">Tu Desafío</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-80">Días completados</span>
                    <span className="font-bold">{completedDays.length}/30</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#D4A373]" 
                      style={{ width: `${(completedDays.length / 30) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs opacity-70 leading-relaxed">
                    ¡Vas por excelente camino! La constancia es la clave para ver resultados reales en tus glúteos.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E6E1D6] p-6 rounded-3xl space-y-4">
                <h4 className="font-bold">Material Necesario</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#A3B18A]" />
                    Mat de Yoga
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#A3B18A]" />
                    Bandas de resistencia
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#A3B18A]" />
                    Botella de agua
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
