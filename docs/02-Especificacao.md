# Especificação do projeto

## Definição do Problema e Ideia de Solução

### Problema

O acesso à terapia psicológica enfrenta diversos desafios, incluindo a sobrecarga dos serviços de saúde mental, a distribuição desigual de profissionais e barreiras como custos elevados e deslocamento. Muitos pacientes enfrentam dificuldades para encontrar atendimento acessível e adequado às suas rotinas, enquanto terapeutas precisam gerenciar consultas, finanças e documentação de forma eficiente.

---

### Ideia de Solução

O **Simplifica Terapia** propõe uma plataforma digital que conecta pacientes a terapeutas de forma prática e segura. O sistema permitirá o agendamento de consultas, envio de lembretes automáticos, geração de laudos e receitas eletrônicas, além de fornecer ferramentas para organização da agenda dos profissionais. Dessa forma, busca-se facilitar o acesso à terapia e otimizar a gestão dos atendimentos.

---

## Técnicas e Ferramentas Utilizadas

Para realizar a especificação do projeto, foram utilizadas as seguintes técnicas e ferramentas:

- **Diagrama de Personas**: Representação dos perfis dos usuários-alvo da plataforma.
- **Histórias de Usuários**: Levantamento das necessidades e expectativas dos usuários com base em suas rotinas e desafios.
- **Requisitos Funcionais e Não Funcionais**: Definição detalhada das funcionalidades essenciais e dos aspectos técnicos que a solução deve atender.
- **Diagrama de Caso de Uso**: Modelagem dos principais fluxos de interação dos usuários com o sistema.
- **Metodologia Ágil**: Aplicação de práticas ágeis para desenvolvimento incremental e iterativo da solução.

---

## Personas

## Perfis de Usuários do Simplifica Terapia

## 1. Ana, 30 anos – Psicóloga Clínica

- Trabalha em consultório particular e tem dificuldade em gerenciar sua agenda e cobranças.
- Tem conhecimentos básicos de tecnologia e busca um sistema intuitivo para otimizar sua rotina.
- Deseja oferecer consultas online para expandir seu atendimento a pacientes de outras cidades.

## 2. Carlos, 25 anos – Paciente Universitário

- Sofre de ansiedade e busca terapia, mas tem dificuldades para encontrar um profissional acessível.
- Prefere atendimento online devido à sua rotina acadêmica intensa.
- Já utiliza aplicativos para diferentes serviços e valoriza soluções digitais acessíveis.

## 3. Mariana, 45 anos – Paciente Trabalhadora

- Tem um emprego exigente e pouco tempo para consultas presenciais.
- Gostaria de acessar terapia de forma prática, sem precisar deslocar-se até uma clínica.
- Se sente mais confortável com um ambiente digital seguro e com atendimento personalizado.


## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR` |
|--------------------|------------------------------------|----------------------------------------|
| Ana, Psicóloga Clínica | Gerenciar minha agenda e cobranças | Organizar melhor meus atendimentos e evitar erros administrativos |
| Ana, Psicóloga Clínica | Oferecer consultas online | Atender pacientes de outras cidades e expandir minha atuação |
| Ana, Psicóloga Clínica | Acessar relatórios sobre meus atendimentos | Acompanhar o progresso dos pacientes e melhorar o tratamento |
| Ana, Psicóloga Clínica | Emitir receitas eletrônicas | Garantir mais agilidade no tratamento dos pacientes |
| Carlos, Paciente Universitário | Encontrar um terapeuta acessível | Conseguir apoio psicológico sem comprometer meu orçamento |
| Carlos, Paciente Universitário | Agendar e cancelar sessões online | Adaptar o tratamento à minha rotina acadêmica intensa |
| Carlos, Paciente Universitário | Receber lembretes automáticos de consultas | Evitar esquecimentos e manter a regularidade da terapia |
| Mariana, Paciente Trabalhadora | Agendar sessões de forma prática | Evitar deslocamentos e otimizar meu tempo |
| Mariana, Paciente Trabalhadora | Acessar laudos e receitas digitais | Ter mais comodidade no acompanhamento do meu tratamento |
| Mariana, Paciente Trabalhadora | Solicitar troca de terapeuta | Escolher um profissional que melhor atenda minhas necessidades |



## Requisitos

## Requisitos Funcionais

O levantamento de requisitos funcionais do sistema Simplifica Terapia visa identificar as funcionalidades essenciais para o sistema e atender às necessidades dos usuários finais. 

| ID      | Descrição do Requisito | Prioridade |
|---------|---------------------------------------------------------|--------|
| RF-001  | O sistema deverá permitir o cadastro e exclusão de informações de pacientes e terapeutas, incluindo dados pessoais e históricos de atendimento. | ALTA |
| RF-002  | O sistema deverá possibilitar que os pacientes agendem, visualizem e cancelem sessões de terapia com terapeutas disponíveis. | ALTA |
| RF-003  | Terapeutas deverão poder visualizar suas consultas agendadas, com possibilidade de confirmar ou cancelar os atendimentos. | ALTA |
| RF-004  | O sistema deverá gerar relatórios sobre consultas realizadas, permitindo a análise de informações como frequência de sessões e progresso dos pacientes. | MÉDIA |
| RF-005  | Pacientes e terapeutas deverão receber lembretes automáticos sobre consultas agendadas. | MÉDIA |
| RF-006  | Pacientes deverão poder acessar laudos de suas consultas de forma segura, após o término das sessões. | ALTA |
| RF-007  | Terapeutas poderão emitir receitas eletrônicas aos pacientes, que terão acesso a essas receitas diretamente no sistema. | MÉDIA |
| RF-008  | O sistema deverá permitir que os pacientes solicitem a troca de terapeuta, caso não estejam satisfeitos com o atendimento atual. | MÉDIA |



## Requisitos Não Funcionais

Os requisitos não funcionais visam garantir que o sistema Simplifica Terapia ofereça uma experiência de uso eficiente, segura e confiável.

| ID      | Descrição do Requisito | Prioridade |
|---------|--------------------------------------------------------------|--------|
| RNF-001 | O sistema deverá ter um tempo de resposta rápido, com no máximo 3 segundos por operação. | MÉDIA |
| RNF-002 | Todas as informações de pacientes e terapeutas deverão ser criptografadas para garantir privacidade. | ALTA |
| RNF-003 | A interface deverá ser clara e intuitiva, seguindo boas práticas de design de UX para facilitar o uso. | ALTA |
| RNF-004 | O sistema deverá estar disponível 24/7, com tempo de inatividade anual inferior a 0,1%. | ALTA |
| RNF-005 | A aplicação deverá ser escalável para suportar o aumento no número de usuários sem perda de desempenho. | MÉDIA |
| RNF-006 | O uso do sistema dependerá de uma conexão estável com a internet. | ALTA |



## Requisitos da Solução

### Requisitos Funcionais (RF)

| ID     | Descrição do Requisito |
|--------|------------------------------------------------------------|
| RF-001 | O sistema deve permitir o cadastro e exclusão de pacientes e terapeutas. |
| RF-002 | Deve ser possível que pacientes agendem, visualizem e cancelem sessões de terapia. |
| RF-003 | O sistema deve permitir que terapeutas gerenciem sua agenda e confirmem ou cancelem atendimentos. |
| RF-004 | Deve ser possível emitir relatórios de consultas realizadas para análise do progresso dos pacientes. |
| RF-005 | O sistema deve enviar lembretes automáticos para pacientes e terapeutas sobre consultas agendadas. |
| RF-006 | Pacientes devem poder acessar laudos de suas consultas de forma segura. |
| RF-007 | Terapeutas devem poder emitir receitas eletrônicas para seus pacientes. |
| RF-008 | O sistema deve permitir que pacientes solicitem a troca de terapeuta. |
| RF-009 | Deve haver um mecanismo para que pacientes encontrem terapeutas disponíveis com base em critérios como especialidade e valor da consulta. |

### Requisitos Não Funcionais (RNF)

| ID     | Descrição do Requisito |
|--------|------------------------------------------------------------|
| RNF-001 | O sistema deve ser responsivo para funcionar adequadamente em dispositivos móveis. |
| RNF-002 | O tempo de resposta das operações deve ser de no máximo 3 segundos. |
| RNF-003 | Todas as informações de pacientes e terapeutas devem ser criptografadas para garantir privacidade. |
| RNF-004 | A interface deve ser clara e intuitiva, seguindo boas práticas de UX/UI. |
| RNF-005 | O sistema deve estar disponível 24/7, com tempo de inatividade anual inferior a 0,1%. |
| RNF-006 | A aplicação deve ser escalável para suportar o aumento do número de usuários sem perda de desempenho. |
| RNF-007 | O sistema deve exigir uma conexão estável com a internet para funcionamento adequado. |



## Restrições

O projeto está sujeito às seguintes limitações:

| ID  | Restrição |
|-----|-------------------------------------------------------|
| 001 | O projeto deverá ser entregue até o final do semestre. |
| 002 | O custo total do projeto não deve exceder o orçamento definido. |
| 003 | O sistema deve operar exclusivamente em ambiente online, exigindo conexão com a internet. |
| 004 | O armazenamento dos dados deve seguir as normas de privacidade e segurança vigentes. |

Essas restrições estabelecem os limites e diretrizes para o desenvolvimento do **Simplifica Terapia**, garantindo viabilidade e conformidade com as necessidades dos usuários e os recursos disponíveis.



## Diagrama de casos de uso

![Diagrama de caso de uso](https://github.com/user-attachments/assets/40751c05-7b57-4a31-961d-ea3973eba525)
