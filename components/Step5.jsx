import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Step5({ userChoice, formData, onPrevious }) {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // Função para gerar a mensagem do WhatsApp
  const generateWhatsAppMessage = () => {
    const choiceTexts = {
      1: 'Já senti isso na pele',
      2: 'Já vi acontecer com alguém da equipe', 
      3: 'Nunca pensei sobre isso'
    };

    const message = `Olá S2HEALTH! 👋

Acabei de preencher o formulário na landing page e gostaria de conversar sobre a solução.

*INFORMAÇÕES COLETADAS:*

📋 *Dados da Empresa:*
• Nome: ${formData?.name || 'Não informado'}
• E-mail: ${formData?.email || 'Não informado'}
• Empresa: ${formData?.company || 'Não informado'}
• Colaboradores: ${formData?.employees || 'Não informado'}

💭 *Experiência com o tema:*
"${choiceTexts[userChoice] || 'Não informado'}"

✨ *Interesse:*
Quero entender melhor como a S2HEALTH pode ajudar nossa empresa a cuidar melhor da equipe.

Podemos conversar? 😊`;

    return encodeURIComponent(message);
  };

  // Função para redirecionar para o WhatsApp
  const redirectToWhatsApp = () => {
    const phoneNumber = '5521983797384'; // 55 21 98379-7384
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Mostrar botão do WhatsApp após algumas animações
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 4000); // 4 segundos após carregar a página

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 md:py-24 text-center relative">
      {/* Mensagem principal de agradecimento */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-text leading-relaxed mb-8">
          Obrigado por dedicar esse tempo.
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-text/80 mb-6"
        >
          Só de estar aqui já mostra que você se importa com sua equipe.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl font-light text-text/80 mb-12"
        >
          Às vezes, grandes mudanças começam com perguntas simples.
        </motion.p>
      </motion.div>

      {/* Card central com a mensagem de conexão */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 relative overflow-hidden"
      >
        {/* Garoto propaganda sutil no fundo */}
        <motion.div 
          className="absolute top-4 right-4 w-20 h-20 rounded-full overflow-hidden opacity-10 border-2 border-primary/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Image
            src="/garoto-propaganda.png"
            alt="S2HEALTH Team"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="space-y-6 relative z-10"
        >
          <p className="text-lg md:text-xl font-light text-text/80">
            Se quiser conversar mais a fundo, estou por aqui.
          </p>
          <p className="text-lg md:text-xl font-light text-text/80">
            Sem venda. Só troca.
          </p>
        </motion.div>
      </motion.div>

      {/* Botão do WhatsApp */}
      {showWhatsApp && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-6 relative overflow-hidden">
            {/* Avatar do garoto propaganda no botão WhatsApp */}
            <motion.div 
              className="absolute top-4 left-4 w-12 h-12 rounded-full overflow-hidden border-2 border-white/30"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/garoto-propaganda.png"
                alt="S2HEALTH Representative"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h3 className="text-white text-xl font-semibold mb-4 ml-16">
              Vamos conversar agora? 💬
            </h3>
            <p className="text-white/90 mb-6">
              Suas informações já foram organizadas. É só clicar abaixo para iniciar nossa conversa no WhatsApp!
            </p>
            
            <button
              onClick={redirectToWhatsApp}
              className="bg-white text-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center mx-auto space-x-3"
            >
              <span className="text-2xl">📱</span>
              <span>Conversar no WhatsApp</span>
            </button>
          </div>
          
          <p className="text-sm text-text/60">
            Suas informações serão enviadas automaticamente para facilitar nossa conversa
          </p>
        </motion.div>
      )}

      {/* Assinatura da equipe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="mb-16 space-y-4"
      >
        {/* Botão de voltar discreto */}
        <motion.button
          onClick={onPrevious}
          className="px-4 py-2 text-text/50 text-sm hover:text-text/80 transition-colors duration-300 border border-text/10 rounded-lg hover:border-text/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Voltar para ajustar dados
        </motion.button>

        <p className="text-lg font-medium text-text italic">
          – Equipe S2HEALTH
        </p>
      </motion.div>

      {/* Elementos visuais de conclusão */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="flex justify-center items-center space-x-4 mb-12"
      >
        <div className="w-8 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
          <motion.div
            className="w-6 h-6 bg-white rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>

      {/* Informações de contato sutis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        className="bg-card rounded-xl p-6 max-w-md mx-auto"
      >
        <p className="text-sm text-text/60 mb-2">
          Nossa equipe está pronta para apresentar uma proposta personalizada.
        </p>
        <p className="text-xs text-text/40">
          📞 WhatsApp: +55 21 98379-7384
        </p>
      </motion.div>

      {/* Animação final sutil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
        className="mt-16 flex justify-center"
      >
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary/30 rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
} 