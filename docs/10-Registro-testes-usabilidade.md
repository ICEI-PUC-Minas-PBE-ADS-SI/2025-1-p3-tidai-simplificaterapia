#  Registro de Testes de Usabilidade – Simplifica Terapia

---

##  Cenário 1: Cadastro de novo paciente

**Descrição:** Você é um novo paciente e deseja se cadastrar na plataforma.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 1 (Paciente) | SIM             | 4                    | 26,3 segundos         |
| 2 (Paciente) | SIM             | 3                    | 35,1 segundos         |

**Tempo do especialista:** 12,8 segundos  
**Comentários:** Ambos os participantes conseguiram realizar o cadastro, porém um deles relatou dificuldade em entender que o campo de confirmação de senha era obrigatório — o erro só foi indicado após tentar enviar o formulário. Sugere-se exibir avisos de validação em tempo real e reposicionar o botão de envio para maior visibilidade.

---

## ✅ Cenário 2: Agendamento de sessão

**Descrição:** Você é um paciente e deseja agendar uma nova sessão com o seu terapeuta.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 1 (Paciente) | SIM             | 5                    | 21,4 segundos         |
| 2 (Paciente) | SIM             | 4                    | 28,9 segundos         |

**Tempo do especialista:** 10,2 segundos  
**Comentários:** Agendamento funcional, mas um participante sugeriu um aviso de “confirmação” mais evidente após finalizar.

---

## ✅ Cenário 3: Pagamento de consulta

**Descrição:** Você é um paciente e precisa realizar o pagamento de uma consulta agendada.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 1 (Paciente) | SIM             | 4                    | 29,7 segundos         |
| 2 (Paciente) | NÃO             | 2                    | 52,3 segundos         |

**Tempo do especialista:** 13,5 segundos  
**Comentários:** Um participante não conseguiu realizar o pagamento por não entender a navegação entre os botões. A nomenclatura “Efetuar” gerou confusão; recomenda-se trocar por “Confirmar pagamento”.

---

## ✅ Cenário 4: Visualização de laudo ou receita

**Descrição:** Você deseja visualizar um laudo ou receita que o seu terapeuta emitiu.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 1 (Paciente) | SIM             | 5                    | 24,1 segundos         |
| 2 (Paciente) | SIM             | 3                    | 32,4 segundos         |

**Tempo do especialista:** 11,3 segundos  
**Comentários:** Apesar de conseguirem visualizar os documentos, um dos participantes teve dificuldade em entender a navegação até o histórico. Sugere-se usar ícones mais autoexplicativos e etiquetas claras.

---

## ✅ Cenário 5: Visualizar detalhes de sessão anterior

**Descrição:** Você deseja visualizar os detalhes de uma sessão já realizada.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 1 (Paciente) | SIM             | 5                    | 20,8 segundos         |
| 2 (Paciente) | SIM             | 5                    | 19,6 segundos         |

**Tempo do especialista:** 9,8 segundos  
**Comentários:** Cenário considerado fácil por ambos os usuários. Nenhum ajuste necessário.

---

## ✅ Cenário 6: Cadastro de terapeuta

**Descrição:** Você deseja se cadastrar como terapeuta na plataforma.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 3 (Terapeuta) | SIM             | 4                    | 33,5 segundos         |
| 4 (Terapeuta) | NÃO             | 3                    | 49,0 segundos         |

**Tempo do especialista:** 15,7 segundos  
**Comentários:** Um participante não conseguiu finalizar o cadastro por não entender a obrigatoriedade de campos como “CRP” e “Especialidade”. Sugere-se uma tooltip explicativa ao lado dos campos obrigatórios.

---

## ✅ Cenário 7: Emissão de laudo ou receita

**Descrição:** Você deseja registrar um laudo ou receita para um paciente atendido.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 3 (Terapeuta) | SIM             | 5                    | 30,2 segundos         |
| 4 (Terapeuta) | SIM             | 4                    | 32,6 segundos         |

**Tempo do especialista:** 14,0 segundos  
**Comentários:** Participantes sugeriram incluir uma opção de “Pré-visualizar” antes de salvar definitivamente.

---

## ✅ Cenário 8: Visualizar agendamentos do dia

**Descrição:** Você deseja visualizar os agendamentos do dia.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 3 (Terapeuta) | SIM             | 4                    | 19,9 segundos         |
| 4 (Terapeuta) | SIM             | 3                    | 25,3 segundos         |

**Tempo do especialista:** 9,2 segundos  
**Comentários:** Agenda funcional, porém o layout visual foi considerado poluído. Sugere-se agrupar os horários por turno.

---

## ✅ Cenário 9: Cancelar consulta

**Descrição:** Você deseja cancelar uma consulta previamente marcada.

| Participante | Taxa de Sucesso | Satisfação Subjetiva | Tempo para conclusão |
|-------------|-----------------|----------------------|-----------------------|
| 3 (Terapeuta) | SIM             | 4                    | 27,8 segundos         |
| 4 (Terapeuta) | SIM             | 3                    | 29,6 segundos         |

**Tempo do especialista:** 12,5 segundos  
**Comentários:** Participantes sugeriram um alerta de confirmação mais destacado para evitar cancelamentos acidentais.

---

## 🔍 Avaliação Geral

- **Taxa média de sucesso geral:** ~94%
- **Satisfação subjetiva média:** Entre 3 e 5 pontos
- **Principais dificuldades relatadas:**
  - Botões pouco destacados ou com rótulos ambíguos (ex: “Efetuar” em vez de “Pagar agora”);
  - Campos obrigatórios sem aviso claro (ex: confirmação de senha no cadastro);
  - Falta de feedback visual claro após ações importantes (ex: envio, pagamento, confirmação);
  - Layout da agenda considerado confuso para horários próximos.

**Recomendações:**
- Melhorar feedback visual em ações críticas (como confirmação de cadastro e pagamento);
- Tornar os rótulos e botões mais intuitivos e padronizados;
- Reorganizar visualmente as seções com grande densidade de informação (ex: agenda);
- Incluir sugestões em tempo real para formulários (ex: tooltips, validação ao digitar).


