// usuario.test.js

const usuario = require('../usuario');

test('o objeto usuario deve ter nome, idade e email', () => {
  expect(usuario).toHaveProperty('nome');
  expect(usuario).toHaveProperty('idade');
  expect(usuario).toHaveProperty('email');
});

test('o nome do usuario deve ser Lucas', () => {
  expect(usuario.nome).toBe('Lucas');
});

test('a idade do usuario deve ser 28', () => {
  expect(usuario.idade).toBe(28);
});

test('o email do usuario deve ser lucas@exemplo.com', () => {
  expect(usuario.email).toBe('lucas@exemplo.com');
});
