
# Esquema Conceptual

## Modelo Entidade Associação 

### Entidades:
USUÁRIO (nome, email, Id, password, data_criação, data_update;

TAREFA (Id, descrição, estado, categoria);

WORKSPACE (id, nome, categoria);



### Associações:
tem (USUÁRIO, TAREFA) 		       1: N		Parcial/ Total	

Possui (USUÁRIO, WORKSPACE)        1: N		Parcial/ Total	

Agrupa (WORKSPACE, TAREFA)    1: N		Parcial/ Parcial


## Diagrama Entidade Associação

<img width="1347" height="810" alt="WhatsApp Image 2026-07-13 at 20 19 35" src="https://github.com/user-attachments/assets/b9838e4a-4a3c-4ebc-8ae5-351effaee2f9" />

