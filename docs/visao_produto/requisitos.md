### **7.1 Lista de Requisitos Funcionais**

**RF01 - Realizar Login:** Permitir o cadastro no sistema.

**RF02 - Cadastro de Produto:** Permitir o cadastro de novos produtos no
sistema.

**RF03 - Pesquisa de Produto:** Permitir a pesquisa de produtos cadastrados.

**RF04 - Exclusão de Produto:** Permitir a exclusão de produtos no estoque.

**RF05 - Atualização de Produto:** Permitir a atualização das informações dos
produtos.

**RF06 - Ordenar produtos por quantidade:** Permitir a ordenação dos
produtos com base na quantidade em estoque.

**RF07 - Cadastro de Evento:** Permitir o cadastro de eventos no sistema.

**RF08 - Cadastro de Gastos do Evento:** Registrar os gastos relacionados a
um evento.

**RF09 - Cadastro de Ganhos do Evento:** Registrar os ganhos financeiros
obtidos em um evento.

**RF10 - Gerar Relatório Referente aos Ganhos do Evento:** Gerar relatórios
detalhados sobre os ganhos dos eventos.

**RF11 - Gerar Relatório Referente aos Gastos do Evento:** Gerar relatórios
detalhados sobre os gastos dos eventos.

**RF12 - Pesquisar Eventos Passados:** Permitir a pesquisa de eventos já
realizados.

**RF13 - Pesquisar Eventos Futuros:** Permitir a pesquisa de eventos futuros.

**RF14 - Atualizar Dados dos Eventos:** Permitir a atualização das
informações de eventos cadastrados.

**RF15 - Cadastro de Funcionário:** Permitir o cadastro de novos funcionários
no sistema.

**RF16 - Excluir Funcionário:** Permitir a exclusão de registros de funcionários.

**RF17 - Atualizar Dados dos Funcionários:** Permitir a atualização das
informações dos funcionários.

**RF18 - Registro de Pagamento de Funcionário:** Registrar os pagamentos
realizados aos funcionários.

**RF19 - Pesquisar Funcionário:** Permitir a consulta de informações dos
funcionários cadastrados.

### **7.2 Lista de Requisitos Não Funcionais**

**RNF01 - Usabilidade:** A interface deve ser projetada para usuários com
pouca familiaridade com tecnologia, garantindo que as interações sejam
intuitivas e de fácil entendimento.

**RNF02 - Desempenho:** O tempo de resposta para interações no software
deve ser de até dois segundos, mesmo durante operações de alta carga.
**RNF03 - Desempenho:** O software deve garantir acesso simultâneo de até
cinco usuários sem impacto significativo no desempenho.

**RNF04 - Escalabilidade:** O sistema deve permitir a adição de novas
funcionalidades sem necessidade de refatorações complexas, facilitando o
crescimento do software.

**RNF05 - Suportabilidade:** O sistema deve ser compatível com dispositivos
móveis Android e iOS, além de plataformas desktop, garantindo
acessibilidade ampla.

**RNF06 - Implementação:** Alterações no banco de dados devem ser
acompanhadas de um log interno associado, registrando todas as
modificações realizadas.

**RNF07 - Implementação:** O código front-end deve seguir padrões do React
JS para garantir consistência e aderência a boas práticas de
desenvolvimento.

**RNF08 - Implementação:** Um arquivo .env deve ser utilizado para gerenciar
variáveis sensíveis, assegurando a segurança e organização do ambiente.

**RNF09 - Implementação:** O banco de dados relacional será implementado
utilizando MySQL, garantindo eficiência e robustez no gerenciamento de
dados.

**RNF10 - Implementação:** O sistema deve utilizar Git como sistema de
controle de versão, assegurando o rastreamento das alterações e a
colaboração eficiente entre desenvolvedores.

**RNF11 - Implementação:** O ambiente de desenvolvimento local deve utilizar
Docker para facilitar a configuração, padronização e isolamento do ambiente.