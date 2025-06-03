import { motion } from 'framer-motion';

export default function Step3({ onNext }) {
  const features = [
    { icon: '📱', text: 'QR Code exclusivo' },
    { icon: '🩺', text: 'Telemedicina 24h' },
    { icon: '📊', text: 'Relatórios inteligentes para o RH' },
    { icon: '👥', text: 'Acesso para familiares e dependentes' },
    { icon: '💰', text: 'Modelo com cashback' }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 md:py-20">
      {/* História da origem */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-text leading-relaxed mb-8">
          Foi daí que nasceu a S2HEALTH.
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl font-light text-text/80">
            Eu só queria que o cuidado fosse simples.
          </p>
          <p className="text-lg md:text-xl font-light text-text/80">
            Que não dependesse de fila, nem de burocracia, nem de sorte.
          </p>
        </motion.div>
      </motion.div>

      {/* Grid de features com animação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-card hover:bg-secondary/20 transition-colors duration-300"
            >
              <motion.div
                className="text-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              >
                {feature.icon}
              </motion.div>
              <div className="flex items-center">
                <motion.div
                  className="w-2 h-2 bg-primary rounded-full mr-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                />
                <span className="text-text font-medium text-sm md:text-base">
                  {feature.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Botão para continuar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="text-center"
      >
        <button
          onClick={onNext}
          className="btn-primary text-lg px-8 py-4"
        >
          Parece algo que faria sentido aqui
        </button>
      </motion.div>

      {/* Elemento visual de conexão */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="flex justify-center mt-16"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-ping" />
        </div>
      </motion.div>
    </div>
  );
} 