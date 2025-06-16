using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimplificaTerapia.Data;
using SimplificaTerapia.Models;
using SimplificaTerapia.Models.Classes;

// localhost:7222/api/auth
[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    public SimplificaDbContext dbContext { get; }

    public AuthController(SimplificaDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto login)
    {
        // Faz a verificação se o usuário é um médico
        var medico = await dbContext.Medicos
            .FirstOrDefaultAsync(m => m.email == login.Email && m.senha == login.Senha);

        if (medico != null)
        {
            return Ok(new
            {
                tipo = "medico",
                id = medico.Id,
                nome = medico.nome_completo,
                email = medico.email
            });
        }

        // Verifica caso seja um paciente
        var paciente = await dbContext.Pacientes
            .FirstOrDefaultAsync(p => p.email == login.Email && p.senha == login.Senha);

        if (paciente != null)
        {
            return Ok(new
            {
                tipo = "paciente",
                id = paciente.Id,
                nome = paciente.nome_completo,
                email = paciente.email
            });
        }

        return Unauthorized("Email ou senha incorretos.");
    }
}
