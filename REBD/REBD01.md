#SQL
##DDL

-- 1. Criação da Tabela de Usuários
CREATE TABLE Usuário (
	Id_usuário INT AUTO_INCREMENT,
	nome VARCHAR (100) NOT NULL,
	email VARCHAR (100) NOT NULL UNIQUE,
	senha VARCHAR (225) NOT NULL,
	data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
	data_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
    PRIMARY KEY (id_usuario)
);

-- 2. Criação da Tabela de Tarefas
CREATE TABLE Workspace (
    id_workspace INT AUTO_INCREMENT,
    nome_workspace VARCHAR(100) NOT NULL,
    id_usuario INT NOT NULL,
    categoria_filtrada VARCHAR(50) NOT NULL,
    CONSTRAINT PK_Workspace PRIMARY KEY (id_workspace),
    CONSTRAINT FK_Workspace_Usuario 
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario) ON DELETE CASCADE
);

-- 3. Criação da Tabela de Workspaces
CREATE TABLE Workspace (
Id_workspace INT AUTO_INCREMENT,
nome_workspace VARCHAR(100) NOT NULL,
id_usuario INT NOT NULL,
categoria_filtrada VARCHAR (50) NOT NULL,
CONSTRAINT PK_Workspace PRIMARY KEY (id_workspace),
CONSTRAINT FK_Workspace_Usuario 
FOREIGN KEY (id_usario) REFERENCES Usuario (id_usuario) ON DELETE CASCADE
);

##DML

--Completando a tabela Usuario 
INSERT INTO Usuario (nome, email, senha) VALUES 
('Joao Silva', 'joao.silva@email.com', 'pwd1'), ('Maria Santos', 'maria.santos@email.com', 'pwd2'),
('Pedro Costa', 'pedro.costa@email.com', 'pwd3'), ('Ana Rodrigues', 'ana.rodrigues@email.com', 'pwd4'),
('Miguel Oliveira', 'miguel.oliveira@email.com', 'pwd5'), ('Sofia Martins', 'sofia.martins@email.com', 'pwd6'),
('Carlos Sousa', 'carlos.sousa@email.com', 'pwd7'), ('Barbara Lima', 'barbara.lima@email.com', 'pwd8'),
('Ricardo Pereira', 'ricardo.pereira@email.com', 'pwd9'), ('Ines Carvalho', 'ines.carvalho@email.com', 'pwd10'),
('David Ribeiro', 'david.ribeiro@email.com', 'pwd11'), ('Beatriz Gomes', 'beatriz.gomes@email.com', 'pwd12'),
('Andre Fernandes', 'andre.fernandes@email.com', 'pwd13'), ('Catarina Pinto', 'catarina.pinto@email.com', 'pwd14'),
('Jose Marques', 'jose.marques@email.com', 'pwd15'), ('Diana Almeida', 'diana.almeida@email.com', 'pwd16'),
('Tiago Feliciano', 'tiago.feliciano@email.com', 'pwd17'), ('Sara Antunes', 'sara.antunes@email.com', 'pwd18'),
('Vitor Rocha', 'vitor.rocha@email.com', 'pwd19'), ('Patricia Nunes', 'patricia.nunes@email.com', 'pwd20'),
('Daniel Mendes', 'daniel.mendes@email.com', 'pwd21'), ('Rita Fonseca', 'rita.fonseca@email.com', 'pwd22'),
('Nuno Teixeira', 'nuno.teixeira@email.com', 'pwd23'), ('Claudia Cruz', 'claudia.cruz@email.com', 'pwd24'),
('Goncalo Neves', 'goncalo.neves@email.com', 'pwd25'), ('Marta Cardoso', 'marta.cardoso@email.com', 'pwd26'),
('Filipe Soares', 'filipe.soares@email.com', 'pwd27'), ('Joana Moreira', 'joana.moreira@email.com', 'pwd28'),
('Bruno Machado', 'bruno.machado@email.com', 'pwd29'), ('Francisca Abreu', 'francisca.abreu@email.com', 'pwd30');

-- Completando a tabela Usuario (registos identificando diretamente a categoria)
INSERT INTO Tarefa (descricao, estado, categoria, id_usuario) VALUES
('Estudar para o teste de SIBD', 'Pendente', 'Escola', 1), ('Desenvolver o script SQL', 'Concluído', 'Trabalho', 1),
('Entregar o relatorio de avaliacao', 'Pendente', 'Escola', 2), ('Responder aos emails', 'Concluído', 'Trabalho', 2),
('Fazer exercicios de matematica', 'Pendente', 'Escola', 3), ('Programar a nova API', 'Pendente', 'Trabalho', 3),
('Ler o capitulo 4 de Redes', 'Concluido', 'Escola', 4), ('Reuniao com equipa de design', 'Pendente', 'Trabalho', 4),
('Revisao da tese de mestrado', 'Pendente', 'Escola', 5), ('Atualizar o servidor', 'Concluído', 'Trabalho', 5),
('Preparar apresentacao', 'Pendente', 'Escola', 6), ('Consultoria com o cliente X', 'Pendente', 'Trabalho', 6),
('Fazer os TPC de Fisica', 'Concluido', 'Escola', 7), ('Enviar faturas pendentes', 'Pendente', 'Trabalho', 7),
('Pesquisa para o artigo', 'Pendente', 'Escola', 8), ('Planear calendario editorial', 'Concluído', 'Trabalho', 8),
('Estudar gramatica de Ingles', 'Pendente', 'Escola', 9), ('Reparar o motor do veiculo', 'Pendente', 'Trabalho', 9),
('Resolver lista de algoritmos', 'Concluido', 'Escola', 10), ('Organizar fichas', 'Pendente', 'Trabalho', 10),
('Inscricao nos exames', 'Pendente', 'Escola', 11), ('Lancar campanha de anuncios', 'Concluído', 'Trabalho', 11),
('Comprar material para maquete', 'Pendente', 'Escola', 12), ('Criar identidade visual', 'Pendente', 'Trabalho', 12),
('Praticar Alemao', 'Concluido', 'Escola', 13), ('Prestar suporte no chat', 'Pendente', 'Trabalho', 13),
('Fazer resumo de Historia', 'Pendente', 'Escola', 14), ('Conferir stock da loja', 'Concluído', 'Trabalho', 14),
('Estudar introducao ao Direito', 'Pendente', 'Escola', 15), ('Telefonar para fornecedor', 'Pendente', 'Trabalho', 15);

-- -- Completando a tabela Workspace (registos que ligam utilizadores as suas categorias existentes)
INSERT INTO Tarefa (nome_workspace, id_usuario, categoria) VALUES
('Estudos do Joao', 1, 'Escola'), ('Empresa do Joao', 1, 'Trabalho'),
('Universidade da Maria', 2, 'Escola'), ('Escritorio da Maria', 2, 'Trabalho'),
('Faculdade do Pedro', 3, 'Escola'), ('Freelance do Pedro', 3, 'Trabalho'),
('Aulas da Ana', 4, 'Escola'), ('Emprego da Ana', 4, 'Trabalho'),
('Estudos do Miguel', 5, 'Escola'), ('Desenvolvimento do Miguel', 5, 'Trabalho'),
('Cursos da Sofia', 6, 'Escola'), ('Consultoria da Sofia', 6, 'Trabalho'),
('Escola do Carlos', 7, 'Escola'), ('Faturacao do Carlos', 7, 'Trabalho'),
('Mestrado da Barbara', 8, 'Escola'), ('Gestao da Barbara', 8, 'Trabalho'),
('Secundario do Ricardo', 9, 'Escola'), ('Oficina do Ricardo', 9, 'Trabalho'),
('Estudos da Ines', 10, 'Escola'), ('Clinica da Ines', 10, 'Trabalho'),
('Exames do David', 11, 'Escola'), ('Marketing do David', 11, 'Trabalho'),
('Universidade da Beatriz', 12, 'Escola'), ('Design da Beatriz', 12, 'Trabalho'),
('Linguas do Andre', 13, 'Escola'), ('Suporte do Andre', 13, 'Trabalho'),
('Aulas da Catarina', 14, 'Escola'), ('Loja da Catarina', 14, 'Trabalho'),
('Estudos do Jose', 15, 'Escola'), ('Vendas do Jose', 15, 'Trabalho');
