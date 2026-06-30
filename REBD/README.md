## Tabelas


### USUARIO

Nome de atributo |	Descrição|	Domínio	Por Omissão|	Automático	|Nulo|
-----------------|-----------|---------------------|--------------|----|
|Id_usuário	|Identificador único do usuário|	INT, PK, AUTO_INCREMENT|	- |sim|	não|
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
|nome_tarefa| nome descritivo| VARCHAR(100)|-|não|sim|
|Id_workspace |	Define se é escola, trabalho|	FK, INT|	-|sim	|sim|
|Id_usuário	|Ref. ao id_usuário|	FK, INT|	-| 	sim	|não|

### WORKSPACE


Nome de atributo |	Descrição|	Domínio	Por Omissão|	Automático	|Nulo|
-----------------|-----------|---------------------|--------------|----|
|Id|	Identificador único do workspace|	PK, INT|	-|sim|	não|
|nome_workspace|	Nome descritivo|	VARCHAR(100)|	-|	não|	sim|
|id_usuario	|Dono do workspace	|FK, INT	|-|sim	|não|
|id_tipo	|O tipo de tarefa que o workspace filtra	|FK, INT	|-|sim	|não|







