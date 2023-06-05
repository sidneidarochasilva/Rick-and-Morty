## Rick and Morty Characters

Este é um projeto Angular que exibe uma lista de personagens da série Rick and Morty, permitindo visualizar detalhes de cada personagem. O projeto possui uma funcionalidade de autenticação básica para proteger as rotas que exibem os personagens.

## Instalação

1- Certifique-se de ter o Node.js instalado em sua máquina.
2 - Clone este repositório para o seu ambiente local.
3 - Navegue até o diretório raiz do projeto.
4 - Execute o comando npm install para instalar as dependências.

## Executando o projeto

Após a instalação, você pode executar o projeto localmente usando o servidor de desenvolvimento.

1 - No diretório raiz do projeto, execute o comando ng serve para iniciar o servidor de desenvolvimento.
2 - Abra o navegador e acesse http://localhost:4200/ para visualizar o aplicativo.

## Funcionalidades

Página de login

A página de login permite que os usuários autentiquem-se fornecendo um nome de usuário e senha.
A autenticação é simulada e aceita as seguintes credenciais:

Usuário: admin
Senha: 1234

Após a autenticação bem-sucedida, o usuário é redirecionado para a página inicial.

Página inicial

A página inicial exibe uma lista de personagens da série Rick and Morty.
Os personagens são obtidos de uma API usando o serviço HomeService.
A lista de personagens é exibida no componente ListCharactersComponent.
O componente ListCharactersComponent suporta rolagem infinita, carregando mais personagens quando o usuário alcança o final da página.
O componente ListCharactersComponent possui uma caixa de pesquisa que filtra os personagens com base no nome.
Ao clicar em um personagem, o usuário é redirecionado para a página de detalhes do personagem.

Página de detalhes do personagem

A página de detalhes do personagem exibe informações detalhadas sobre um personagem específico.
O componente DetailsCharacterComponent é responsável por exibir os detalhes do personagem.
O componente recebe os dados do personagem por meio de um parâmetro na URL.

Proteção de rotas

O aplicativo usa o AuthGuard para proteger as rotas da página inicial e da página de detalhes do personagem.
O AuthGuard verifica se o usuário está autenticado antes de permitir o acesso às rotas protegidas.
Caso o usuário não esteja autenticado, ele é redirecionado para a página de login.
