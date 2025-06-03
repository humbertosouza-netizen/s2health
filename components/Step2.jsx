import { motion } from 'framer-motion';

export default function Step2({ choice, onNext }) {
  const getResponseContent = () => {
    switch (choice) {
      case 1:
        return {
          title: "Eu também. E por muito tempo achei que isso era normal.",
          subtitle: "Até perceber que a ausência de cuidado gera mais do que dor — ela desconecta."
        };
      case 2:
        return {
          title: "Ver alguém indo embora mais cedo, atrasando entregas ou faltando sem explicação...",
          subtitle: "Às vezes, não é desorganização. É só falta de suporte."
        };
      case 3:
        return {
          title: "Tudo bem. Às vezes, a gente só percebe quando para pra escutar de verdade.",
          subtitle: "Vamos pensar junto?"
        };
      default:
        return {
          title: "Obrigado por compartilhar.",
          subtitle: "Vamos continuar essa conversa."
        };
    }
  };

  const content = getResponseContent();

  return (
    <div className="text-center max-w-3xl mx-auto py-12 md:py-20">
      {/* Resposta personalizada */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-text leading-relaxed mb-8">
          {content.title}
        </h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-light text-text/80 mb-12"
        >
          {content.subtitle}
        </motion.h2>
      </motion.div>

      {/* Botão para continuar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="btn-primary text-lg px-8 py-4"
        >
          Quero entender melhor o que podemos mudar
        </button>
      </motion.div>

      {/* Elemento decorativo sutil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="mt-16 flex justify-center"
      >
        <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
      </motion.div>
    </div>
  );
} 