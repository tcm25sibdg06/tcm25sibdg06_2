USUARIO

Nome de atributo |	Descrição|	Domínio	Por Omissão|	Automático	|Nulo|
-----------------|-----------|---------------------|--------------|----|
Id_usuário	|Identificador único do usuário|	INT, PK, AUTO_INCREMENT|	- |sim|	não|
|nome|	Nome do usuário|	VARCHA|	-|	não|	sim|
|email|	Email utilizado para login|	VARCHAR	|-|	não|	não|
|senha	|Senha de segurança	|VARCHAR	|-|não|	não|
|Data_criação	|Data e hora de criação do perfil|	DATETIME	|-|	sim	|sim|
|Data_update	|Última vez que o perfil foi modificado|DATETIME|	-|	sim|	sim|

