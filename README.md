# Refactory
Projeto para exemplificar técnicas de refactory aplicando CleanCode

```
Obs.:
- Os estágios apresentados no projeto não necessitam ser aplicados na ordem apresentada, podem ser aplicados apenas os refactories necessários a sua aplicação.
- Este sistema não tem por finalidade apresentar funcionalidades reais, apenas servir como base para exemplificação de técnicas utilizadas por mim para refatorações de código
```
## Dependências :
- NodeJs 8 ou superior (somente para rodar o arquivo index e realizar os imports)
## Como rodar o projeto:
- node ./index.js na raiz do projeto
```
Obs.: No arquivo index.js existe uma chamada para cada estágio do refactory, basta descomentar o estágio que deseja testar.
```
## O que é refactory?
 Refactory e uma mudança no código que não muda o comportamento observável do programa, ou seja, ao realizar um refactory não se espera necessariamente um ganho de performance no sistema, nem deve alterar o resultado final do sistema.

Apenas serão realizadas alterações para que a leitura do código se torne mais fluída
## Estágios do projeto:
### Estágio 1 (Ameba):
> Neste estágio o código possui várias responsabilidades em uma única função e inúmeros parâmetros sendo passados para realizar a sua tarefa.
>
> Note que o único parâmetro por contexto é o de "configuração", porém este pode ser mais uma imposição do componente de impressão necessitar que seja passado desta forma do que uma boa prática do desenvolvedor.
### Estágio 2 (params):
> Neste estágio reduzimos o número de parâmetros repassados a função agora por contextos:
> - Cliente
> - Pagamento
> - Configurações
>
> De acordo com Robert C. Martin:
> ```
> Parâmetros para funções:
> - A melhor quantidade de parâmetros para uma função é "NENHUM"
> - A cada parâmetro adicionado, aumentamos a complexidade de teste da função
> - Um número aceitavel de parâmetros segundo Uncle Bob seriam no máximo 3
> - Caso necessite de muitos parâmetros, agrupe-os por contexto
>```
### Estágio 3 (variants):
> De nomes significativos a sua variáveis e evite utilizar identificadores de tipo para variaveis, pois com o tempo estes acabam sendo ignorados ao ler a função.
> 
> No Estagio 2 vemos que a variável SQL muda de valor no decorrer da geração do relatório, em casos assim o ideal é que tenhamos uma variável por contexto, sendo assim, neste estágio defino uma variável para o contexto de SQL do cliente e outra para o contexto da venda.
### Estágio 4 (async):
> Em caso de resolução de promisses procure utilizar async await quando possível.
>
> Isto traz mais legibilidade para o código e evita o callback hell (aninhamento de funções de callback).
### Estágio 5 (enumerated/constants):
> Caso sua aplicação tenha algum número mágico(valores que correspondem a um número pré definido. Ex.: Tipos específicos da aplicação (no exemplo "TIPO_VENDA"), valor de PI, etc...), procure substituir estes números por constantes ou enumerados como fiz no estágio 5.
> ```
> Obs.: Procure deixar estas constantes ou enumerado em um arquivo a parte que possa ser reutilizado em todos os locais da aplicação que façam referência a este tipo.
> ```
### Estágio 6 (classes):
> Em alguns casos é possível segregar as responsabilidades por classes específicas para um determinado fim.
>
> No estágio 6 moveremos a responsabilidade da consulta para classes específicas utilizando uma classe pai (template-pattern) que implementa a consulta em sí e classes filhas onde definiremos os SQL's específicos.
### Estágio 7 (extract-function):
> Procure isolar as funções dentro do código de modo que ela faça apenas uma coisa.
>
> Se sua função tiver duas responsabilidades, porem estas responsabilidades estejam descritas no título da função, então ela faz apenas uma coisa
>
> Este comportamento pode ser observado na função "buscaVendaDetalhada" no estágio 7, onde a função consulta a venda e então inclui os detalhes de pagamento no objeto a ser retornado.
>
> Vale ressaltar neste estágio que ao criar funções o ideal é que se evite a alteração de um parâmetro dentro da função, ao invés disto, procure retornar um novo objeto na função
### Estágio 8 (patterns):
> Verifique se algum método em sua função não pode ser modificado a ponto de aplicar algum design pattern conhecido 
>
> Os design patterns tendem a melhorar a organização do código e facilitar futuras alterações
>
> No caso do exemplo aplicarei o pattern Visitor no objeto da classe de relatório permitindo montar relatórios dinâmicos, apenas aplicando novos visitors no relatório a ser gerado