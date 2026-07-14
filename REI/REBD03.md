### Do Modele EA a Relação

## Processo 
A transformação do modelo Entidade-Tipo para o modelo relacional foi realizada com base nas regras 
estudadas. Após criar os modelos entidades-tipo e estabelecer as respetivas associações presentes 
abaixo:

## Entidades-Tipo:
USERS(id, name, email, password, created_at, updated_at)
WORKSPACES(id, name, category)
TASKS(id, description, status, category)

## Associações:
  .tem (USERS, TASKS)         1: N   Parcial/ Total - (Um user pode ter vários workspaces, mas um 
workspace pertence obrigatoriamente a um user)

  .Possui (USERS, WORKSPACE)   1: N   Parcial/ Total - (Um user pode ter várias tarefas, mas uma 
tarefa pertence obrigatoriamente a um user)

  .Agrupa (WORKSPACE, TAREFA)    1: N   Parcial/ Parcial - (Um workspace pode ter várias tarefas, e 
uma tarefa pode (opcionalmente) pertencer a um workspace)

Cada entidade do modelo EA foi convertida diretamente numa relação, mantendo os seus atributos e 
identificadores e dando origem às respetivas tabelas no modelo relacional.

## Associações 1:N
1. Tem (USERS, TASKS) - 1: N - Parcial/ Total
A regra diz que devemos escolher a relação correspondente à entidade participante do lado N em R. Neste caso, a relação TASKS.

Incluimos como chave estrangeira em TASKS a chave principal de USERS (id_usuario que referencia id).

TASKS(id, description, status, category, id_usuario, id_workspace)
Chave própria: id;
Chave estrangeira: id_usuario (referencia USERS.id);

2. Possui (USUÁRIO, WORKSPACE) - 1: N - Parcial/ Total
Seguindo a mesma regra para o lado N, escolhemos a relação WORKSPACE.

Incluimos como chave estrangeira em WORKSPACES a chave principal de USERS (id_usuario que referencia id).

WORKSPACES(id, name, category, id_usuario)
Chave própria: id;
Chave estrangeira: id_usuario (referencia USERS.id);

3. Agrupa (WORKSPACE, TASKS) - 1: N - Parcial/ Parcial
Seguindo a regra para o lado N, escolhemos a relação TASKS. Como a participação do lado de TASKS é 
parcial (a tarefa pode não ter workspace), a chave estrangeira aceitará valores nulos (NULL).

Incluimos como chave estrangeira em TASKS a chave principal de WORKSPACE (id_usuario que referencia 
id).

TASKS(id, description, status, category, id_usuario, id_workspace)
Chave própria: id;
Chaves estrangeiras: id_usuario (referencia USERS.id) + id_workspace (referencia WORKSPACES.id, 
permitindo nulo);




