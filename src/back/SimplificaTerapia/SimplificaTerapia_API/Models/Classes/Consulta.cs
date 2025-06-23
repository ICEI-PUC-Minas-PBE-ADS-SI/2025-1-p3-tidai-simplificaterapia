using System.ComponentModel.DataAnnotations;

namespace SimplificaTerapia.Models.Classes
{
    public class Consulta
    {
        [Key]
        public int Id { get; set; }

        public DateTime? data_consulta { get; set; }
        public string? horario { get; set; }
        public string? duracao { get; set; }
        public string? situacao { get; set; }
        public string? tipo_atendimento { get; set; }
        public string? forma_pagamento { get; set; }
        public bool? plano_saude { get; set; }
        public decimal? valor { get; set; }
        public string? observacoes { get; set; }

        // Chave estrangeira para Médico
        public int? id_medico { get; set; }
        public Medico? med { get; set; }

        // Chave estrangeira para Paciente
        public int? id_paciente { get; set; }
        public Paciente? pac { get; set; }

    }
}
