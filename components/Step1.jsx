import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Step1({ onChoice }) {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const choices = [
    { id: 1, text: 'Já senti isso na pele' },
    { id: 2, text: 'Já vi acontecer com alguém da equipe' },
    { id: 3, text: 'Nunca pensei sobre isso' }
  ];

  const handleChoice = (choiceId) => {
    setSelectedChoice(choiceId);
    // Aguarda um pouco para mostrar a seleção antes de chamar onChoice
    setTimeout(() => {
      onChoice(choiceId);
    }, 300);
  };

  return (
    <div className="text-center max-w-3xl mx-auto py-12 md:py-20">
      {/* Texto principal com animação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-text leading-relaxed mb-8">
          Um segredo: nem todo mundo que falta ao trabalho está doente.
        </h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl font-light text-text/80 mb-12"
        >
          Às vezes, só estão cansados de não serem cuidados.
        </motion.h2>
      </motion.div>

      {/* Pergunta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mb-10"
      >
        <h3 className="text-lg md:text-xl text-text font-medium mb-8">
          Você já se sentiu assim? Ou viu isso acontecer na sua empresa?
        </h3>
      </motion.div>

      {/* Opções de escolha */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="space-y-4 max-w-2xl mx-auto"
      >
        {choices.map((choice, index) => (
          <motion.button
            key={choice.id}
            onClick={() => handleChoice(choice.id)}
            className={`choice-card w-full text-left p-6 ${
              selectedChoice === choice.id ? 'selected' : ''
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
            whileHover={{ scale: selectedChoice ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedChoice === choice.id 
                  ? 'border-primary bg-primary' 
                  : 'border-secondary'
              }`}>
                {selectedChoice === choice.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                )}
              </div>
              <span className="text-base md:text-lg text-text font-medium">
                {choice.text}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
} 