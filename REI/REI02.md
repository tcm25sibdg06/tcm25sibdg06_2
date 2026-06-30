# Esquema Conceptual

## Modelo Entidade Associação 

***Entidades:***
USUÁRIO (nome, email, Id, senha, data {que criou a conta e update});

TAREFA (Id, textoDescritivo, estado);

TIPO_TAREFA (Id_tipo, nomeTipo);

WORKSPACE (Id_workspace, nome_workspace, id_usuario, id_tipo);


***Associações:***
tem (USUÁRIO, TAREFA) 		       1: N		Parcial/ Total	

Possui (USUÁRIO, WORKSPACE)        1: N		Parcial/ Total	

Agrupa (WORKSPACE, TIPO_TAREFA)    1: N		Total/ Total	


## Diagrama Entidade Associação
