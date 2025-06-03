import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

export default function LandingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userChoice, setUserChoice] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: ''
  });

  // Transições suaves entre as etapas
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 50,
      scale: 0.95
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -50,
      scale: 0.95
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.6
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleChoice = (choice) => {
    setUserChoice(choice);
    // Pequeno delay para mostrar a seleção antes de avançar
    setTimeout(() => {
      nextStep();
    }, 800);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    nextStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onChoice={handleChoice} />;
      case 2:
        return <Step2 choice={userChoice} onNext={nextStep} />;
      case 3:
        return <Step3 onNext={nextStep} />;
      case 4:
        return <Step4 onSubmit={handleFormSubmit} />;
      case 5:
        return <Step5 userChoice={userChoice} formData={formData} />;
      default:
        return <Step1 onChoice={handleChoice} />;
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header currentStep={currentStep} />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="max-w-4xl mx-auto"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
} 