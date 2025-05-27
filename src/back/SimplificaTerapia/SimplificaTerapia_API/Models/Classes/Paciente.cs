using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace SimplificaTerapia.Models.Classes
{
    public class Paciente
    {
        [Key]
        public int Id { get; set; }


        public string nome_completo { get; set; }
        public string uf { get; set; }
        public string municipio { get; set; }
        public string? situacao { get; set; }
        public int idade { get; set; }
        public string cpf { get; set; }
        public string? rg { get; set; }
        public string? sexo { get; set; }
        public string? num_cartao_sus { get; set; }
        public string? telefone { get; set; }
        public string? responsavel { get; set; }
        public string? contato_responsavel { get; set; }
        public string? sobre { get; set; }
        public string email { get; set; }
        public string? senha { get; set; }
    }
}
