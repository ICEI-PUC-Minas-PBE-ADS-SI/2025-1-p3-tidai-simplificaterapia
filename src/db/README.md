## Arquivo .sql

```sql
CREATE TABLE Medico (
    id_medico INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(150),
    uf VARCHAR(2),
    municipio VARCHAR(100),
    situacao VARCHAR(20),
    crm VARCHAR(30),
    cpf VARCHAR(14) UNIQUE,
    rg VARCHAR(20),
    sexo VARCHAR(20),
    especialidade VARCHAR(100),
    valor_por_hora DECIMAL(10,2),
    formacao VARCHAR(200),
    sobre TEXT,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255)
);

CREATE TABLE Paciente (
    id_paciente INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(150),
    uf VARCHAR(2),
    municipio VARCHAR(100),
    situacao VARCHAR(20),
    data_nascimento DATE,
    cpf VARCHAR(14) UNIQUE,
    rg VARCHAR(20),
    sexo VARCHAR(20),
    num_cartao_sus VARCHAR(30),
    telefone VARCHAR(20),
    responsavel VARCHAR(100),
    contato_responsavel VARCHAR(20),
    sobre TEXT,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255)
);

CREATE TABLE Consulta (
    id_consulta INT PRIMARY KEY AUTO_INCREMENT,
    data_consulta DATE,
    horario TIME,
    duracao VARCHAR(20),
    situacao VARCHAR(20),
    tipo_atendimento VARCHAR(30),
    forma_pagamento VARCHAR(30),
    plano_saude BOOLEAN,
    id_medico INT,
    valor DECIMAL(10,2),
    id_paciente INT,
    observacoes TEXT,
    FOREIGN KEY (id_medico) REFERENCES Medico(id_medico),
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id_paciente)
);

CREATE TABLE LaudoReceita (
    id_laudo_receita INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(50),
    id_medico INT,
    id_paciente INT,
    data_emissao DATE,
    data_vencimento DATE,
    medicamentos TEXT,
    tipo VARCHAR(30),
    FOREIGN KEY (id_medico) REFERENCES Medico(id_medico),
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id_paciente)
);

CREATE TABLE Pagamento (
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    id_consulta INT,
    valor_pago DECIMAL(10,2),
    data_pagamento DATE,
    forma_pagamento VARCHAR(30),
    status_pagamento VARCHAR(20),
    id_medico INT,
    id_paciente INT,
    FOREIGN KEY (id_consulta) REFERENCES Consulta(id_consulta),
    FOREIGN KEY (id_medico) REFERENCES Medico(id_medico),
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id_paciente)
);

CREATE TABLE Avaliacao (
    id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
    id_medico INT,
    id_paciente INT,
    nota INT,
    comentario TEXT,
    data_avaliacao DATE,
    FOREIGN KEY (id_medico) REFERENCES Medico(id_medico),
    FOREIGN KEY (id_paciente) REFERENCES Paciente(id_paciente)
);
```
