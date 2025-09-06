
const { encontraPessoas } = require('./abrigo-animais');

describe('Abrigo de Animais', () => {
  test('Caso válido - Rex vai para pessoa 1, Fofo fica no abrigo', () => {
    const r = encontraPessoas('RATO,BOLA', '', 'Rex,Fofo');
    expect(r).toEqual({ lista: ['Rex - pessoa 1', 'Fofo - abrigo'] });
  });

  test('Caso inválido - Animal inexistente', () => {
    const r = encontraPessoas('BOLA', '', 'Lulu');
    expect(r).toEqual({ lista: ['Lulu - abrigo'] });
  });

  test('Caso inválido - Animal duplicado na ordem', () => {
    const r = encontraPessoas('BOLA', '', 'Rex,Rex');
    expect(r).toEqual({ lista: ['Rex - pessoa 1', 'Rex - abrigo'] });
  });

  test('Caso inválido - Brinquedo duplicado', () => {
    const r = encontraPessoas('BOLA,BOLA', '', 'Rex');
    expect(r).toEqual({ lista: ['Rex - pessoa 1'] });
  });

  test('Caso inválido - Brinquedo desconhecido', () => {
    const r = encontraPessoas('PIÃO', '', 'Rex');
    expect(r).toEqual({ lista: ['Rex - abrigo'] });
  });

  test('Gato: exige sequência CONTÍGUA; se ambos podem, vai para abrigo', () => {
    const r = encontraPessoas('BOLA,LASER', 'BOLA,LASER', 'Mimi');
    expect(r).toEqual({ lista: ['Mimi - abrigo'] });
  });

  test('Gato: pessoa 1 tem intercalado, mas não contíguo -> não adota', () => {
    const r = encontraPessoas('BOLA,CAIXA,RATO,LASER', 'LASER,BOLA', 'Mimi');
    expect(r).toEqual({ lista: ['Mimi - pessoa 2'] });
  });

  test('Pessoa não pode adotar mais de 3 animais', () => {
    const r = encontraPessoas('BOLA,SKATE', 'OSSOS', 'Rex,Bola,Bebe,Mimi,Fofo');
    expect(r).toEqual({
      lista: ['Rex - pessoa 1', 'Bola - pessoa 1', 'Bebe - pessoa 1', 'Mimi - abrigo', 'Fofo - pessoa 2']
    });
  });

  test('Loco: ignora ordem dos brinquedos, mas precisa terminar com companhia', () => {
    const r = encontraPessoas('SKATE', 'RATO,BOLA', 'Loco,Rex');
    expect(r).toEqual({ lista: ['Loco - pessoa 1', 'Rex - pessoa 2'] });
  });

  test('Loco sozinho no fim -> vai para abrigo', () => {
    const r = encontraPessoas('SKATE', '', 'Loco');
    expect(r).toEqual({ lista: ['Loco - abrigo'] });
  });
});
