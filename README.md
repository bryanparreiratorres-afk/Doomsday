# DOOMSDAY NEXUS — Temporal Intelligence

Site responsivo de treinamento do algoritmo de Doomsday, inteiramente em português brasileiro.

## Abrir e usar

**Mais fácil:** abra o arquivo `DOOMSDAY_NEXUS.html` no navegador. É uma versão única, sem necessidade de instalar nada, criar conta ou conectar a um servidor. Usa fontes alternativas quando offline.

**Versão organizada:** abra `index.html` mantendo `styles.css`, `math.js` e `app.js` na mesma pasta. Com internet, Space Grotesk e JetBrains Mono são carregadas do Google Fonts, com alternativas locais caso não estejam disponíveis.

## Funcionalidades

- Dashboard: precisão, tempo médio, questões resolvidas, sequência de acertos e gráficos de evolução da precisão e da velocidade.
- Treinamento: escolha de séculos e intervalo personalizado, inclusive 2100; cinco quantidades ou sessões ilimitadas; sete métodos de seleção de datas; cronômetros opcionais; feedback imediato e raciocínio de Conway.
- Speed Challenge: 20 questões; dificuldades fácil (datas-âncora), médio (até três dias da âncora) e difícil (qualquer data); medição em centésimos.
- Laboratório: ciclo de 400 anos, âncoras dos séculos, decomposição do ano, memorização das datas-âncora, bissextos, resolução completa.
- Calculadora de qualquer data válida de 1500 a 2100, inclusive limites do intervalo.
- Desempenho: histórico local, taxas por século e mês, evolução por sessão, revisão de erros, exportação CSV e exclusão de dados.
- Acessibilidade: atalhos 1–7, Enter, Espaço e Esc; layout responsivo; redução de movimento.

## Regras de calendário

Emprega o **calendário gregoriano proléptico**, também para anos anteriores à introdução histórica do calendário gregoriano (1582). Não interpreta strings de data do navegador para determinar o dia da semana; utiliza cálculo matemático.

Os dados de prática são salvos no `localStorage` do navegador. Em navegadores que restrinjam o armazenamento ao abrir arquivos `file://`, hospede a pasta em um servidor local estático. O site em si não depende de conexão.

## Testes matemáticos

Se tiver Node.js instalado, execute:

```bash
node tests.js
```

Isso compara **todas as 219.511 datas** do intervalo com uma segunda implementação independente do calendário gregoriano, e verifica anos de século, bissextos e casos inválidos.

## Arquivos

- `DOOMSDAY_NEXUS.html`: versão única, pronta para abrir.
- `index.html`: página principal da versão modular.
- `styles.css`: visual azul-neon e responsividade.
- `math.js`: cálculos gregorianos puros.
- `app.js`: páginas, treinamento, cronômetros, interação e dados.
- `tests.js`: testes matemáticos automatizados.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `doomsday-nexus`).
2. Extraia o arquivo ZIP e envie **todos os arquivos da pasta extraída para a raiz do repositório**. O `index.html` deve ficar na raiz.
3. Em **Settings → Pages → Build and deployment**, escolha **Deploy from a branch**, branch **main** e pasta **/(root)**. Salve.
4. Depois de publicado, abra o endereço mostrado pelo GitHub Pages.

> Nota: o GitHub não publica o conteúdo de um ZIP enviado como um único arquivo. Extraia-o antes de fazer upload dos arquivos.
