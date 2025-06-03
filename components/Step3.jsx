import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Step3({ onNext, onPrevious }) {
  const features = [
    { icon: '📱', text: 'QR Code exclusivo' },
    { icon: '🩺', text: 'Telemedicina 24h' },
    { icon: '📊', text: 'Relatórios inteligentes para o RH' },
    { icon: '👥', text: 'Acesso para familiares e dependentes' },
    { icon: '💰', text: 'Modelo com cashback' }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 md:py-20">
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

      {/* Seção principal com o garoto propaganda */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        
        {/* Lado esquerdo - Garoto propaganda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          {/* Container da imagem com efeitos */}
          <div className="relative">
            {/* Efeito de fundo */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-secondary/15 to-primary/10 rounded-3xl blur-2xl"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Imagem do garoto propaganda */}
            <motion.div 
              className="relative bg-white rounded-2xl p-6 shadow-xl border border-secondary/20 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/garoto-propaganda.png"
                alt="Representante S2HEALTH"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
              
              {/* Overlay com quote */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-text font-medium text-lg italic">
                  "Cuidar da sua equipe nunca foi tão simples!"
                </p>
                <p className="text-primary text-sm font-semibold mt-2">
                  — Equipe S2HEALTH
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Lado direito - Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-secondary/10">
            <h3 className="text-xl font-semibold text-text mb-6 text-center">
              Nossa solução completa:
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-card hover:bg-secondary/20 transition-all duration-300 group"
                >
                  <motion.div
                    className="text-2xl group-hover:scale-110 transition-transform duration-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <div className="flex items-center flex-1">
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                    />
                    <span className="text-text font-medium text-base group-hover:text-primary transition-colors duration-300">
                      {feature.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Botão para continuar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="text-center space-y-4"
      >
        {/* Botão de voltar */}
        <motion.button
          onClick={onPrevious}
          className="mr-4 px-6 py-3 text-text/70 border border-text/20 rounded-xl hover:bg-card hover:border-secondary/40 transition-all duration-300 text-sm font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Voltar
        </motion.button>

        <button
          onClick={onNext}
          className="btn-primary text-lg px-10 py-5 relative overflow-hidden group"
        >
          <span className="relative z-10">Parece algo que faria sentido aqui</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
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