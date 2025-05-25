# Plano de testes de software

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>, <a href="04-Projeto-interface.md"> Projeto de interface</a>

O plano de testes de software é gerado a partir da especificação do sistema e consiste em casos de teste que deverão ser executados quando a implementação estiver parcial ou totalmente pronta. Apresente os cenários de teste utilizados na realização dos testes da sua aplicação. Escolha cenários de teste que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico, o grupo deve detalhar quais funcionalidades foram avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Não deixe de enumerar os casos de teste de forma sequencial e garantir que o(s) requisito(s) associado(s) a cada um deles esteja(m) correto(s) — de acordo com o que foi definido na <a href="02-Especificacao.md">Especificação do projeto</a>.

Por exemplo:

| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-001 - O sistema deverá permitir o cadastro e exclusão de informações de pacientes e terapeutas, incluindo dados pessoais e históricos de atendimento. |
| Objetivo do teste | Verificar se o usuário consegue cadastrar perfil. |
| Passos / Paciente| - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Escolhe a opção Sou paciente -  Clicar em "Criar conta" <br> - Preencher os campos obrigatórios (nome completo, UF, Município, Usuário, Data Nascimento, CPF, Nº Cartão SUS, Telefone, Email, senha, Confirmar Senha) <br>  <br> - Clicar em "Entrar" |
| Passos / Médico| - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> -  Escolhe a opção Sou Médico - Clicar em "Criar conta" <br> - Preencher os campos obrigatórios (nome completo, UF, Município, Usuário, CRM, CPF, Especialidade, Valor p/ hora, Formação, Email, senha, Confirmar Senha) <br>  <br> - Clicar em "Entrar" |
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Vânia Lourenço. |

<br>

| **Caso de teste**  | **CT-002 – Agendar consulta**  |
|:---: |:---: |
| Requisito associado | RF-002 - O sistema deverá possibilitar que os pacientes agendem, visualizem e cancelem sessões de terapia com terapeutas disponíveis. |
| Objetivo do teste | Verificar se o usuário consegue agendar consulta na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar no menu "Consultas" <br> - Clicar em "Agendar" <br> - Escolher terapeuta <br> - Clicar no ícone de marcar consulta <br> - Preencher os campos obrigatórios (data, horário, duração, situação, tipo de atendimento, forma de pagamento, clicar na opção "plano de saúde" caso possua) |
| Critério de êxito | - Consulta agendada com sucesso. |
| Responsável pela elaboração do caso de teste | Mariany Karla. |

<br>

| **Caso de teste**  | **CT-003 – Visualizar consulta**  |
|:---: |:---: |
| Requisito associado | RF-003 - Os Terapeutas deverão poder visualizar suas consultas agendadas, com a possibilidade de confirmar ou cancelar os atendimentos. |
| Objetivo do teste | Verificar se o usuário consegue visualizar consulta. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar em "Consulta"  - "Visualizar" <br> - Caso deseje cancelar, clicar no ícone "cancelar". Caso deseje editar, clicar no ícone "editar" . <br> |
| Critério de êxito | - Consulta visível na tela. |
| Responsável pela elaboração do caso de teste | Vânia Lourenço. |

<br>

| **Caso de teste**  | **CT-004 – Gerar relatórios**  |
|:---: |:---: |
| Requisito associado | RF-004 - O sistema deverá gerar relatórios sobre consultas realizadas, permitindo a análise de informações como frequência de sessões e progresso dos pacientes. |
| Objetivo do teste | Verificar se o sistema consegue gerar relatórios. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Nome do integrante da equipe. |

<br>

| **Caso de teste**  | **CT-005 – Acessar laudos/receitas**  |
|:---: |:---: |
| Requisito associado | RF-006 - Pacientes deverão poder acessar laudos/receitas de suas consultas de forma segura, após o término das sessões. |
| Objetivo do teste | Verificar se o usuário consegue acessar laudos de suas consultas. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar no menu "Laudos/Receitas" <br> - Clicar em "Visualizar <br> - Clinar no ícone de visualizar laudo |
| Critério de êxito | - Laudo visível na tela. |
| Responsável pela elaboração do caso de teste | Mariany Karla. |

<br>

| **Caso de teste**  | **CT-006 – Emitir receitas eletrônicas**  |
|:---: |:---: |
| Requisito associado | RF-007 - Terapeutas poderão emitir receitas eletrônicas aos pacientes, que terão acesso a essas receitas diretamente no sistema. |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar em "Criar conta" <br> - Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, CPF, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" |
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Nome do integrante responsável. |

<br>

| **Caso de teste**  | **CT-007 – Solicitar troca de terapeuta**  |
|:---: |:---: |
| Requisito associado | RF-008 - O sistema deverá permitir que os pacientes solicitem a troca de terapeuta, caso não estejam satisfeitos com o atendimento atual. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site https://adota-pet.herokuapp.com/src/index.html <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Login" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Nome do integrante responsável. |


## Ferramentas de testes (opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links úteis**:
> - [IBM - criação e geração de planos de teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e técnicas de testes ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de software: conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e geração de planos de teste de software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de teste para JavaScript](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
