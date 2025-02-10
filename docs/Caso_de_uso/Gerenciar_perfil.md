# Especificação de Caso de Uso: Gerenciar Perfil

## 1. Gerenciar Perfil

### 1.1 Breve Descrição
Este caso de uso descreve o processo no qual um usuário, um refugiado palestino, gerencia as informações de seu perfil na plataforma **HopeBridge**. O objetivo é garantir que as informações do refugiado estejam cadastradas, para que os serviços da plataforma possam ser solicitados de forma exclusiva para cada refugiado.

### 1.2 Atores
- **Refugiado**  

---

## 2. Fluxo Básico de Eventos

### 2.1 Fluxo Principal
1. O caso de uso começa quando o refugiado acessa a plataforma e seleciona **"Gerenciar Perfil"**.  
2. O sistema apresenta as seguintes opções:  
        Criar Perfil  
        Editar Perfil [FA01]<br>
        Excluir Perfil [FA02]
3. O refugiado seleciona **Criar Perfil**.  
4. O sistema apresenta os seguintes campos para serem preenchidos:  
    Nome  
    Senha  
    Confirmação de senha  
    Número  
    Email  
    Idade  
    Localização atual  
    Tamanho da família  
    Necessidades específicas  
    Experiência profissional  
5. O refugiado preenche os campos e clica em **"Criar Conta"**. [FE01]  
6. O sistema apresenta a mensagem **"Conta criada com sucesso"**.  
7. O caso de uso é encerrado.  

---

## 3. Fluxos Alternativos

### 3.1 FA01 Editar Perfil
1. No passo **2.1.2**, o refugiado acessa a opção para **Editar Perfil**.  
2. O sistema solicita que o refugiado faça login usando suas credenciais.  
3. O refugiado preenche com suas credenciais.  
4. O sistema valida os dados. [FE02] [RN01]
5. O refugiado acessa a página de edição.  
6. O sistema apresenta as informações armazenadas no perfil.  
7. O refugiado edita as informações exibidas.  
8. O sistema pergunta ao usuário se ele realmente deseja fazer as atualizações.  
9. O usuário confirma as atualizações. [FE02]
10. O sistema exibe uma mensagem de **"Atualizações salvas"**.  
11. O caso de uso é encerrado.  

### 3.2 FA02 Excluir Conta
1. No passo **2.1.2**, o refugiado acessa a opção para **Excluir Perfil**.  
2. O sistema solicita que o refugiado faça login usando suas credenciais.  
3. O refugiado preenche com suas credenciais.  
4. O sistema valida os dados. [FE02] [RN01]
5. O sistema envia uma mensagem de confirmação de exclusão de conta.  
6. O refugiado confirma. [FE03]
7. O sistema envia uma mensagem de confirmação no email do refugiado. [RN02] 
8. O refugiado confirma no email.  
9. O refugiado é redirecionado à plataforma **HopeBridge**.  
10. O sistema envia a mensagem **"Exclusão de conta realizada"**.  
11. O caso de uso é encerrado.  

---

## 4. Fluxos de Exceção

### 4.1 FE01 Campos de Criação de Conta Incompletos
- No passo **2.1.5**, o usuário clica em **"Criar Conta"** sem preencher todos os campos obrigatórios.  
- O sistema apresenta a mensagem:  
  > **"Os campos 'Nomes dos campos' são necessários para criação de conta."**  
- O sistema retorna ao passo **2.1.4**.  

### 4.2 FE02 Validação de Informações  
- Nos passos **3.1.4** e **3.2.4**, se o sistema identificar credenciais inválidas, ele apresenta a mensagem:  
  > **"O 'Nomes dos dados' é inválido."**  
- O sistema retorna ao passo **3.1.3** ou **3.2.3**.  

### 4.3 FE03 Mensagem de Confirmação Cancelada  
- Nos passos **3.1.9** e **3.2.6**, caso o refugiado não confirme a ação, o sistema apresenta a mensagem:  
  > **"Ação não finalizada."**  
- O sistema retorna ao passo **3.1.3** ou **3.2.3**.  

---

## 5. Pré-Condições

### 5.1 Localização  
- Para informar as necessidades específicas, é necessário que o **GPS do dispositivo esteja ativado** e disponível para uso na plataforma para informar a localização atual e as necessidades específicas no passo 2.1.4.  

### 5.2 Conexão com a Internet  
- Para criar, editar ou excluir uma conta, é necessário estar conectado à **Internet**.  

---

## 6. Pós-Condições  
- Após a criação do perfil, o refugiado pode acessar os serviços da plataforma.  
- Após a edição do perfil, as novas informações ficam disponíveis imediatamente.  
- Após a exclusão do perfil, o usuário perde acesso à conta e serviços da plataforma.  

---

## 8. Pontos de extensão

---

## 8. Requisitos Especiais  
- Este caso de uso deve estar disponível via **dispositivo móvel**.  
- Deve possuir versões em **inglês** e **árabe**.  

---

## 9. Regras de Negócio

### 9.1 Validação de Dados  
Os seguintes dados devem ser validados antes da edição ou exclusão da conta:  

| Dados da Conta | Obrigatoriedade |
|---------------|---------------|
| **Email**    | Sim           |
| **Senha**    | Sim           |

### 9.2 Confirmação de Exclusão de Conta  
- No passo **3.2.7**, para excluir a conta, o refugiado deve confirmar a ação através de um **email de confirmação**.  

---

## 10. Informações Adicionais  
