using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimplificaTerapia.Data;
using SimplificaTerapia.Models.Classes;
using SimplificaTerapia.Models;

namespace SimplificaTerapia.Controllers
{
    // localhost:xxxx/api/pacientes
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        public SimplificaDbContext dbContext { get; }

        public PacientesController(SimplificaDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet]
        public IActionResult GetAllPacientes()
        {
            var TodosOsPacientes = dbContext.Pacientes.ToList();

            return Ok(TodosOsPacientes);
        }


        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetPacientePorId(int id)
        {
            var pacienteChamado = dbContext.Pacientes.Find(id);

            if (pacienteChamado == null)
            {
                return NotFound();
            }
            return Ok(pacienteChamado);
        }


        [HttpPost]
        public IActionResult AddPacientes(AddPacienteDto AddPaciente)
        {
            var pacienteEntity = new Paciente()
            {
                nome_completo = AddPaciente.nome_completo,
                uf = AddPaciente.uf,
                municipio = AddPaciente.municipio,
                situacao = AddPaciente.situacao,
                idade = AddPaciente.idade,
                cpf = AddPaciente.cpf,
                rg = AddPaciente.rg,
                sexo = AddPaciente.sexo,
                num_cartao_sus = AddPaciente.num_cartao_sus,
                telefone = AddPaciente.telefone,
                responsavel = AddPaciente.responsavel,
                contato_responsavel = AddPaciente.contato_responsavel,
                sobre = AddPaciente.sobre,
                email = AddPaciente.email,
                senha = AddPaciente.senha
            };


            dbContext.Pacientes.Add(pacienteEntity);
            dbContext.SaveChanges();

            return Ok(pacienteEntity);
        }


        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdatePaciente(int id, UpdatePacienteDto atualizaPaciente)
        {
            var attPaciente = dbContext.Pacientes.Find(id);

            if (attPaciente == null)
            {
                return NotFound();
            }

            attPaciente.nome_completo = atualizaPaciente.nome_completo;
            attPaciente.uf = atualizaPaciente.uf;
            attPaciente.municipio = atualizaPaciente.municipio;
            attPaciente.situacao = atualizaPaciente.situacao;
            attPaciente.idade = atualizaPaciente.idade;
            attPaciente.cpf = atualizaPaciente.cpf;
            attPaciente.rg = atualizaPaciente.rg;
            attPaciente.sexo = atualizaPaciente.sexo;
            attPaciente.num_cartao_sus = atualizaPaciente.num_cartao_sus;
            attPaciente.telefone = atualizaPaciente.telefone;
            attPaciente.responsavel = atualizaPaciente.responsavel;
            attPaciente.contato_responsavel = atualizaPaciente.contato_responsavel;
            attPaciente.sobre = atualizaPaciente.sobre;
            attPaciente.email = atualizaPaciente.email;
            attPaciente.senha = atualizaPaciente.senha;

            dbContext.SaveChanges();
            return Ok(attPaciente);
        }


        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeletePaciente(int id)
        {
            var delPaciente = dbContext.Pacientes.Find(id);

            if (delPaciente == null)
            {
                return NotFound();
            }

            dbContext.Pacientes.Remove(delPaciente);
            dbContext.SaveChanges();

            return Ok();
        }
    }
}
