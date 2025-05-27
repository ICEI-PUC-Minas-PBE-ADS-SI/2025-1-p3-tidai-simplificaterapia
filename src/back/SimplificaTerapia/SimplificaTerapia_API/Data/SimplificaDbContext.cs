using Microsoft.EntityFrameworkCore;
using SimplificaTerapia.Models.Classes;

namespace SimplificaTerapia.Data
{
    public class SimplificaDbContext : DbContext
    {
        public SimplificaDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Medico> Medicos { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Consulta> Consultas { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Medico>()
                .Property(m => m.valor_por_hora)
                .HasPrecision(10, 2); // Exemplo para campo decimal

            modelBuilder.Entity<Paciente>()
                .Property(p => p.nome_completo)
                .HasMaxLength(100);



            modelBuilder.Entity<Consulta>()
        .HasOne(c => c.med)
        .WithMany() // Se quiser: .WithMany(m => m.Consultas) e adicionar a lista na classe Médico
        .HasForeignKey(c => c.id_medico);

            modelBuilder.Entity<Consulta>()
                .HasOne(c => c.pac)
                .WithMany() // Se quiser: .WithMany(p => p.Consultas) e adicionar a lista na classe Paciente
                .HasForeignKey(c => c.id_paciente);

            base.OnModelCreating(modelBuilder);
        }

    }
}
