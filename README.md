# Calculadora 🖩

Este código em JavaScript é responsável por implementar a lógica de uma calculadora simples com funcionalidades adicionais, como temas claro/escuro e histórico de operações. Aqui está um resumo das principais funcionalidades e elementos do código:

 - Manipulação de DOM: para acessar e modificar os elementos da página HTML. Por exemplo, a função insert() utiliza o método innerHTML do elemento res para adicionar um número ou operador ao visor.
- Eventos: para responder a ações do usuário, como pressionar uma tecla ou clicar em um botão. Por exemplo, a função calcular() é chamada quando o usuário pressiona a tecla "=" ou "Enter".
- Funções: para agrupar código e torná-lo mais modular. Por exemplo, a função insert() realiza a operação de adicionar um número ou operador ao visor, enquanto a função calcular() realiza o cálculo da expressão no visor.
- Objetos: para representar dados e comportamentos complexos. Por exemplo, o objeto expressaoAtual é utilizado para armazenar a expressão matemática que está sendo calculada.
- Estruturas de dados: para armazenar e organizar dados. Por exemplo, o objeto localStorage é utilizado para armazenar o valor atual e o histórico da calculadora.
- Além disso, o código utiliza algumas técnicas específicas de JavaScript, como:
- Expressões regulares: para validar a entrada do usuário. Por exemplo, a expressão regular /[\d+\-*\/]/ é utilizada para verificar se a tecla pressionada é um número ou um dos símbolos específicos.
- Tipos de dados: para representar diferentes tipos de dados. Por exemplo, o tipo de dado number é utilizado para representar números.
- Formatação de strings: para formatar strings de texto. Por exemplo, a função formatarNumero() é utilizada para formatar números como strings.
