# Plano de testes de software

<!-- <span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>, <a href="04-Projeto-interface.md"> Projeto de interface</a> 

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="02-Especificacao.md">Especificação do projeto</a>.

Por exemplo:-->

| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-001 - O sistema deverá permitir o cadastro e exclusão de informações de pacientes e terapeutas, incluindo dados pessoais e históricos de atendimento. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar perfil. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site http://localhost:4200/ <br> - Clica em "perfil" <br> - Escolhe a opção "Sou paciente" -  Clicar em "Cadastre" <br> - Preencher os campos obrigatórios (nome completo, UF, Município, Usuário, Data Nascimento, CPF, Nº Cartão SUS, Telefone, Email, senha, Confirmar Senha) <br>  <br> - Clicar em "Cadastrar" <br> - Informar email e senha <br> - Clica em "Entrar"
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Vânia Lourenço. |

<br>

| **Caso de teste**  | **CT-002 – Agendar consulta**  |
|:---: |:---: |
| Requisito associado | RF-002 - O sistema deverá possibilitar que os pacientes agendem, visualizem e cancelem sessões de terapia com terapeutas disponíveis. |
| Objetivo do teste | Verificar se o usuário consegue agendar consulta na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site http://localhost:4200/ <br> - Clicar no menu "Consultas" <br> - Clicar em "Agendar" <br> - Escolher terapeuta <br> - Clicar no ícone de marcar consulta <br> - Preencher os campos obrigatórios (data, horário, duração, situação, tipo de atendimento, forma de pagamento, clicar na opção "plano de saúde" caso possua) |
| Critério de êxito | - Consulta agendada com sucesso. |
| Responsável pela elaboração do caso de teste | Mariany Karla. |

<br>

| **Caso de teste**  | **CT-003 – Visualizar consulta**  |
|:---: |:---: |
| Requisito associado | RF-003 - Os Terapeutas deverão poder visualizar suas consultas agendadas, com a possibilidade de confirmar ou cancelar os atendimentos. |
| Objetivo do teste | Verificar se o usuário consegue visualizar consulta. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site http://localhost:4200/ <br> - Clicar no menu "Consultas" <br> - Clicar em "Visualizar" <br> - Caso deseje cancelar, clicar no ícone "cancelar". <br> - Caso deseje editar, clicar no ícone "editar" . <br> |
| Critério de êxito | - Consulta visível na tela. |
| Responsável pela elaboração do caso de teste | Vânia Lourenço. |

<br>

| **Caso de teste**  | **CT-005 –  Receber lembretes automáticos**  |
|:---: |:---: |
| Requisito associado | RF-005 - Pacientes e terapeutas deverão receber lembretes automáticos sobre consultas agendadas.|
| Objetivo do teste | Verificar se pacientes e terapeutas recebem lembretes automáticos. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site http://localhost:4200/ <br> - Clicar no ícone de noticação <br> - |
| Critério de êxito | - Notificação visível na tela |
| Responsável pela elaboração do caso de teste | Maria Eduarda. |

<br>

| **Caso de teste**  | **CT-006 – Acessar laudos/receitas**  |
|:---: |:---: |
| Requisito associado | RF-006 - Pacientes deverão poder acessar laudos/receitas de suas consultas de forma segura, após o término das sessões. |
| Objetivo do teste | Verificar se o usuário consegue acessar laudos de suas consultas. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site http://localhost:4200/ <br> - Clicar no menu "Laudos/Receitas" <br> - Clicar em "Visualizar <br> - Clicar no ícone de visualizar laudo <br> - Clicar no ícone "revogar" - confirmar <br> - Clicar no ícone "imprimir" - confirmar <br> - Clicar no ícone "baixar" - confirmar <br> - Clicar no ícone "vizualizar"  |
| Critério de êxito | - Laudo visível na tela. |
| Responsável pela elaboração do caso de teste | Mariany Karla. |

<br>

| **Caso de teste**  | **CT-007 – Emitir laudos/receitas eletrônicas**  |
|:---: |:---: |
| Requisito associado | RF-007 - Terapeutas poderão emitir receitas eletrônicas aos pacientes, que terão acesso a essas receitas diretamente no sistema.  |
| Objetivo do teste | Verificar se o Médico consegue emitir laudos/receitas. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site http://localhost:4200/ <br> -  Clicar no menu "Laudos/Receitas" <br> - Clicar em "Visualizar" <br> - Clicar em "Novo" <br> - Preencher os campos (código, Médico, CRM, data emissão, data vencimento e tipo) <br> - Clicar em "Confirmar" |
| Critério de êxito | - Receita visível na tela. |
| Responsável pela elaboração do caso de teste | Vânia Lourenço. |

<br>

| **Caso de teste**  | **CT-008 – Solicitar troca de terapeuta**  |
|:---: |:---: |
| Requisito associado | RF-008 - O sistema deverá permitir que os pacientes solicitem a troca de terapeuta, caso não estejam satisfeitos com o atendimento atual. |
| Objetivo do teste | Trocar terapeuta. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site http://localhost:4200/ <br> - Clicar no menu terapeutas" <br> - Clicar em visualizar terapeutas <br> - Clicar no ícone trocar terapeuta  <br> - Clicar em "confirmar" |
| Critério de êxito | - Terapeuta trocado com sucesso. |
| Responsável pela elaboração do caso de teste |  Vânia Lourenço. |




## Ferramentas de testes (opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links úteis**:
> - [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e técnicas de testes ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de software: conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e geração de planos de teste de software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de teste para JavaScript](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
