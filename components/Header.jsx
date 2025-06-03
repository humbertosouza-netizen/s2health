import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header({ currentStep }) {
  return (
    <header className="bg-white shadow-sm border-b border-secondary/20 relative overflow-hidden">
      {/* Efeito de fundo sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-white to-surface opacity-50" />
      
      <div className="container mx-auto px-4 py-8 relative">
        {/* Logo centralizada */}
        <div className="flex justify-center mb-6">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100 
            }}
          >
            {/* Efeito de brilho atrás da logo */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20 rounded-2xl blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Container da logo com efeito */}
            <motion.div 
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-secondary/10"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(44, 130, 112, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/s2health-logo.png"
                alt="S2HEALTH - Cuidado que conecta"
                width={280}
                height={84}
                className="h-20 w-auto object-contain filter drop-shadow-sm"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Indicador de Progresso centralizado */}
        <motion.div 
          className="flex items-center justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-sm text-text/60 font-medium hidden sm:block">
            Etapa {currentStep} de 5
          </span>
          
          {/* Barra de progresso */}
          <div className="flex items-center space-x-2 bg-card/50 rounded-full px-4 py-2 backdrop-blur-sm">
            {[1, 2, 3, 4, 5].map((step) => (
              <motion.div
                key={step}
                className={`relative ${
                  step <= currentStep
                    ? 'w-8 h-4 bg-gradient-to-r from-primary to-secondary'
                    : 'w-4 h-4 bg-card border border-secondary/30'
                } rounded-full overflow-hidden`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: step === currentStep ? 1.2 : 1,
                  opacity: 1
                }}
                transition={{ duration: 0.4, delay: step * 0.1 }}
              >
                {step <= currentStep && (
                  <motion.div
                    className="absolute inset-0 bg-white/30 rounded-full"
                    animate={{ 
                      x: ['-100%', '100%']
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
                
                {step === currentStep && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full blur-sm"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          <span className="text-xs text-text/50 hidden md:block">
            {currentStep === 5 ? 'Finalizado' : 'Em andamento'}
          </span>
        </motion.div>

        {/* Linha decorativa */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
        </motion.div>
      </div>
    </header>
  );
}