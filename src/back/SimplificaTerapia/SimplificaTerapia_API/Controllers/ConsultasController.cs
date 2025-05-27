using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimplificaTerapia.Data;
using SimplificaTerapia.Models.Classes;
using SimplificaTerapia.Models;

namespace SimplificaTerapia.Controllers
{

    // localhost:xxxx/api/consultas
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultasController : ControllerBase
    {
        public SimplificaDbContext dbContext { get; set; }
        public ConsultasController(SimplificaDbContext context)
        {
            this.dbContext = context;
        }


        [HttpGet]
        public IActionResult GetAllConsultas()
        {
            var consultas = dbContext.Consultas
                .Include(c => c.med)
                .Include(c => c.pac)
                .Select(c => new {
                    c.Id,
                    c.data_consulta,
                    c.horario,
                    c.duracao,
                    c.situacao,
                    c.tipo_atendimento,
                    c.forma_pagamento,
                    c.plano_saude,
                    c.valor,
                    c.observacoes,
                    Medico_Nome = c.med.nome_completo,
                    Paciente_Nome = c.pac.nome_completo
                })
                .ToList();

            return Ok(consultas);
        }


        [HttpGet("{id:int}")]
        public IActionResult GetConsultaPorId(int id)
        {
            var consulta = dbContext.Consultas
                .Include(c => c.med)
                .Include(c => c.pac)
                .FirstOrDefault(c => c.Id == id);

            if (consulta == null)
                return NotFound();
            return Ok(consulta);
        }


        [HttpPost]
        public IActionResult CriaConsulta(AddConsultasDto dto)
        {
            var consulta = new Consulta
            {
                data_consulta = dto.data_consulta,
                horario = dto.horario,
                duracao = dto.duracao,
                situacao = dto.situacao,
                tipo_atendimento = dto.tipo_atendimento,
                forma_pagamento = dto.forma_pagamento,
                plano_saude = dto.plano_saude,
                valor = dto.valor,
                observacoes = dto.observacoes,
                id_medico = dto.id_medico,
                id_paciente = dto.id_paciente
            };

            dbContext.Consultas.Add(consulta);
            dbContext.SaveChanges();

            return Ok(consulta);
        }



        [HttpPut("{id:int}")]
        public IActionResult UpdateConsulta(int id, AddConsultasDto dto)
        {
            var consulta = dbContext.Consultas.Find(id);

            if (consulta == null)
                return NotFound();

            consulta.data_consulta = dto.data_consulta;
            consulta.horario = dto.horario;
            consulta.duracao = dto.duracao;
            consulta.situacao = dto.situacao;
            consulta.tipo_atendimento = dto.tipo_atendimento;
            consulta.forma_pagamento = dto.forma_pagamento;
            consulta.plano_saude = dto.plano_saude;
            consulta.valor = dto.valor;
            consulta.observacoes = dto.observacoes;
            consulta.id_medico = dto.id_medico;
            consulta.id_paciente = dto.id_paciente;

            dbContext.SaveChanges();

            return Ok(consulta);
        }


        [HttpDelete("{id:int}")]
        public IActionResult DeletaConsulta(int id)
        {
            var consulta = dbContext.Consultas.Find(id);

            if (consulta == null)
                return NotFound();

            dbContext.Consultas.Remove(consulta);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
