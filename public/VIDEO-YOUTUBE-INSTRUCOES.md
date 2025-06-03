# 🎥 Instrução: Configurar Vídeo do YouTube

## 🎯 **O que fazer:**

1. **Faça upload** do seu vídeo de apresentação da S2HEALTH no YouTube
2. **Copie o ID** do vídeo (parte após `/watch?v=` na URL)
3. **Substitua** no arquivo `components/Step3.jsx`

## 📝 **Como pegar o ID do vídeo:**

### **URL do YouTube:**
```
https://www.youtube.com/watch?v=ABC123XYZ
```

### **ID do vídeo:**
```
ABC123XYZ
```

## 🔧 **Onde alterar:**

**Arquivo**: `components/Step3.jsx`  
**Linha**: ~65 (aproximadamente)

**Trocar isto:**
```javascript
src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0"
```

**Por isto (com seu ID):**
```javascript
src="https://www.youtube.com/embed/SEU_ID_AQUI?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0"
```

## ⚙️ **Parâmetros configurados:**

- `rel=0` - Remove vídeos relacionados do final
- `modestbranding=1` - Remove logo do YouTube
- `showinfo=0` - Remove informações extras
- `controls=1` - Mantém controles do player
- `autoplay=0` - Não reproduz automaticamente

## 🎨 **Características do player:**

### **Design:**
- ✅ Totalmente responsivo (16:9)
- ✅ Bordas arredondadas
- ✅ Sombra e efeitos de hover
- ✅ Gradiente animado de fundo

### **Funcionalidades:**
- ✅ Controles nativos do YouTube
- ✅ Fullscreen habilitado
- ✅ Otimizado para mobile
- ✅ Carregamento suave

### **Efeitos visuais:**
- 🌟 Gradiente pulsante atrás do player
- 💫 Hover com escala suave
- 🎭 Indicador de vídeo com ponto vermelho animado
- 📱 Layout responsivo perfeito

## 🚀 **Depois de configurar:**

O Step3 ficará com:
- ✅ Vídeo profissional da S2HEALTH
- ✅ Player elegante e responsivo  
- ✅ Efeitos visuais premium
- ✅ Experiência mais envolvente

## 📱 **Sugestões para o vídeo:**

1. **Duração**: 2-4 minutos ideal
2. **Conteúdo**: Apresentação da solução + depoimentos
3. **Qualidade**: Mínimo 1080p
4. **Áudio**: Claro e profissional
5. **CTA**: Convite para conversar no final

---

*Após configurar o vídeo, a landing page terá muito mais impacto! 🎬* 