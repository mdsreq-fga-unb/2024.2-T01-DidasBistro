# Gerenciamento de Candidatos

## 1. Breve Descrição
Este cenário permite que o empregador possa gerenciar os candidatos dentro da plataforma. Isso inclui visualizar candidaturas, analisar perfis, agendar entrevistas e aceitar ou recusar candidatos.

### 1.2 Atores
- **Empregador**

## 2. Fluxo Básico de Eventos
1. O empregador acessa a plataforma.
2. O empregador acessa a seção "Candidatos".
3. O empregador visualiza a lista de candidatos que aplicaram para suas vagas. **[RN01]**
4. O empregador seleciona um candidato para visualizar os detalhes do perfil. **[FE01]**
5. O empregador pode realizar as seguintes ações: 
   - Agendar entrevista **[FA01]**
   - Aceitar candidatura **[FA02]**
   - Recusar a candidatura **[FA03]**
6. O sistema registra a decisão do empregador. **[FE02]**
7. O sistema mostra uma mensagem de confirmação.
8. O caso de uso é encerrado.

## 3. Fluxos Alternativos

### FA01 – Agendar Entrevista
1. O empregador seleciona a opção "Agendar Entrevista".
2. O sistema apresenta um calendário com datas e horários disponíveis.
3. O empregador escolhe uma data e horário para a entrevista.
4. O sistema confirma o agendamento e notifica o candidato.
5. O caso é encerrado.

### FA02 – Aceitar Candidatura
1. O empregador seleciona a opção "Aceitar Candidatura".
2. O sistema atualiza o status do candidato para "Aceito".
3. O sistema remove o candidato de outras candidaturas pendentes. **[RN02]**
4. O candidato recebe uma notificação de aceitação.
5. O caso é encerrado.

### FA03 – Recusar Candidatura
1. O empregador seleciona a opção "Recusar Candidatura".
2. O sistema atualiza o status do candidato para "Recusado".
3. O candidato recebe uma notificação.
4. O sistema sugere outros candidatos para a vaga.
5. O caso é encerrado.

## 4. Fluxos de Exceção

### FE01 – Informações Incompletas
Se, no passo 2.4, o candidato possuir informações incompletas, o empregador pode ignorá-lo.

### FE02 – Erro de Conexão
Se, no passo 2.6, houver problemas de conexão, o sistema informa o usuário e sugere tentar novamente mais tarde.

## 5. Pré-Condições
1. O empregador deve estar logado na plataforma.
2. O empregador deve ter pelo menos uma vaga de emprego publicada.

## 6. Pós-Condições
1. O candidato recebe notificação sobre a decisão tomada pelo empregador.
2. A vaga pode ser atualizada caso o empregador aceite um candidato.

## 7. Pontos de Extensão

## 8. Requisitos Especiais
1. Todas as notificações enviadas aos candidatos devem ser registradas e possuírem confirmação de entrega.
2. A interface do sistema precisa ser intuitiva; o empregador deve ser capaz de gerenciar os candidatos sem dificuldades.

## 9. Informações Adicionais
Um empregador precisa identificar novos candidatos para serem alocados em determinadas áreas de trabalho, como, por exemplo, a construção civil. Para isso, ele acessa a plataforma da Hope Bridge, navega até a seção de candidatos e analisa o perfil de todos para encontrar os mais adequados para a função. Ele identifica quatro candidatos para uma entrevista, mas um deles é recusado devido a informações incompletas no perfil. Após a entrevista, o sistema detecta que um dos candidatos possui candidaturas pendentes. Assim que é aceito para a vaga, suas pendências são removidas.

Portanto, o empregador consegue gerenciar os perfis dos candidatos, realizar entrevistas, aceitar candidaturas e remover candidaturas.

## 10. Regras de Negócio
1. Um empregador só pode visualizar candidatos que tenham aplicado para suas vagas.
2. Um candidato aceito para uma vaga será automaticamente removido das outras candidaturas pendentes.
