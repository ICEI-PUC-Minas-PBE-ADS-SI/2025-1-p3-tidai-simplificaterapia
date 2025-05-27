using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimplificaTerapia.Data;
using SimplificaTerapia.Models;
using SimplificaTerapia.Models.Classes;

namespace SimplificaTerapia.Controllers
{
    // localhost:xxxx/api/medicos
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        public SimplificaDbContext dbContext { get; }

        public MedicosController(SimplificaDbContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet]
        public IActionResult GetAllMedicos()
        {
            var TodosOsMedicos = dbContext.Medicos.ToList();

            return Ok(TodosOsMedicos);
        }


        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetMedicoPorId(int id)
        {
            var medicoChamado = dbContext.Medicos.Find(id);

            if (medicoChamado == null)
            {
                return NotFound();
            }
            return Ok(medicoChamado);
        }


        [HttpPost]
        public IActionResult AddMedicos(AddMedicoDto AddMedico)
        {
            var medicoEntity = new Medico()
            {
                nome_completo = AddMedico.nome_completo,
                uf = AddMedico.uf,
                municipio = AddMedico.municipio,
                situacao = AddMedico.situacao,
                crm = AddMedico.crm,
                cpf = AddMedico.cpf,
                rg = AddMedico.rg,
                sexo = AddMedico.sexo,
                especialidade = AddMedico.especialidade,
                valor_por_hora = AddMedico.valor_por_hora,
                formacao = AddMedico.formacao,
                sobre = AddMedico.sobre,
                email = AddMedico.email,
                senha = AddMedico.senha
            };


            dbContext.Medicos.Add(medicoEntity);
            dbContext.SaveChanges();

            return Ok(medicoEntity);
        }


        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateMedico(int id, UpdateMedicoDto atualizaMedico)
        {
            var attMedico = dbContext.Medicos.Find(id);

            if (attMedico == null)
            {
                return NotFound();
            }

            attMedico.nome_completo = atualizaMedico.nome_completo;
            attMedico.uf = atualizaMedico.uf;
            attMedico.municipio = atualizaMedico.municipio;
            attMedico.situacao = atualizaMedico.situacao;
            attMedico.crm = atualizaMedico.crm;
            attMedico.cpf = atualizaMedico.cpf;
            attMedico.rg = atualizaMedico.rg;
            attMedico.sexo = atualizaMedico.sexo;
            attMedico.especialidade = atualizaMedico.especialidade;
            attMedico.valor_por_hora = atualizaMedico.valor_por_hora;
            attMedico.formacao = atualizaMedico.formacao;
            attMedico.sobre = atualizaMedico.sobre;
            attMedico.email = atualizaMedico.email;
            attMedico.senha = atualizaMedico.senha;

            dbContext.SaveChanges();
            return Ok(attMedico);
        }


        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteMedico(int id)
        {
            var delMedico = dbContext.Medicos.Find(id);

            if (delMedico == null)
            {
                return NotFound();
            }

            dbContext.Medicos.Remove(delMedico);
            dbContext.SaveChanges();

            return Ok();
        }

    }
}
