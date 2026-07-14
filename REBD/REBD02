### Introdução

## Descrição do Trabalho

No quotidiano de estudantes e profissionais, a gestão do volume de atividades diárias é frequentemente realizada de forma descentralizada e analógica (através de anotações em papel, blocos de notas e em muitos casos, confiando exclusivamente na memória). Como consequência direta, os utilizadores enfrentam a perda frequente de prazos, stresse devido à sobrecarga mental, desorganização entre os âmbitos pessoal e profissional, e uma total falta de rastreabilidade sobre o seu progresso e produtividade histórica.

Para resolver este cenário, propõe-se o desenvolvimento da Workity, um Sistema de Informação baseado num modelo de dados relacional que automatiza o fluxo de trabalho  e a triagem de atividades. A ferramenta servirá para registar, atualizar e monitorizar tarefas, além de permitir a criação de espaços de trabalho (workspaces) inteligentes e segmentados por categorias (como "Escola" ou "Trabalho").A grande vantagem desta solução informática é a eliminação do esforço manual de triagem, oferecendo ao utilizador uma clareza visual que potencia o foco e reduz as distrações. Adicionalmente, a transição para uma base de dados normalizada garante a integridade da informação em tempo real, reduz o erro humano e otimiza o tempo, transformando o caos de dados dispersos num ambiente altamente eficiente e seguro.

O sistema funciona como um organizador inteligente através de regras bem definidas na base de dados. Cada pessoa cria um perfil único caracterizado por um número de identificação automático (id), nome, email (que deve ser único no sistema) e password. A conta regista ainda, de forma automática, a data de criação e a data da última atualização do perfil.

A partir daí, o utilizador pode criar os seus espaços de trabalho e registar as suas tarefas. Cada espaço de trabalho possui um id, um nome descritivo e está obrigatoriamente associado a uma categoria e ao utilizador que o criou. As tarefas, por sua vez, possuem uma descrição, uma categoria e um estado de progresso predefinido, que pode navegar entre os estados de "Pendente" (Pending), "Em Progresso" (In Progress) ou "Concluído" (Completed).

O sistema possui uma lógica aplicacional que atua de forma integrada: cada tarefa criada está diretamente vinculada ao seu respetivo utilizador e pode ser associada a um espaço de trabalho específico daquela categoria. Caso o utilizador defina uma nova categoria, o sistema deteta essa segmentação, associando os registos de forma a garantir que todas as tarefas futuras do mesmo tipo fiquem visualmente organizadas no local correto.

Para potenciar a tomada de decisões e a monitorização de produtividade, a base de dados conta com um conjunto de vistas (views) estruturadas. Estas componentes computam em tempo real estatísticas cruciais, tais como o resumo de produtividade por utilizador, a listagem de tarefas pendentes, a distribuição de atividades por cada estado de progresso e a percentagem de conclusão de tarefas por categoria, separando eficazmente o lado académico do profissional num único ecossistema seguro.

## Descrição dos requisitos do utilizador 

### Entidades
USUÁRIO (nome, email, Id, password, data_criação, data_update;
TAREFA (Id, descrição, estado, categoria);
WORKSPACE (id, nome, categoria);

### Associações: 
tem (USUÁRIO, TAREFA)        1: N   Parcial/ Total
Possui (USUÁRIO, WORKSPACE)  1: N   Parcial/ Total
Agrupa (WORKSPACE, TAREFA)   1: N   Parcial/ Parcial












