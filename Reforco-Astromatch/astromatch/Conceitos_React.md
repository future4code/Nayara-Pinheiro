Conceitos:

*Props
É quando os componentes pais podem passar suas propriedades para os componentes filhos. Elas podem ser de qualquer tipo de valor(Strings, números, arrays, objetos, funções, componentes). Os Dados vem de fora do componente e não podem mudar dentro do componente.

*State
O estado pode ser declarada com uma váriavel, ela deve ser um objeto! É configurado dentro do componente. Afeta apenas o componente em questão, não afetando o restando do App. Os States podem mudar dentro do componente e quando eles mudam existe a atualização do DOM. É usado principalmente quando há mundanças de layout

*Componente
São muito uteis para reutilização de elementos e organização do código. Os componentes são como funções JavaScript que recebe um paramentro e retornam algo, como exemplo um JSX.

*Diferença entre componente de classe e funcional
Basicamente a principalmente diferença é o estilo, o componente de classe segue o principio de orientação á objetos enquanto o funcional é declarado como função. 

*Hooks
Possibilitam a inclusão dessas e outras funcionalidades antes restritas aos componentes de classe nos funcionais como a utilização da lógica de estado e lifecycle

*UseState
Cria uma variável de estado em um componente funcional e permite atualizá-la por meio de uma função

*UseEffect
O useEffect() é uma função responsável por executar outra função após renderização do componente