using SimplificaTerapia.Models.Classes;

namespace SimplificaTerapia.Models
{
    public class AddConsultasDto
    {

        public DateTime? data_consulta { get; set; }
        public string? horario { get; set; }
        public string? duracao { get; set; }
        public string? situacao { get; set; }
        public string? tipo_atendimento { get; set; }
        public string? forma_pagamento { get; set; }
        public bool? plano_saude { get; set; }
        public decimal? valor { get; set; }
        public string? observacoes { get; set; }

        public int? id_medico { get; set; }
        public int? id_paciente { get; set; }
    }
}
