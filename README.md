<div align="center">

<h1>Portfólio - Projeto da disciplina de JavaScript</h1>
<p>Projeto desenvolvido para a aula de JavaScript do professor Pierre Horonato (Unifacisa), apresentando um portfólio coletivo dos alunos (Grupo: Pedros e Washingtton).</p>

</div>

## 🎯 Objetivo
Criar uma página web simples, responsiva e acessível para apresentar perfis, habilidades, projetos e contatos dos integrantes do grupo. Cada membro possui uma página individual em `membros/` com conteúdo estruturado sem dependências externas além de fontes do Google Fonts.

## 🧩 Principais Funcionalidades
- Página inicial com cards dos integrantes.
- Páginas individuais com seções: Sobre, Habilidades, Projetos e Contato.
- Exibição de imagens de projetos com modal (ampliação ao clique) nos perfis.
- Links para LinkedIn, GitHub, email e telefone (quando fornecidos).
- Textos alternativos (`alt`) para imagens para melhorar acessibilidade e SEO.
- Estrutura simples em HTML + CSS + JavaScript vanilla.

## 🗂️ Estrutura de Pastas (resumida)
```
curriculo-professor-Pierre/
├── index.html              # Página inicial com os perfis
├── styles.css              # Estilos globais
├── app.js                  # (Se usado) Script geral / futuro (atualmente mínimo ou vazio)
├── membros/                # Páginas individuais dos integrantes
│   ├── pedroBarbosa.html
│   ├── pedroLira.html
│   ├── pedroPeixoto.html
│   └── washingttonBandeira.html
└── imagens/                # Fotos e imagens de projetos
	├── retrato-*.jpg/jpeg  # Retratos dos integrantes
	└── projetos */         # Pastas por integrante com capturas de tela dos projetos
```

## 🚀 Como Executar Localmente
Não há build ou dependências. Basta abrir o arquivo `index.html` em um navegador moderno.

Opções:
1. Clique duas vezes em `index.html` (abrirá no navegador padrão).
2. Usando uma extensão como Live Server (VS Code) para recarregamento automático.
3. Servir via Python (opcional):
   ```bash
   # Python 3
   python -m http.server 8000
   # Acesse http://localhost:8000
   ```

## ♿ Acessibilidade
- Todas as imagens agora possuem atributo `alt` descritivo.
- Estrutura semântica: uso de `<header>`, `<main>`, `<section>`, `<footer>`.
- Navegação por âncoras para atalhos de seção.
- Modal fecha com tecla ESC nas páginas que utilizam script de ampliação.

## 🔧 Possíveis Melhorias Futuras
- Adicionar modo escuro (dark mode) com preferências via `prefers-color-scheme`.
- Unificar script de modal para evitar duplicação entre páginas dos membros.
- Adicionar um manifesto PWA para permitir instalação.
- Implementar minificação e otimização de imagens.
- Criar componente reutilizável para o cabeçalho e rodapé (Server Side Includes ou template engine futuramente).
- Adicionar testes de acessibilidade (ex: Lighthouse / axe).

## 🤝 Contribuição
Sinta-se livre para abrir *issues* ou *pull requests* com melhorias. Sugestões de organização, acessibilidade e performance são bem-vindas.

### Guia rápido
1. Faça um fork.
2. Crie uma branch: `feat/melhoria-x`.
3. Commit claro: `git commit -m "feat: adiciona modal unificado"`.
4. Abra o PR descrevendo a mudança.

## 📜 Licença
Este projeto está sob a licença indicada no arquivo `LICENSE` (verifique para detalhes).

## 👤 Autores / Grupo
- Pedro Henrique Vieira Barbosa da Silva
- Pedro Lira Bandeira
- Pedro Henrique de Almeida Peixoto
- Washingtton Bandeira

-----
