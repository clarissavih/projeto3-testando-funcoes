const { calcularMedia, verificaAprovacao, adicionarNota } = require('../calculoNotas');

let notas;

beforeEach(() => {
  notas = [5, 7, 8];
});

test('calcularMedia deve retornar a média correta', () => {
  expect(calcularMedia(notas)).toBe(6.67);
});

test('calcularMedia deve lançar erro para lista vazia', () => {
  expect(() => calcularMedia([])).toThrow('Lista de notas vazia');
});

test('verificaAprovacao deve retornar "Aprovado" para média maior ou igual a 6', () => {
  const media = calcularMedia(notas);
  expect(verificaAprovacao(media)).toBe('Aprovado');
});

test('verificaAprovacao deve retornar "Reprovado" para média menor que 6', () => {
  const media = calcularMedia([4, 5, 5]);
  expect(verificaAprovacao(media)).toBe('Reprovado');
});

test('adicionarNota deve adicionar uma nota válida à lista', () => {
  const novaNota = 9;
  const novaListaDeNotas = adicionarNota(notas, novaNota);
  expect(novaListaDeNotas).toEqual([...notas, novaNota]);
});

test('adicionarNota deve lançar erro para nota inválida', () => {
  expect(() => adicionarNota(notas, 11)).toThrow('Nota inválida');
});