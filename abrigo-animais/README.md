
# Abrigo de Animais 🐾

**Autor:** Cleyton Antenor  

Este projeto é um desafio de programação em JavaScript para organizar a adoção de animais em um abrigo.  

---

## 📌 Descrição

O objetivo é distribuir animais para pessoas com base nos brinquedos que elas possuem, seguindo regras específicas:

- O animal vai para a pessoa que mostrar todos os brinquedos favoritos na ordem desejada.  
- Gatos exigem sequência **contígua** de brinquedos; se ambos tiverem, vai para o abrigo.  
- Uma pessoa não pode adotar mais de **3 animais**.  
- Loco (jabuti) ignora a ordem dos brinquedos, mas só vai se houver outro animal como companhia.  
- Se houver duplicidade de animais ou brinquedos inválidos, o programa retorna o animal ou brinquedo como inválido.  

---

## 🐶 Animais e brinquedos

| Animal | Tipo  | Brinquedos favoritos       |
|--------|-------|---------------------------|
| Rex    | Cão   | RATO, BOLA                |
| Mimi   | Gato  | BOLA, LASER               |
| Fofo   | Gato  | BOLA, RATO, LASER         |
| Zero   | Gato  | RATO, BOLA                |
| Bola   | Cão   | CAIXA, NOVELO             |
| Bebe   | Cão   | LASER, RATO, BOLA         |
| Loco   | Jabuti| SKATE, RATO               |

---

## ⚡ Tecnologias

- JavaScript (Node.js)
- Jest (para testes unitários)

---

## 🚀 Como usar

1. Clone ou baixe o projeto.
2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`
3. Execute os testes:
\`\`\`bash
npm test
\`\`\`

---

## ✅ Estrutura do projeto

```
abrigo-animais/
│
├─ package.json
└─ src/
   ├─ abrigo-animais.js
   └─ abrigo-animais.test.js
```

---

### Autor
Cleyton Antenor  
Desenvolvedor Front-end em transição de carreira  
