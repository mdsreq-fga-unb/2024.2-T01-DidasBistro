### 9.1 **Backlog Geral**
Nosso backlog foi estruturado utilizando histórias de usuário para garantir clareza e foco nas necessidades do negócio e dos usuários finais. As histórias seguem um formato padronizado, começando pela identificação do ator **(Como um(a))**, o objetivo (**Eu quero:**) e o benefício esperado (**Para que:**), assegurando que cada item esteja alinhado com o propósito do sistema. Além disso, cada história inclui critérios de aceitação bem definidos, que detalham os comportamentos esperados, como validações, respostas a falhas, e condições específicas de funcionamento. Esse padrão facilita a priorização, promove um entendimento comum entre os membros do time e stakeholders, e serve como base para validação durante o desenvolvimento, garantindo que as entregas atendam às expectativas de qualidade e funcionalidade.

##Quadro Miro

<iframe src="https://miro.com/app/board/uXjVL4APDBU=/?share_link_id=215557801634" width="800" height="600"></iframe>

## Lista de Histórias de Usuário

| História | Título                            | Como um(a)       | Eu quero                              | Para que                               | Critérios de Aceitação                                                                                                       |
|--------|-----------------------------------|------------------|---------------------------------------|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| US01    | Realizar Login                    | Dono do Negócio  | Realizar um login rápido e seguro     | Eu confie os meus dados na aplicação  | 1. O sistema deve informar qual campo não foi preenchido corretamente em caso de falha. <br> 2. CPF e senha devem ser únicos por usuário. <br> 3. Manter o usuário logado por 24 horas, a menos que ele faça logout. <br> 4. Redirecionar o usuário para a página inicial com uma mensagem de boas-vindas após o login bem-sucedido. |
| US02   | Cadastrar Produto               | Dono do Negócio  | Cadastrar um produto                  | Adicionar novos produtos de forma rápida e prática | 1. Concluir o cadastro em até 4 etapas. <br> 2. Informar nome, quantidade, preço e descrição.<br> 3. Exibir mensagem de sucesso após cadastro. <br> 4. Exibir mensagem clara se houver campos ausentes ou inválidos. |
| US03  | Pesquisar Produto               | Dono do Negócio  | Pesquisar um produto                  | Saber a quantidade dos produtos e me planejar | 1. Permitir pesquisa pelo nome completo ou parcial. <br> 2. A pesquisa deve ser acionada por a partir do momento em que um caractere é digitado. <br> 3. Exibir "Nenhum produto encontrado" se não houver resultados. |
| US04    | Excluir Produto               | Dono do Negócio  | Excluir um produto                    | Não ter produtos desnecessários no estoque | 1. Exibir mensagem de confirmação antes de excluir. <br> 2. A exclusão deve ser confirmada pelo usuário. <br> 3. O botão de exclusão não deve ser facilmente clicado acidentalmente. <br> 4. Após exclusão, o produto não deve mais aparecer na lista. |
| US05  | Atualizar Produto            | Dono do Negócio  | Atualizar os dados de um produto      | Manter a quantidade correta dos produtos | 1. Permitir atualização de nome, descrição e quantidade. <br> 2. A edição deve ser feita a partir de um ícone de edição. <br> 3. Validar os dados antes de salvar. <br> 4. Exibir mensagem de sucesso após salvar. <br> 5. O formulário deve carregar os dados atuais. <br> 6. Botões "Confirmar" e "Cancelar" devem estar disponíveis. <br> 7. As alterações devem refletir imediatamente na lista e estoque. |
| US06   | Ordenar produtos por quantidade   | Dono do Negócio  | Ordenar produtos por quantidade       | Saber quais produtos tenho em maior quantidade | 1. Permitir ordenação crescente e decrescente. <br> 2. A ordenação deve ser acionada por botões ou opções claras. <br> 3. Exibir os produtos na nova ordem sem recarregar a página. <br> 4. Manter a ordenação enquanto o usuário estiver na lista. |
| US07   | Cadastrar Evento                | Dono do Negócio  | Cadastrar um Evento                   | Ficar ciente dos eventos futuros       | 1. Permitir cadastro informando nome, data, horário, local, quantidade de pessoas e descrição. <br> 2. Concluir em até 3 etapas ou em uma única tela. <br> 3. Botões "Cadastrar" e "Voltar" devem estar disponíveis. <br> 4. Exibir evento na lista ou calendário após salvar. <br> 5. Exibir mensagem de confirmação após sucesso. <br> 6. Exibir mensagens de erro "Erro ao cadastrar Evento". |
| US08   | Cadastrar Gastos do evento      | Dono do Negócio  | Cadastrar os Gastos de um evento      | Saber quanto gastei em um evento       | 1. Associar gastos a um evento cadastrado. <br> 2. Informar tipo de gasto, descrição, valor e data. <br> 3. Valor deve aceitar apenas números positivos. <br> 4. Exibir mensagem de confirmação após sucesso. <br> 5. Exibir mensagens claras em caso de erro. |
| US09    | Cadastrar Ganhos do Evento      | Dono do Negócio  | Cadastrar os ganhos de um evento      | Saber quanto vendi e avaliar o evento  | 1. Registrar ganhos relacionados a um evento. <br> 2. Solicitar descrição, valor arrecadado e data. <br> 3. Valor deve aceitar apenas números positivos. <br> 4. Exibir mensagem de confirmação após sucesso. <br> 5. Exibir mensagens claras em caso de erro. |
| US010  | Gerar Relatório Referente aos Ganhos do Evento| Dono do Negócio  | Gerar relatórios sobre ganhos| Avaliar a lucratividade e tomar decisões estratégicas | 1. Relatórios devem conter nome do evento, total de ganhos, balanço final e lista detalhada de ganhos. <br> 2. Destacar balanço final com cores diferenciadas. <br> 3. Permitir exportação em PDF. <br> 4. Armazenar relatório para consulta posterior. |
 |US011  | Gerar Relatório Referente aos Gastos do Evento| Dono do Negócio  | Gerar relatórios sobre gastos | Avaliar a lucratividade e tomar decisões estratégicas | 1. Relatórios devem conter nome do evento, total de gastos, balanço final e lista detalhada de gastos. <br> <br> 2. Destacar balanço final com cores diferenciadas. <br> 3. Permitir exportação em PDF. <br> 4. Armazenar relatório para consulta posterior. |
| US012  | Pesquisar Eventos Passados        | Dono do Negócio  | Pesquisar eventos passados            | Acessar informações relevantes de eventos passados | 1. Permitir pesquisa por nome ou período/datas. <br> 2. Exibir nome, data, local e relatório financeiro. <br> 3. Indicar claramente quando nenhum evento for encontrado. |
| US013 | Pesquisar Eventos Futuros         | Dono do Negócio  | Pesquisar eventos futuros             | Planejar melhor as ações para os próximos eventos | 1. Permitir pesquisa por nome ou período/datas. <br> 2. Exibir nome, data e local do evento. <br> 3. Indicar claramente quando nenhum evento for encontrado. |
| US014  | Atualizar dados dos eventos       | Dono do Negócio  | Atualizar os dados de eventos cadastrados | Corrigir informações ou refletir alterações | 1. Permitir atualização de nome, data, local, horário, quantidade de pessoas, gastos e ganhos. <br> 2. Disponibilizar botão "Editar". <br> 3. Formulário deve exibir dados atuais. <br> 4. Validar as informações antes de salvar. <br> 5. Exibir mensagem de sucesso após salvar. <br> 6. Manter dados originais se o usuário cancelar a edição. |
| US015  | Cadastrar funcionário       | Dono do Negócio  | Cadastrar novos funcionários no sistema   | Eu possa gerenciar informações da equipe com eficiência | 1. O sistema deve permitir que o dono do negócio cadastre novos funcionários preenchendo os seguintes campos obrigatórios: Nome, telefone de contato. <br> 2. O sistema deve permitir que o dono do negócio avalie os funcionários de uma forma simples o desempenho e a pontualidade dos funcionários. <br> 3. Após o cadastro, o sistema deve exibir uma mensagem de sucesso.  <br> 4. Caso ocorra um erro, o sistema deve exibir uma mensagem clara com a razão do erro. <br> 5. As informações cadastradas devem ser armazenadas corretamente no banco de dados, garantindo a integridade e disponibilidade dos dados. <br> 6. O sistema deve impedir o cadastro de funcionários com informações incompletas ou incorretas.
| US016  | Excluir funcionário       | Dono do Negócio  | Excluir funcionários que não fazem mais parte da empresa  | Eu possa manter o cadastro atualizado | 1. O sistema deve permitir que o dono do negócio exclua um funcionário selecionado na lista de funcionários cadastrados. <br> 2. Antes de excluir, o sistema deve exibir uma mensagem de confirmação. <br> 3. Deve haver botões de confirmação e cancelamento claramente identificados.  <br> 4. O sistema não deve permitir a exclusão de funcionários vinculados a eventos futuros. <br> 5. Caso o funcionário não possa ser excluído, o sistema deve exibir uma mensagem clara explicando o porquê. <br> 6. Após uma exclusão bem-sucedida, o sistema deve exibir uma mensagem de confirmação.|
| US017 | Atualizar dados dos funcionários | Dono do Negócio  | Atualizar as informações dos funcionários   | Eu possa corrigir dados ou adicionar novas informações relevantes.  | 1. O sistema deve permitir que o dono do negócio edite as informações de um funcionário previamente cadastrado <br> 2. O sistema deve permitir a atualização de todos os dados e das avaliações do funcionário. <br> 3. O sistema deve validar os dados atualizados.   <br> 4. Após salvar as alterações, o sistema deve exibir uma mensagem de sucesso.  <br> 5. Caso ocorra um erro, deve ser exibida uma mensagem clara com o motivo do erro.   <br> 6. O sistema deve exibir um botão ou link claramente identificado como "Editar" ao lado de cada funcionário na lista.|
| US018  | Registro de Pagamento de funcionário | Dono do Negócio  | Registrar pagamentos de funcionários    | Eu possa controlar as finanças e garantir o histórico de pagamentos.  | 1. O sistema deve permitir que o dono do negócio registre pagamentos realizados para cada funcionário. <br> 2. O sistema deve validar o valor do pagamento, apenas valores positivos decimais ou não.  <br> 3. Após registrar o pagamento, o sistema deve exibir uma mensagem de sucesso.   <br> 4. Caso ocorra um erro, deve ser exibida uma mensagem clara com o motivo do erro.  <br> 5. O sistema deve permitir que o usuário visualize uma lista de pagamentos realizados, pesquisando por nome ou data.|
| US019  | Pesquisar Funcionário   | Dono do Negócio  | Pesquisar informações de funcionários no sistema  | Eu possa acessar dados rapidamente quando necessário     | 1. O sistema deve permitir que o dono do negócio pesquise informações de funcionários cadastrados utilizando diferentes critérios. <br> 2. A pesquisa deve aceitar os seguintes parâmetros: nome, telefone de contato, desempenho e pontualidade.  <br> 3. O sistema deve exibir uma lista com os funcionários que correspondem aos critérios de busca.  <br> 4. Se nenhum funcionário for encontrado, o sistema deve exibir uma mensagem. <br> 5. Caso ocorra um erro, deve ser exibida uma mensagem clara com o motivo do erro.|



##Épicos e Histórias de Usuários

###Épico 1: Estoque

- **História 2:** US02 - Cadastrar Produto
- **História 3:** US03 - Pesquisar Produto 
- **História 4:** US04 - Excluir Produto
- **História 5:** US05 - Atualizar Produto 
- **História 6:** US06 - Ordenar produtos por quantidade

###Épico 2: Eventos

- **História 7:** US07 - Cadastrar Evento
- **História 8:** US08 - Cadastrar Gastos do Evento 
- **História 9:** US09 - Cadastrar Ganhos do Evento 
- **História 10:** US010 - Gerar Relatório Referente aos Ganhos do Evento 
- **História 11:** US011 - Gerar Relatório Referente aos Gastos do Evento
- **História 12:** US012 - Pesquisar Eventos Passados 
- **História 13:** US013 - Pesquisar Eventos Futuros 
- **História 14:** US014 - Atualizar Dados dos Eventos

# 9.2 **Priorização**
Aqui está a fórmula usada para a priorização dos requisitos, com foco em valorizar significativamente a frequência de uso.

![formula](../imagens/formula.png)


| **História**  | **Título**                                    | **Valor de Negócio** | **Complexidade Técnica** | **Frequência de Uso** | **Prioridade** |
|-------------------|-----------------------------------------------|----------------------|--------------------------|-----------------------|----------------|
| **US01**          | Realizar Login                               | 5                    | 4                        | 1                     | 7,5            |
| **US02**          | Cadastrar Produto                          | 5                    | 2                        | 3                     | 45             |
| **US03**          | Pesquisar Produto                          | 5                    | 3                        | 3                     | 30             |
| **US04**          | Excluir Produto                          | 3                    | 3                        | 2                     | 12             |
| **US05**          | Atualizar Produto                       | 5                    | 2                        | 2                     | 30             |
| **US06**          | Ordenar produtos por quantidade              | 5                    | 3                        | 1                     | 10             |
| **US07**          | Cadastrar Evento                           | 5                    | 2                        | 2                     | 30             |
| **US08**          | Cadastrar Gastos do Evento                 | 5                    | 2                        | 2                     | 30             |
| **US09**          | Cadastrar Ganhos do Evento                 | 5                    | 2                        | 2                     | 20             |
| **US10**          | Gerar Relatório Referente aos Ganhos do Evento | 5                    | 2                        | 2                     | 30             |
|**US11**          | Gerar Relatório Referente aos Gastos do Evento                  |          5          |            2             |           2          |     30        |
| **US12**          | Pesquisar Eventos Passados                   | 5                    | 2                        | 3                     | 45             |
| **US13**          | Pesquisar Eventos Futuros                    | 5                    | 3                        | 3                     | 30             |
| **US14**          | Atualizar Dados dos Eventos                  | 5                    | 2                        | 2                     | 30             |
| **US15**          | Cadastrar Funcionário                  | 5                    | 1                        | 1                     | 30             |
| **US16**          | Excluir Funcionário                  | 4                    | 1                        | 1                     | 24             |
| **US17**          | Atualizar Dados dos Funcionários                 | 5                    | 1                        | 1                     | 30             |
| **US18**          | Registrar Pagamento de Funcionário                  | 5                    | 2                        | 1                     | 15             |
| **US19**          | Pesquisar Funcionário                 | 5                    | 2                        | 1                     | 30             |



# 9.3 **MVP**

Com base na priorização feita e visando entregar maior valor para o cliente nosso mvp será composto dos seguintes requisitos:

| **História** | **Título**                                     |
|-------------------|------------------------------------------------|
| **US02**          | Cadastrar Produto                              |
| **US13**          | Pesquisar Eventos Futuros                      |
| **US12**          | Pesquisar Eventos Passados                     |
| **US03**          | Pesquisar Produto                              |
| **US05**          | Atualizar Produto                               |
| **US10**          | Gerar Relatório Referente aos Ganhos do Evento |
| **US11**          | Gerar Relatório Referente aos Gastos do Evento |
| **US14**          | Atualizar Dados dos Eventos                    |
| **US07**          | Cadastrar Evento                               |
| **US08**          | Cadastrar Gastos do Evento                     |
| **US09**          | Cadastrar Ganhos do Evento                     |


**Possiveis Incrementos**

| **História** | **Título**                                  |
|-------------------|---------------------------------------------|
| **US04**          | Exclusão de Produto                         |
| **US06**          | Ordenar Produtos por Quantidade             |
| **US01**          | Realizar Login                              |
| **US015**          | Cadastrar Funcionário                             |
| **US016**          | Excluir Funcionário                             |
| **US017**          | Atualizar Dados dos Funcionários                            |
| **US018**          | Registrar Pagamento de Funcionário                            |
| **US019**          | Pesquisar Funcionário                              |

Houve mudanças no MVP entre as versões 2.0 e 3.0 devido à saída de integrantes do projeto. Para manter o valor do projeto para a cliente, foram retiradas apenas as histórias relacionadas à gestão de funcionários.


**Histórico de Revisão**

| **Data**   | **Versão** | **Descrição**                                                                         | **Autor**                                                                 |
| ---------- | ---------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 16/12/2024 | 1\.0 | Criação do documento | Pedro Gois |s
| 16/12/2024 | 2\.0 | Atualização do documento | Pedro Gois |s
| 20/01/2025 | 3\.0 | Atualizacão do Documento | Iderlan Junio |