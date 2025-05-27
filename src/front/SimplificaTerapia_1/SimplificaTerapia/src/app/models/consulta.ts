export interface Consulta {
  id: number;
  data_consulta: string;
  horario: string;
  duracao: string;
  situacao: string;
  tipo_atendimento: string;
  forma_pagamento: string;
  plano_saude: boolean;
  valor: number;
  observacoes: string;
  id_medico: number;
  id_paciente: number;
}
