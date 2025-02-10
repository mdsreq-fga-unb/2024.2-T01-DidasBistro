# Especificação de Caso de Uso: Solicitar serviço de educação

## 1. Solicitar serviço de educação

### 1.1 Breve Descrição
O caso de uso permite aos refugiados usuários do HopeBridgesolicitarem serviços de educação com base nas suas necessidades,para isso é necessário que os usuários informem suas necessidades educacionais para o sistema junto com suas informações pessoais.

### 1.2 Atores
- **Refugiado**  

---


## 2. Fluxo Básico de Eventos
Este caso de uso é iniciado após o usuário selecionar a opção “Serviços”  
2.1-O sistema apresenta as opções de tipos de serviços de acordo com as necessidades informadas no cadastro do usuário [FE01] 

2.2- O usuário seleciona o tipo de serviço “educação”

2.3-O sistema mostra os fornecedores desse tipo de serviço [FA01]

2.4- O usuário escolhe o serviço 

2.5 O sistema mostra a disponibilidade do serviço [FA02]

2.6- O usuário finalizar a solicitação do serviço

2.7- O sistema mostra uma mensagem de confirmação
	
2.8- O caso de uso é encerrado

## 3. Fluxos Alternativos
3.1 FA01 no passo 2.3 não existem fornecedores para esse serviço

3.1.1- O sistema informa que não existem fornecedores para o serviço desejado

3.1.2- O sistema oferece a opção de ativar notificações para quando o serviço estiver    disponível

3.1.3- O usuário é notificado quando o serviço estiver disponível

3.1.4- O usuário solicita o serviço

3.1.5- O caso de uso é encerrado

3.2- FA02 no passo 2.5 não fornecedor não pode disponibilizar o serviço
	
3.2.1- O sistema informa que o fornecedor não tem disponibilidade do serviço

3.2.2-O sistema oferece a opção de ativar notificações para quando o fornecedor estiver    disponível
	
3.2.3- O usuário é notificado quando o fornecedor estiver disponível

3.2.4- O usuário solicita o serviço

3.2.5- O caso de uso é encerrado

## 4. Fluxos de Exceção
4.1 FE01- O sistema verifica que no perfil do usuário não estão informadas nenhuma necessidade, sendo assim o sistema retorna uma mensagem ao usuário pedindo para ele adicionar as necessidades ao perfil e assim retorna ao passo 2.1

## 5. Pré-Condições   
Login: Para executar esse caso de uso é necessário que o usuário esteja “logado” na aplicação.

## 6. Pós-Condições  
Registro de atividades: Ao fim do caso de uso todas as solicitações de serviços devem ser registradas

## 7. Pontos de Extensão

## 8. Requisitos Especiais
Este caso de uso deve ser disponível via dispositivo móvel
Deve ser possível visualizar os fornecedores do serviço mesmo sem conexão com internet


## 9. Informações Adicionais  
Muhammad, de 20 anos, informou no cadastro que uma de suas necessidades é um serviço de educação, pois seu filho de 7 anos precisa continuar estudando. Ao acessar o sistema, ele navega até a área de serviços e seleciona a categoria de educação. O sistema então exibe todos os fornecedores desse serviço, e Muhammad encontra uma escola que aceita e inclui refugiados. Verificando a disponibilidade, ele percebe que há vagas disponíveis e, em seguida, solicita o serviço, entrando em contato com a escola.
