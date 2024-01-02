# Calculadora 🖩

Este código em JavaScript é responsável por implementar a lógica de uma calculadora simples com funcionalidades adicionais, como temas claro/escuro e histórico de operações. Aqui está um resumo das principais funcionalidades e elementos do código:

Manipulação de Elementos do DOM:

Obtém referências para diversos elementos HTML usando document.getElementById.
Elementos incluem botões, visor da calculadora, histórico, e elementos relacionados a temas claro/escuro.
Alteração de Tema:

Implementa funções temaEscuro e temaClaro para alterar o tema da calculadora entre escuro e claro.
Adiciona um ouvinte de eventos ao interruptor (switchBtn) para alternar entre os temas.
Manipulação da Calculadora:

Função insert(num) adiciona números ou operadores ao visor da calculadora, com algumas verificações de validação.
Função clean() limpa o visor e o histórico da calculadora.
Função back() remove o último caractere do visor.
Função calcular() avalia a expressão matemática no visor e exibe o resultado formatado.
Usa a função eval para avaliar expressões matemáticas (cuidado ao usar eval em situações reais devido a possíveis vulnerabilidades de segurança).
Formatação de Números:

Função formatarNumero formata números para exibição mais amigável.
Manipulação de Histórico:

Função mostrarHistorico exibe ou esconde o histórico de operações.
Adiciona um ouvinte de eventos ao botão de histórico (btnHistorico).
Persistência de Dados:

Usa o localStorage para armazenar e recuperar o resultado atual e o histórico da calculadora.
A função carregarDadosSalvos é chamada para carregar os dados salvos ao carregar a página.
Ouvinte de Eventos de Teclado (comentado):

Há um bloco de código comentado que adiciona um ouvinte de eventos de teclado para melhorar a interação com a calculadora usando o teclado.
Carregamento Inicial:

A função carregarDadosSalvos é chamada para carregar os dados salvos ao carregar a página.
Esse código cria uma calculadora funcional com características adicionais e fornece uma experiência interativa ao usuário, permitindo a escolha entre temas claro e escuro, além de manter um histórico de operações.
