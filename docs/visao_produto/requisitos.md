### **7.1 Lista de Requisitos Funcionais**

| Código  | Requisito                                           | Descrição                                                    |
|---------|-----------------------------------------------------|--------------------------------------------------------------|
| RF01    | Realizar Login                                      | Permitir o cadastro no sistema.                              |
| RF02    | Cadastrar Produto                                   | Permitir o cadastro de novos produtos no sistema.            |
| RF03    | Pesquisar Produto                                   | Permitir a pesquisa de produtos cadastrados.                 |
| RF04    | Excluir Produto                                     | Permitir a exclusão de produtos no estoque.                  |
| RF05    | Atualizar Produto                                   | Permitir a atualização das informações dos produtos.         |
| RF06    | Ordenar produtos por quantidade                     | Permitir a ordenação dos produtos com base na quantidade em estoque. |
| RF07    | Cadastrar Evento                                    | Permitir o cadastro de eventos no sistema.                   |
| RF08    | Cadastrar Gastos do Evento                          | Registrar os gastos relacionados a um evento.                |
| RF09    | Cadastrar Ganhos do Evento                          | Registrar os ganhos financeiros obtidos em um evento.        |
| RF10    | Gerar Relatório Referente aos Ganhos do Evento      | Gerar relatórios detalhados sobre os ganhos dos eventos.     |
| RF11    | Gerar Relatório Referente aos Gastos do Evento      | Gerar relatórios detalhados sobre os gastos dos eventos.     |
| RF12    | Pesquisar Eventos Passados                          | Permitir a pesquisa de eventos já realizados.                |
| RF13    | Pesquisar Eventos Futuros                           | Permitir a pesquisa de eventos futuros.                      |
| RF14    | Atualizar Dados dos Eventos                         | Permitir a atualização das informações de eventos cadastrados. |
| RF15    | Cadastrar Funcionário                               | Permitir o cadastro de novos funcionários no sistema.        |
| RF16    | Excluir Funcionário                                 | Permitir a exclusão de registros de funcionários.            |
| RF17    | Atualizar Dados dos Funcionários                    | Permitir a atualização das informações dos funcionários.     |
| RF18    | Registrar Pagamento de Funcionário                  | Registrar os pagamentos realizados aos funcionários.         |
| RF19    | Pesquisar Funcionário                               | Permitir a consulta de informações dos funcionários cadastrados. |


### **7.2 Lista de Requisitos Não Funcionais**

| Código  | Requisito               | Descrição                                                                                                        |
|---------|-------------------------|------------------------------------------------------------------------------------------------------------------|
| RNF01   | Usabilidade              | A interface do sistema deve permitir que usuários com pouca familiaridade tecnológica consigam realizar tarefas principais (cadastro, busca e visualização de informações) sem a necessidade de assistência externa, com um tempo médio de aprendizado inferior a 10 minutos. |
| RNF02   | Desempenho               | O tempo de resposta para interações no software deve ser de até dois segundos, mesmo durante operações de alta carga. |
| RNF03   | Desempenho               | O software deve garantir acesso simultâneo de até cinco usuários sem impacto significativo no desempenho.        |
| RNF04   | Escalabilidade           | O sistema deve suportar pelo menos novas funcionalidades sem a necessidade de refatorações que excedam 30% do código base existente, mantendo o desempenho dentro de 90% do tempo de resposta inicial. |
| RNF05   | Suportabilidade          | O sistema deve ser compatível com dispositivos móveis com Android 8.0 ou superior, iOS 12.0 ou superior, e em navegadores desktop compatíveis com HTML5. |
| RNF06   | Implementação            | Todas as alterações no banco de dados (inserções, atualizações, exclusões) devem ser acompanhadas por um registro em um log interno detalhado, contendo o identificador da modificação, data e hora, tipo da modificação, usuário responsável e a descrição da alteração. |
| RNF07   | Implementação            | O código front-end deve seguir padrões do React JS para garantir consistência e aderência a boas práticas de desenvolvimento. |
| RNF08   | Implementação            | Um arquivo .env deve ser utilizado para gerenciar variáveis sensíveis, assegurando a segurança e organização do ambiente. |
| RNF09   | Implementação            | O banco de dados relacional será implementado utilizando MySQL, garantindo eficiência e robustez no gerenciamento de dados. |
| RNF10   | Implementação            | O sistema deve utilizar Git como sistema de controle de versão, assegurando o rastreamento das alterações e a colaboração eficiente entre desenvolvedores. |
| RNF11   | Implementação            | O ambiente de desenvolvimento local deve utilizar Docker para facilitar a configuração, padronização e isolamento do ambiente. |


**Histórico de Revisão**

| **Data**   | **Versão** | **Descrição**                                                                         | **Autor**                                                                 |
| ---------- | ---------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 16/12/2024 | 1\.0 | Criação do documento | Pedro Henrique |
| 20/01/2025 | 3\.0 | Atualizacão do documento | Iderlan Junio |
