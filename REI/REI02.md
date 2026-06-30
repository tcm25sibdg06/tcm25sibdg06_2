# Esquema Conceptual

## Modelo Entidade Associação 

### Entidades:
USUÁRIO (nome, email, Id, password, data_criação, data_update;

TAREFA (Id, descrição, estado,categoria,id_worspace,id_usuário);

TIPO_TAREFA (Id_tipo, nomeTipo);

WORKSPACE (id, nome, id_usuario, categoria);



### Associações:
tem (USUÁRIO, TAREFA) 		       1: N		Parcial/ Total	

Possui (USUÁRIO, WORKSPACE)        1: N		Parcial/ Total	

Agrupa (WORKSPACE, TIPO_TAREFA)    1: N		Total/ Total	


## Diagrama Entidade Associação
