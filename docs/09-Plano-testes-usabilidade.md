# Plano de testes de usabilidade

<span style="color:red">Pré-requisitos: <a href="04-Projeto-interface.md"> Projeto de interface</a></span>, <a href="07-Plano-testes-software.md"> Plano de testes de software</a>

##  Objetivo

O objetivo deste plano é avaliar a usabilidade da plataforma **Simplifica Terapia**, garantindo que psicólogos, terapeutas e pacientes consigam utilizar o sistema de forma intuitiva, eficiente e satisfatória.

Busca-se verificar se a interface facilita as tarefas principais da aplicação — como **agendamento de sessões**, **gestão de pacientes** e **acesso às informações** — e identificar melhorias que tornem a experiência mais fluida para diferentes perfis de usuários.

---

##  Metodologia

Os testes foram conduzidos com usuários que representam os principais perfis de *stakeholders* da aplicação: psicólogos e pacientes. Os testes ocorreram de forma **presencial**, com acompanhamento direto de um observador, e uso de **formulários estruturados** para coleta de dados.

Cada participante realizou **cenários baseados em histórias reais de uso**, relacionados às funcionalidades mais críticas da plataforma. Durante os testes, foram coletadas as seguintes métricas:

- **Taxa de sucesso**: Se o participante conseguiu ou não concluir a tarefa;
- **Satisfação subjetiva**: Avaliação qualitativa da experiência (Escala: Péssimo – Ótimo);
- **Tempo de conclusão da tarefa**: Cronometrado em segundos;
- **Comentários qualitativos** sobre a experiência.

---

##  Critérios de Seleção dos Participantes

Devido à indisponibilidade de psicólogos e terapeutas reais para a realização dos testes, foram convidados **4 participantes voluntários**, que representaram os dois principais perfis de usuários do sistema: profissionais da saúde mental e pacientes.

- **Grupo 1 – Perfil Profissional (simulado)**: Dois participantes desempenharam o papel de psicólogos/terapeutas, utilizando cenários de testes que simulavam atividades típicas desses profissionais (como visualizar agenda, emissão de recibos, etc.). Embora não sejam da área, os voluntários receberam um breve *briefing* sobre o contexto de uso da plataforma.

- **Grupo 2 – Perfil Paciente**: Dois participantes com diferentes níveis de familiaridade com tecnologia, representando usuários interessados em acessar serviços de terapia online.

A escolha dos participantes buscou simular, dentro das limitações do projeto, a diversidade de perfis que utilizarão a plataforma. **Nenhum dado pessoal foi coletado**, respeitando integralmente a **Lei Geral de Proteção de Dados (LGPD)**.

---

## 🛠 Ferramentas Utilizadas

- Cronômetro para aferição de tempo;
- Planilha estruturada para registro de dados;
- Formulário de avaliação de satisfação;
- Observação direta do comportamento do usuário.

---

## 📏 Métricas Coletadas

| Métrica               | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| **Taxa de Sucesso**   | Percentual de usuários que concluíram a tarefa com êxito                  |
| **Satisfação Subjetiva** | Escala qualitativa (1 a 5) da experiência do usuário                      |
| **Tempo Médio por Tarefa** | Tempo em segundos para completar cada cenário                        |
| **Tempo do Especialista** | Tempo padrão de execução da tarefa por um membro da equipe de desenvolvimento |

---

##  Cenários para Paciente

| Nº | Descrição do Cenário |
|----|------------------------|
| 1  | Você é um paciente e deseja agendar uma nova sessão com o seu terapeuta. Acesse o sistema e realize o agendamento. |
| 2  | Você é um paciente e precisa realizar o pagamento de uma consulta agendada. Acesse o sistema e conclua o pagamento. |
| 3  | Você deseja visualizar um laudo ou receita que o seu terapeuta emitiu. Acesse o sistema e localize esse documento. |
| 4  | Você deseja visualizar os detalhes de uma sessão já realizada. Acesse o sistema e localize as informações do atendimento. |


---

##  Cenários para Terapeuta

| Nº | Descrição do Cenário |
|----|------------------------|
| 5  | Você deseja se cadastrar como terapeuta na plataforma. Acesse a tela de cadastro, preencha as informações obrigatórias e finalize o processo.|
| 6  | Você deseja registrar um laudo ou receita para um paciente atendido. Crie e salve o documento no sistema. |
| 7  | Você é um terapeuta e deseja visualizar os recibos de atendimentos anteriores. Acesse o sistema e localize os documentos emitidos. |
| 8  | Você é um terapeuta e deseja visualizar os agendamentos do dia. Acesse a agenda e confira os próximos atendimentos. |



