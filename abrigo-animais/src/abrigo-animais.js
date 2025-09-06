
function encontraPessoas(p1, p2, animais) {
  const brinquedosP1 = p1.split(',').filter(b => b);
  const brinquedosP2 = p2.split(',').filter(b => b);
  const listaAnimais = animais.split(',').filter(a => a);

  const lista = [];

  const preferencias = {
    Rex: ['RATO', 'BOLA'],
    Mimi: ['BOLA', 'LASER'],
    Fofo: ['BOLA', 'RATO', 'LASER'],
    Zero: ['RATO', 'BOLA'],
    Bola: ['CAIXA', 'NOVELO'],
    Bebe: ['LASER', 'RATO', 'BOLA'],
    Loco: ['SKATE', 'RATO'],
  };

  const adotadosP1 = [];
  const adotadosP2 = [];

  function contemSequenciaContigua(seq, brinquedosPessoa) {
    for (let i = 0; i <= brinquedosPessoa.length - seq.length; i++) {
      if (seq.every((b, j) => brinquedosPessoa[i + j] === b)) return true;
    }
    return false;
  }

  function podeAdotar(animal, brinquedosPessoa, pessoa) {
    const brinquedosAnimal = preferencias[animal];
    if (!brinquedosAnimal) return false;

    if (['Mimi','Fofo','Zero'].includes(animal)) {
      return contemSequenciaContigua(brinquedosAnimal, brinquedosPessoa);
    }

    if (animal === 'Loco') {
      return brinquedosAnimal.every(b => brinquedosPessoa.includes(b));
    }

    let idx = -1;
    for (const brinquedo of brinquedosAnimal) {
      idx = brinquedosPessoa.indexOf(brinquedo, idx + 1);
      if (idx === -1) return false;
    }
    return true;
  }

  for (const animal of listaAnimais) {
    if (lista.some(l => l.startsWith(animal + ' - '))) {
      lista.push(`${animal} - abrigo`);
      continue;
    }

    const p1Pode = podeAdotar(animal, brinquedosP1, 1);
    const p2Pode = podeAdotar(animal, brinquedosP2, 2);

    if (p1Pode && p2Pode) lista.push(`${animal} - abrigo`);
    else if (p1Pode) { lista.push(`${animal} - pessoa 1`); adotadosP1.push(animal); }
    else if (p2Pode) { lista.push(`${animal} - pessoa 2`); adotadosP2.push(animal); }
    else lista.push(`${animal} - abrigo`);
  }

  function aplicarLimite(adotados, pessoa) {
    if (adotados.length > 3) {
      const extras = adotados.slice(3);
      for (const extra of extras) {
        const i = lista.findIndex(l => l === `${extra} - pessoa ${pessoa}`);
        if (i !== -1) lista[i] = `${extra} - abrigo`;
      }
    }
  }
  aplicarLimite(adotadosP1,1);
  aplicarLimite(adotadosP2,2);

  if ((adotadosP1.length === 1 && adotadosP1[0]==='Loco') ||
      (adotadosP2.length === 1 && adotadosP2[0]==='Loco')) {
    const i = lista.findIndex(l => l.startsWith('Loco - pessoa'));
    if (i!==-1) lista[i] = 'Loco - abrigo';
  }

  return { lista };
}

module.exports = { encontraPessoas };
