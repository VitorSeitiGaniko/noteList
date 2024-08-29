# NoteList - Lista de Lembretes

Praticando os conceitos básicos do React, comecei a melhorar uma aplicação entregue pela Alura. Inicialmente, a aplicação era simples, voltada apenas para a prática de `useState`, com funcionalidades de Criação e Remoção de itens.

## Melhorias Implementadas

Para aprofundar meu conhecimento, implementei as seguintes melhorias:

1. **useContext**:
   - Utilizei o `useContext` para gerenciar o estado global da aplicação, facilitando o compartilhamento de dados entre componentes.

2. **Styled Components**:
   - Adicionei `Styled Components` para estilizar os componentes de forma modular e reutilizável, melhorando a manutenção e a escalabilidade do código.

3. **Edição de Lembretes**:
   - Implementei um novo método para edição dos lembretes, permitindo que os usuários atualizem os lembretes existentes.

4. **Reutilização de Componentes**:
   - Transformei o formulário de criação de lembretes em um componente versátil, utilizado tanto para a criação quanto para a edição de lembretes, promovendo a reutilização de código e boas práticas de desenvolvimento.

## Estrutura do Projeto

### Componentes Principais

- **NoteList**:
  - Componente principal que exibe a lista de lembretes.
  - Utiliza `useContext` para acessar o estado global e renderizar os lembretes.  

- **NoteCard**:
  - Componente que representa um lembrete individual.
  - Permite a edição e remoção de lembretes.

- **NoteEditor**:
  - Componente reutilizável edição de lembretes.
    
- **NoteInput**:
  - Componente reutilizável com os campos de entrada para criação e edição de lembretes.

- **NoteInput**:
  - Componente utilizado para a criação dos lembretes.  

### Estilização

- Utilizei `Styled Components` para criar componentes estilizados, como `NoteListContainer` e `NoteListTitle`, garantindo uma aparência consistente e modular.
