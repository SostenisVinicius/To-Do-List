# 📅 Tasks App (To-Do List)

Website de um organizador de tarefas (to-do list) feito com React JS, Tailwind CSS, TypeScript, Context API e mais.

página inicial

## Descrição

- Aplicação para organizar suas tarefas com os seguintes dados: título, descrição, data, marcar como completo, em andamento ou pendente e marcar como importante.
- Você pode pesquisar por alguma tarefas no campo de pesquisa.
- As tarefas são mostradas por ordem de criação.
- Os dados das tarefas são salvos no localStorage.

## Funcionalidades

- Adicionar tarefa: O usuário adiciona uma nova tarefa com título e descrição, a data de criação é preenchida automaticamente pelo sistema, é possível escolher o status e marcar como importante ou não durante o processo. Ao adicionar uma tarefa, o usuário é redirecionado para a página da tarefa recém-criada.

- Listar tarefas: A página inicial exibi uma lista com todas as tarefas cadastradas, ordenadas pela data de criação. Cada item da lista exibi o título, a descrição, a data de criação da tarefa, a importancia e o status. É possível filtrar as tarefas por status (pendente, em andamento ou concluída) e pelo título da tarefa.

- Editar tarefa: O usuário consegue editar o título, a descrição, importancia e status de uma tarefa já existente. É possível editar a importância e status na própria listagem de tarefas também.

- Remover tarefa: O consegue remover uma tarefa.


## Objetivo

O projeto teve principalmente como objetivo pôr em prática conhecimentos de TypeScript, Tailwind, Context API e React Js.

## Ferramentas utilizadas

React JS
TypeScript
Tailwind CSS
Context API
React Router DOM
HTML

## Como testar

Você pode acessar o projeto aqui: https://tranquil-marigold-590018.netlify.app

Ou rodar na sua máquina:

``` 
git clone https://github.com/SostenisVinicius/To-Do-List.git
cd To-Do-List
npm install
npm start
```


## Observações
- Aplicação feita seguindo a nova documentação do react para uma melhor experiência;
- Foi usado o framework Next.JS para desenvolvimento assim como indicado pela nova documentação;
- Foi usado o tailwind.ui e tailwind.css para desenvolvimento, pois é a indicação padrão do Next.js, visto que é uma estilização pre-render e evita erros de renderização para o usuário.
- segue a documentação do react (https://react.dev/learn/start-a-new-react-project);
- segue a documentação do next (https://nextjs.org/docs);
