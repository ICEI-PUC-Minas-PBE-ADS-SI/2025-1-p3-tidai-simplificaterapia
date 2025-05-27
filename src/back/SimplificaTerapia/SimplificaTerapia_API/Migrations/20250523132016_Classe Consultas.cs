using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SimplificaTerapia.Migrations
{
    /// <inheritdoc />
    public partial class ClasseConsultas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Consultas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    data_consulta = table.Column<DateTime>(type: "datetime2", nullable: true),
                    horario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    duracao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    situacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    tipo_atendimento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    forma_pagamento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    plano_saude = table.Column<bool>(type: "bit", nullable: true),
                    valor = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    observacoes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    id_medico = table.Column<int>(type: "int", nullable: true),
                    id_paciente = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consultas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Consultas_Medicos_id_medico",
                        column: x => x.id_medico,
                        principalTable: "Medicos",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Consultas_Pacientes_id_paciente",
                        column: x => x.id_paciente,
                        principalTable: "Pacientes",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Consultas_id_medico",
                table: "Consultas",
                column: "id_medico");

            migrationBuilder.CreateIndex(
                name: "IX_Consultas_id_paciente",
                table: "Consultas",
                column: "id_paciente");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Consultas");
        }
    }
}
