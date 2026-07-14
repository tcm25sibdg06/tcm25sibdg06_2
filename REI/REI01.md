# Especificação de Requisitos

## Problema de informatização:

A gestão de tarefas no quotidiano de estudantes e profissionais é frequentemente realizada de forma 
descentralizada e analógica (através de anotações em papel, blocos de notas ou confiando 
exclusivamente na memória). Como consequência direta, os utilizadores enfrentam a perda frequente 
de prazos, stresse devido à sobrecarga mental, desorganização entre os âmbitos pessoal e 
profissional, e uma total falta de rastreabilidade sobre o seu progresso e produtividade histórica. 
Para resolver este cenário, propõe-se o desenvolvimento da Workity, um Sistema de Informação 
baseado num modelo de dados relacional que automatiza o fluxo de trabalho e a triagem de atividades 
através de categorias bem definidas.

## Restrições:

Cada utilizador possui um identificador único, um email único no sistema e uma password encriptada 
para segurança. Não podem existir tarefas sem um estado associado. O estado de cada tarefa deve 
pertencer estritamente ao conjunto de valores definidos na base de dados: 'Pending' (Pendente), 'In 
Progress' (Em Progresso) ou 'Completed' (Concluído). Uma tarefa pode pertencer a, no máximo, um 
espaço de trabalho (workspace) que partilhe a mesma categoria. Contudo, para garantir 
flexibilidade, o sistema permite que tarefas gerais existam de forma independente (sem workspace 
associado). Se um utilizador for removido do sistema, todos os seus workspaces e tarefas associados 
devem ser eliminados automaticamente (ON DELETE CASCADE). Se um workspace for eliminado, as suas 
tarefas não devem ser apagadas, ficando apenas sem workspace associado (ON DELETE SET NULL). Sempre 
que o utilizador cria uma tarefa com uma categoria nova, o sistema deve detetar essa segmentação e 
criar automaticamente um workspace correspondente a essa categoria para organizar as atividades 
futuras do mesmo tipo.

## Funcionalidades:

O sistema permitirá registar, editar, eliminar e consultar tarefas, bem como atualizar o seu estado 
de progresso. Permitir o registo de utilizadores com data de criação e registo automático de 
atualizações da conta. Associar de forma automática as tarefas aos respetivos workspaces criados 
com base nas categorias (ex: "Escola", "Trabalho").
