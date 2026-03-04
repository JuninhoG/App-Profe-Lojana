/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Exercise {
  name: string;
  reps: string;
  videoUrl?: string;
  description?: string;
}

export interface DayRoutine {
  day: number;
  title: string;
  focus: string;
  exercises: Exercise[];
  tip: string;
}

export const CHALLENGE_DATA: DayRoutine[] = [
  {
    day: 1,
    title: "Activación y Fuego",
    focus: "Despertar los glúteos con ejercicios de aislamiento.",
    exercises: [
      {
        name: "Puente de glúteo a una pierna",
        reps: "3 series de 15 reps por pierna",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing"
      },
      {
        name: "Clamshells (Almejas)",
        reps: "3 series de 20 reps por lado",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing" // Reusing for demo
      }
    ],
    tip: "Recuerda apretar el glúteo al subir y mantener la espalda neutra."
  },
  {
    day: 2,
    title: "Enfoque Lateral",
    focus: "Trabajar el glúteo medio para dar forma redondeada.",
    exercises: [
      {
        name: "Abducción de cadera lateral",
        reps: "3 series de 20 reps",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing"
      },
      {
        name: "Fire Hydrants (Bocas de incendio)",
        reps: "3 series de 15 reps",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing"
      }
    ],
    tip: "Mantén la cadera estable, no permitas que el torso gire."
  },
  {
    day: 3,
    title: "Potencia y Empuje",
    focus: "Ejercicios compuestos para fuerza máxima.",
    exercises: [
      {
        name: "Sentadilla Sumo",
        reps: "4 series de 12 reps",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing"
      },
      {
        name: "Zancadas hacia atrás",
        reps: "3 series de 12 reps por pierna",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing"
      }
    ],
    tip: "Empuja con el talón al subir para activar más el glúteo."
  },
  {
    day: 4,
    title: "Descanso Activo",
    focus: "Recuperación y movilidad.",
    exercises: [
      {
        name: "Estiramiento Paloma",
        reps: "2 min por lado",
        description: "Estiramiento profundo de glúteo."
      },
      {
        name: "Caminata suave",
        reps: "20 minutos",
        description: "Mantén el cuerpo en movimiento."
      }
    ],
    tip: "La recuperación es tan importante como el entrenamiento."
  },
  {
    day: 5,
    title: "Glúteo Mayor",
    focus: "Hipertrofia del músculo más grande.",
    exercises: [
      {
        name: "Hip Thrust (Empuje de cadera)",
        reps: "4 series de 15 reps",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing"
      },
      {
        name: "Patada de glúteo",
        reps: "3 series de 20 reps",
        videoUrl: "https://drive.google.com/file/d/1gOtJ8V5VYB57pH8ALFozQb56ybfY7p86/view?usp=sharing"
      }
    ],
    tip: "Haz una pausa de 1 segundo arriba apretando fuerte."
  },
  {
    day: 6,
    title: "Circuito Metabólico",
    focus: "Quema de grasa y resistencia muscular.",
    exercises: [
      { name: "Jumping Jacks", reps: "45 segundos" },
      { name: "Sentadillas con salto", reps: "15 reps" },
      { name: "Mountain Climbers", reps: "45 segundos" },
      { name: "Estocadas laterales", reps: "12 reps por lado" }
    ],
    tip: "Mantén el ritmo constante, ¡no te detengas!"
  },
  {
    day: 7,
    title: "Estiramiento y Relax",
    focus: "Recuperación total.",
    exercises: [
      { name: "Postura del niño", reps: "3 minutos" },
      { name: "Estiramiento de isquios", reps: "2 minutos por pierna" }
    ],
    tip: "Respira profundo y relaja cada músculo."
  },
  {
    day: 8,
    title: "Fuerza Unilateral",
    focus: "Corregir desequilibrios musculares.",
    exercises: [
      { name: "Peso muerto rumano a una pierna", reps: "3 series de 12 reps" },
      { name: "Step up (Subida al cajón/silla)", reps: "3 series de 15 reps" }
    ],
    tip: "Encuentra un punto fijo para mantener el equilibrio."
  },
  {
    day: 9,
    title: "Glúteo Medio y Mínimo",
    focus: "Estabilidad de cadera.",
    exercises: [
      { name: "Monster Walk (Caminata lateral)", reps: "3 series de 20 pasos" },
      { name: "Abducción sentado", reps: "3 series de 30 reps" }
    ],
    tip: "Si tienes banda elástica, úsala arriba de las rodillas."
  },
  {
    day: 10,
    title: "Reto de Resistencia",
    focus: "Soportar la fatiga.",
    exercises: [
      { name: "Sentadilla isométrica (Wall sit)", reps: "3 series de 1 min" },
      { name: "Puente de glúteo", reps: "1 serie de 100 reps" }
    ],
    tip: "La mente se rinde antes que el cuerpo. ¡Tú puedes!"
  },
  {
    day: 11,
    title: "Explosividad",
    focus: "Fibras rápidas.",
    exercises: [
      { name: "Box Jumps (o saltos al aire)", reps: "4 series de 10 reps" },
      { name: "Burpees", reps: "3 series de 12 reps" }
    ],
    tip: "Aterriza suavemente con las rodillas flexionadas."
  },
  {
    day: 12,
    title: "Descanso Activo",
    focus: "Movilidad de cadera.",
    exercises: [
      { name: "90/90 Hip Switch", reps: "20 cambios" },
      { name: "Cat-Cow", reps: "15 repeticiones" }
    ],
    tip: "Muévete con fluidez y sin dolor."
  },
  {
    day: 13,
    title: "Volumen de Glúteo",
    focus: "Aumento de masa muscular.",
    exercises: [
      { name: "Sentadilla Búlgara", reps: "3 series de 10 reps por pierna" },
      { name: "Frog Pumps", reps: "3 series de 30 reps" }
    ],
    tip: "Inclina el torso ligeramente hacia adelante en la búlgara."
  },
  {
    day: 14,
    title: "Core y Glúteo",
    focus: "Estabilidad central.",
    exercises: [
      { name: "Plancha con elevación de pierna", reps: "3 series de 12 reps" },
      { name: "Deadbug", reps: "3 series de 15 reps" }
    ],
    tip: "Mantén la zona lumbar pegada al suelo."
  },
  {
    day: 15,
    title: "Evaluación Mitad de Camino",
    focus: "Máximo esfuerzo.",
    exercises: [
      { name: "Sentadillas", reps: "Máximas reps en 2 min" },
      { name: "Puentes de glúteo", reps: "Máximas reps en 2 min" }
    ],
    tip: "Anota tus números para compararlos al final."
  },
  {
    day: 16,
    title: "Recuperación",
    focus: "Yoga para glúteos.",
    exercises: [
      { name: "Perro boca abajo", reps: "2 minutos" },
      { name: "Estiramiento de glúteo sentado", reps: "2 minutos por lado" }
    ],
    tip: "Disfruta el estiramiento, no fuerces la posición."
  },
  {
    day: 17,
    title: "Potencia Lateral",
    focus: "Movimientos en plano frontal.",
    exercises: [
      { name: "Curtsy Lunges (Zancada cruzada)", reps: "3 series de 15 reps" },
      { name: "Saltos laterales (Skater jumps)", reps: "3 series de 20 reps" }
    ],
    tip: "Mantén el pecho arriba y la espalda recta."
  },
  {
    day: 18,
    title: "Aislamiento Profundo",
    focus: "Conexión mente-músculo.",
    exercises: [
      { name: "Donkey Kicks con pausa", reps: "4 series de 15 reps" },
      { name: "Abducciones en cuadrupedia", reps: "3 series de 20 reps" }
    ],
    tip: "Visualiza el músculo que estás trabajando."
  },
  {
    day: 19,
    title: "Fuerza de Cadena Posterior",
    focus: "Glúteos e isquios.",
    exercises: [
      { name: "Good Mornings (Buenos días)", reps: "3 series de 15 reps" },
      { name: "Peso muerto rumano", reps: "4 series de 12 reps" }
    ],
    tip: "Lleva la cadera hacia atrás, no dobles las rodillas en exceso."
  },
  {
    day: 20,
    title: "HIIT Glúteos",
    focus: "Alta intensidad.",
    exercises: [
      { name: "Tuck Jumps", reps: "30 seg trabajo / 30 seg descanso" },
      { name: "Split Jumps", reps: "30 seg trabajo / 30 seg descanso" }
    ],
    tip: "Da tu 100% en cada intervalo de trabajo."
  },
  {
    day: 21,
    title: "Descanso Activo",
    focus: "Caminata larga.",
    exercises: [
      { name: "Caminata a ritmo ligero", reps: "45 minutos" }
    ],
    tip: "Aprovecha para escuchar un podcast o música motivadora."
  },
  {
    day: 22,
    title: "Super Series",
    focus: "Sin descanso entre ejercicios.",
    exercises: [
      { name: "Sentadilla + Zancada", reps: "3 series de 12 combos" },
      { name: "Puente + Abducción", reps: "3 series de 15 combos" }
    ],
    tip: "Controla el movimiento, no uses la inercia."
  },
  {
    day: 23,
    title: "Glúteo Esculpido",
    focus: "Detalle y definición.",
    exercises: [
      { name: "Rainbows (Arcoíris)", reps: "3 series de 20 reps" },
      { name: "Círculos con pierna estirada", reps: "3 series de 15 reps" }
    ],
    tip: "Dibuja un arco grande con la punta del pie."
  },
  {
    day: 24,
    title: "Fuerza Explosiva II",
    focus: "Saltos y potencia.",
    exercises: [
      { name: "Broad Jumps (Salto de longitud)", reps: "10 saltos" },
      { name: "Power Lunges", reps: "3 series de 12 reps" }
    ],
    tip: "Usa tus brazos para impulsarte."
  },
  {
    day: 25,
    title: "Resistencia Final",
    focus: "Fatiga acumulada.",
    exercises: [
      { name: "Sentadilla con pulso", reps: "3 series de 45 segundos" },
      { name: "Puente con pulso", reps: "3 series de 45 segundos" }
    ],
    tip: "Mantente en el rango de movimiento más difícil."
  },
  {
    day: 26,
    title: "Movilidad y Flujo",
    focus: "Cuerpo flexible.",
    exercises: [
      { name: "World's Greatest Stretch", reps: "10 reps por lado" },
      { name: "Cossack Squats", reps: "12 reps alternas" }
    ],
    tip: "Baja hasta donde tu flexibilidad te lo permita."
  },
  {
    day: 27,
    title: "Glúteo Total",
    focus: "Todos los ángulos.",
    exercises: [
      { name: "Sentadilla lateral", reps: "3 series de 15 reps" },
      { name: "Zancada diagonal", reps: "3 series de 15 reps" }
    ],
    tip: "Siente el trabajo en la parte externa del glúteo."
  },
  {
    day: 28,
    title: "Potencia Máxima",
    focus: "Último empuje de fuerza.",
    exercises: [
      { name: "Hip Thrust a una pierna", reps: "3 series de 12 reps" },
      { name: "Sentadilla con salto 180°", reps: "3 series de 10 reps" }
    ],
    tip: "¡Ya casi lo tienes! No bajes la intensidad."
  },
  {
    day: 29,
    title: "Pre-Final Burn",
    focus: "Agotamiento muscular.",
    exercises: [
      { name: "Clamshells", reps: "50 reps por lado" },
      { name: "Patadas laterales", reps: "50 reps por lado" }
    ],
    tip: "El ardor es señal de que estás progresando."
  },
  {
    day: 30,
    title: "Celebración y Victoria",
    focus: "Prueba final.",
    exercises: [
      { name: "Sentadillas", reps: "Máximas reps en 3 min" },
      { name: "Puentes de glúteo", reps: "Máximas reps en 3 min" }
    ],
    tip: "¡FELICIDADES! Has completado el desafío. Mira tus fotos del día 1 y compáralas."
  }
];

// Helper to get routine by day
export const getRoutineByDay = (day: number): DayRoutine | undefined => {
  return CHALLENGE_DATA.find(r => r.day === day);
};
