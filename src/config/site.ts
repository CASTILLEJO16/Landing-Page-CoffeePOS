// ============================================================
//  CONFIGURACIÓN DE LA LANDING — edita aquí precios y contacto
// ============================================================

// Número con lada de país, sin espacios ni "+" (mismo que tu portafolio).
const WHATSAPP_NUMBER = '526642577071';
const WHATSAPP_MESSAGE = 'Hola, me interesa una demo de Coffee POS';

export const site = {
  name: 'Coffee POS',
  // TODO: cambia por la URL real cuando la publiques en Vercel (sin "/" al final).
  url: 'https://coffeepos-landing.vercel.app',
  title: 'Coffee POS | Punto de venta para cafeterías en Tijuana',
  description:
    'Cobra más rápido, conoce lo que más vendes y haz que tus clientes regresen. Sistema de punto de venta para cafeterías, con instalación y soporte en Tijuana. Primer mes gratis.',
  ogImage: '/og.png',

  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  whatsappDisplay: '+52 664 257 7071',
  email: 'alejandrocastillejo16@gmail.com',

  author: 'Lennyn Alejandro Castillejo',
  authorBio: 'Ingeniero en Sistemas Computacionales egresado del Instituto Tecnológico de Tijuana.',
  authorUrl: 'https://lennyn-castillejo.vercel.app',
};

// Un solo plan con todo lo que incluye el sistema.
export const plan = {
  name: 'Plan Completo',
  price: '600', // precio mensual en pesos
  currency: 'MXN',
  period: 'mes',
  badges: ['Primer mes gratis', 'Sin pago inicial'],
  includes: [
    'Caja y cobro rápido',
    'Personalizaciones de bebidas (leches, extras y tamaños)',
    'Usuarios administrador y vendedor',
    'Úsalo en tablet, computadora o celular',
    'Instalación y capacitación en persona',
    'Soporte por WhatsApp',
  ],
  note: 'Sin contratos forzosos.', // TODO: confirma que esto aplica a tus condiciones
};

// Preguntas frecuentes. Las respuestas son BORRADOR: revísalas y quita el "TODO:".
export const faqs = [
  {
    q: '¿Necesito internet?',
    a: 'TODO: Sí, Coffee POS funciona en línea, así que necesitas conexión a internet en tu cafetería. Con el internet normal de un negocio es suficiente.',
  },
  {
    q: '¿Qué equipo necesito?',
    a: 'TODO: Cualquier tablet, computadora o celular con navegador (Chrome, Safari o Edge). Si ya tienes uno, puedes usarlo. Te asesoramos si necesitas impresora de tickets.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'TODO: Sí. No hay plazo forzoso: si un mes decides no continuar, simplemente no renuevas.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'TODO: Tu información se guarda en la nube con respaldo, y cada usuario entra con su propia cuenta. Tus datos son tuyos y nunca se comparten con nadie.',
  },
  {
    q: '¿Cuánto tarda la instalación?',
    a: 'TODO: Normalmente lo dejamos listo en una visita: cargamos tu menú, creamos los usuarios y capacitamos a tu equipo.',
  },
];
