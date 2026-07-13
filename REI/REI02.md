
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

<img width="1566" height="760" alt="DIAGRAMA OFICIAL" src="https://github.com/user-attachments/assets/96be34a1-f984-4ee1-ac09-7d54ec071075" />
