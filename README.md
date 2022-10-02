<p align="center">
  <img src="/public/logo192.png" width="200px" title="hover text">
</p>

# Base React JS
## Sobre

### Intuito
Ter uma boa base para iniciar projetos, pois o projeto oriundo do ReactJS(create-react-app) é distante do ideal.

### Como foi feito
Criado para(eu) e outros desenvolvedores para iniciar o projeto a partir de uma base mais solida, com certas bibliotecas e certas adições simples

### Adicionais
- No futuro haverá mais mudanças, como exemplo para o futuro, ícones.
- Pessoalmente, não tenho grande prenteção para o projeto, mas deixei publico para caso interesse/ajude algum outro desenvolvedor.
- É perceptivel como seria demorado/ruim não ter essa base que possa dizer basica para iniciar o projeto.
- No futuro desejo criar na mesma ideia um projeto em React Native, com bibliotecas como React Native Paper, Axios, efeitos/botões nativos.

## Detalhes
### Como iniciar

1. Abra interface de comando dentro do diretório já descompactado.
2. Utilize `npm install` para instalar as dependências da aplicação.
3. Digite `npm start` para a inicialização do projeto.
- <b>Opcional: </b>Adicionar as extensões:
- SCSS Formatter
- JavaScript and TypeScript Nightly
- ES7+ React/Redux/React-Native snippets

### Tecnologias

 - Desenvolvido com o Framework <b>React JS</b>.
 - Utilizado a tecnologia <b>Typescript</b>.
 - Rotas a partir da biblioteca <b>React Router Dom</b>
 - Alguns icones com a biblioteca <b>React Icons</b>
 - Estilização com a biblioteca <b>Node Sass</b>
 
## Como usar algumas das ferramentas

### Router

#### Estrutura atual
```
import { 
  BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
 
 
  <Router>
    {/* Algum header */} 
    <Routes>
      <Route path='/rota1' element={ <ElementoRota1 /> }/>
      <Route path='/rota2' element={ <ElementoRota2 /> }/>
    </Routes>
  </Router>
```
Normalmente utilizado em um nível alto do projeto

#### Redirecionamento
```
  import { Link } from 'react-router-dom';
  <Link to='/projetos'>{/* Rota */}</Link>
```
Pode ser interpretado como um <a> para o React Router Dom 

#### Receber qual a pagina atual
```
  import { useLocation } from 'react-router-dom'
  
  const location = useLocation();
  
  //const isHome = location.pathname == '/';
```
Pode ser interpretado como um <a> para o React Router Dom 
#### Adicionais
- É otimo por sua otimização, já que faz a troca de paginas a partir do Javascript puro, ou seja, quando trocamos de tela na verdade apenas o DOM (O html em sí) é alterado.
- A troca de tela com navigator ou para receber qual a atual rota não pode ser utilizada fora da render dos elementos.
<a href="https://v5.reactrouter.com/web/guides/quick-start">Mais sobre a Lib</a>


### SCSS

#### Estrutura atual
```
// import
import './index.scss';

```
Importação padrão, como um arquivo css.
```
// syntax - example

// Criação de variavel 
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

// Aplicando variaveis
body {
  font: 100% $font-stack;
  color: $primary-color;
}

// Estilização com filhos do nav de forma mais facilitada
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

#### Adicionais
- Toda estrtutura com o CSS padrão será interpretado mesmo no arquivo .scss
<a href="https://sass-lang.com/guide">Mais sobre a Lib</a>

