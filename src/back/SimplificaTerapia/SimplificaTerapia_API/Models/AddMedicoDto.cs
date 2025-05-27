namespace SimplificaTerapia.Models
{
    public class AddMedicoDto
    {
        public string nome_completo { get; set; }
        public string? uf { get; set; }
        public string municipio { get; set; }
        public string? situacao { get; set; }
        public string? crm { get; set; }
        public string cpf { get; set; }
        public string? rg { get; set; }
        public string? sexo { get; set; }
        public string? especialidade { get; set; }
        public decimal? valor_por_hora { get; set; }
        public string? formacao { get; set; }
        public string? sobre { get; set; }
        public string email { get; set; }
        public string? senha { get; set; }
    }
}
