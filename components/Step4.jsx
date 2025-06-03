import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Step4({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Remove erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Nome da empresa é obrigatório';
    }
    
    if (!formData.employees.trim()) {
      newErrors.employees = 'Número de colaboradores é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simula envio do formulário
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
    }, 1000);
  };

  const inputClass = (fieldName) => 
    `w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-4 ${
      errors[fieldName]
        ? 'border-accent ring-accent/20 bg-accent/5'
        : 'border-secondary/30 focus:border-primary focus:ring-primary/20'
    } bg-white text-text placeholder-text/50`;

  return (
    <div className="max-w-2xl mx-auto py-12 md:py-20">
      {/* Título e introdução */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-text leading-relaxed mb-6">
          Me conta rapidinho sobre sua empresa.
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg font-light text-text/80"
        >
          Sem compromisso — é só pra entender se o S2 encaixa no seu cenário.
        </motion.p>
      </motion.div>

      {/* Formulário */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            {/* Nome */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass('name')}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-sm mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            {/* E-mail */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                E-mail corporativo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass('email')}
                placeholder="seu.email@empresa.com"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Empresa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.6 }}
            >
              <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                Nome da empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClass('company')}
                placeholder="Sua empresa"
              />
              {errors.company && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-sm mt-1"
                >
                  {errors.company}
                </motion.p>
              )}
            </motion.div>

            {/* Número de colaboradores */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.8 }}
            >
              <label htmlFor="employees" className="block text-sm font-medium text-text mb-2">
                Quantos colaboradores você quer cuidar?
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className={inputClass('employees')}
              >
                <option value="">Selecione</option>
                <option value="1-10">1 a 10 colaboradores</option>
                <option value="11-50">11 a 50 colaboradores</option>
                <option value="51-100">51 a 100 colaboradores</option>
                <option value="101-500">101 a 500 colaboradores</option>
                <option value="500+">Mais de 500 colaboradores</option>
              </select>
              {errors.employees && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-sm mt-1"
                >
                  {errors.employees}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Botão de envio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-center"
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary text-lg px-8 py-4 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Enviando...</span>
              </div>
            ) : (
              'Quero receber uma proposta personalizada'
            )}
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
} 