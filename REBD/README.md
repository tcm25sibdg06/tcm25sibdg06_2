## Tabelas


### USUARIO

Nome de atributo |	Descrição|	Domínio	Por Omissão|	Automático	|Nulo|
-----------------|-----------|---------------------|--------------|----|
|id	|Identificador único do usuário|	INT, PK, AUTO_INCREMENT|	- |sim|	não|
|nome|	Nome do usuário|	VARCHAR(100)|	-|	não|	sim|
|email|	Email utilizado para login|	VARCHAR(100)	|-|	não|	não|
|password	|password de segurança	|VARCHAR(100)	|-|não|	não|
|Data_criação	|Data e hora de criação do perfil|	DATETIME	|-|	sim	|sim|
|Data_update	|Última vez que o perfil foi modificado|DATETIME|	-|	sim|	sim|

### TAREFAS

Nome de atributo |	Descrição|	Domínio	Por Omissão|	Automático	|Nulo|
-----------------|-----------|---------------------|--------------|----|
|id|	Identificador único da tarefa	|PK, INT|	-|	sim|	não|
|descrição|	Descrição/ observações	|TEXT	|-|	não|	sim|
|estado|	Estado das tarefas	|ENUM	|-|	sim|	não|
|categoria| nome descritivo| VARCHAR(100)|-|não|sim|
|Id_workspace |	Define se é escola, trabalho|	FK, INT|	-|sim	|sim|
|Id_usuário	|Ref. ao id_usuário|	FK, INT|	-| 	sim	|não|

### WORKSPACE


Nome de atributo |	Descrição|	Domínio	Por Omissão|	Automático	|Nulo|
-----------------|-----------|---------------------|--------------|----|
|Id|	Identificador único do workspace|	PK, INT|	-|sim|	não|
|nome|nome do worspace|varchar(100)|-|não|sim|
|categoria|	Nome descritivo|	VARCHAR(100)|	-|	não|	sim|
|id_usuario	|Dono do workspace	|FK, INT	|-|sim	|não|


## Vistas
```sql
-- ============================================================
--  Gestor de Tarefas — Views
-- ============================================================

USE task_manager;


-- resumo de cada utilizador
CREATE OR REPLACE VIEW resumo_utilizadores AS
SELECT
    u.id,
    u.name AS nome,
    u.email,
    COUNT(DISTINCT w.id) AS total_workspaces,
    COUNT(DISTINCT t.id) AS total_tarefas
FROM users u
LEFT JOIN workspaces w ON w.id_usuario = u.id
LEFT JOIN tasks      t ON t.id_usuario = u.id
GROUP BY u.id, u.name, u.email;


-- workspaces com o nome do dono
CREATE OR REPLACE VIEW workspaces_com_dono AS
SELECT
    w.id,
    w.name     AS workspace,
    w.category AS categoria,
    u.name     AS utilizador,
    u.email
FROM workspaces w
JOIN users u ON u.id = w.id_usuario;


-- todas as tarefas com utilizador e workspace
CREATE OR REPLACE VIEW tarefas_completas AS
SELECT
    t.id,
    t.description AS descricao,
    t.status,
    t.category    AS categoria,
    u.name        AS utilizador,
    w.name        AS workspace
FROM tasks t
JOIN  users      u ON u.id = t.id_usuario
LEFT JOIN workspaces w ON w.id = t.id_workspace;


-- só as tarefas pendentes
CREATE OR REPLACE VIEW tarefas_pendentes AS
SELECT
    t.id,
    t.description AS descricao,
    t.category    AS categoria,
    u.name        AS utilizador,
    w.name        AS workspace
FROM tasks t
JOIN  users      u ON u.id = t.id_usuario
LEFT JOIN workspaces w ON w.id = t.id_workspace
WHERE t.status = 'Pending';


-- contagem de tarefas por status, por utilizador
CREATE OR REPLACE VIEW tarefas_por_status AS
SELECT
    u.name                        AS utilizador,
    SUM(t.status = 'Pending')     AS pendentes,
    SUM(t.status = 'In Progress') AS em_progresso,
    SUM(t.status = 'Completed')   AS concluidas,
    COUNT(t.id)                   AS total
FROM users u
LEFT JOIN tasks t ON t.id_usuario = u.id
GROUP BY u.id, u.name;


-- estatisticas por categoria
CREATE OR REPLACE VIEW estatisticas_categorias AS
SELECT
    category                                                   AS categoria,
    COUNT(*)                                                   AS total,
    SUM(status = 'Pending')                                    AS pendentes,
    SUM(status = 'Completed')                                  AS concluidas,
    ROUND(SUM(status = 'Completed') * 100.0 / COUNT(*), 1)    AS percentagem_concluida
FROM tasks
GROUP BY category;
```






