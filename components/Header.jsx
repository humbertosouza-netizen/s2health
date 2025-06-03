import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header({ currentStep }) {
  return (
    <header className="bg-white shadow-sm border-b border-secondary/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/s2health-logo.png"
              alt="S2HEALTH - Cuidado que conecta"
              width={240}
              height={72}
              className="h-16 w-auto object-contain md:h-18"
              priority
            />
          </motion.div>

          {/* Indicador de Progresso */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-text/60 mr-4 hidden sm:block font-medium">
              Etapa {currentStep} de 5
            </span>
            {[1, 2, 3, 4, 5].map((step) => (
              <motion.div
                key={step}
                className={`w-4 h-4 rounded-full ${
                  step <= currentStep
                    ? 'bg-primary'
                    : 'bg-card border border-secondary/30'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: step === currentStep ? 1.3 : 1,
                  backgroundColor: step <= currentStep ? '#2C8270' : '#E0F2EC'
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
} 