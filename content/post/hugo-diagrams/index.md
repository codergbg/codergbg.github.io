---
title: "在 Hugo Stack 中集成 Mermaid 和 MarkMap"
description: 不修改 Hugo Stack 主题文件，优雅的引入 Mermaid 和 MarkMap。
slug: hugo-diagrams
date: 2023-04-19 21:59:22+0000
image: cover.jpg
categories:
  - None
tags:
  - None
---

集成参考了 Google 的 [docsy](https://github.com/google/docsy) 中的集成方式。

主题 [hugo-theme-stack](https://stack.jimmycai.com/) 中没有集成 Mermaid，仅集成了 Katex，需要画图的时候就要自己引入 Mermaid 。

由于使用 module 的方式使用主题，故并不想因为为了引入 Mermaid 而修改主题模板。Stack 提供了两个空的模板来支持自定义，所以就通过这两个自定义模板来引入。

- `layouts/partials/head/custom.html`
- `layouts/partials/footer/custom.html`

另外，为了方便后续维护，也同时使用 [docsy](https://github.com/google/docsy) 里的方式引入了 Katex。

## 集成方式

主要的工作是添加钩子模板和引入相关的JavaScript文件。

### 新增文件

将[本项目](https://github.com/alecthw/alecthw.github.io)中的以下文件，直接拷贝到你的项目中。

``` bash
# 钩子模板
layouts/_default/_markup/render-codeblock-chem.html
layouts/_default/_markup/render-codeblock-markmap.html
layouts/_default/_markup/render-codeblock-math.html
layouts/_default/_markup/render-codeblock-mermaid.html

# 主题可自定义的模板文件
layouts/partials/head/custom.html
layouts/partials/footer/custom.html

# JavaScript文件集中引入
layouts/partials/scripts.html

# JavaScript文件和CSS文件
assets/js/markmap.js
assets/js/mermaid.js
static/js/prism.js
static/css/prism.css
```

### 新增相关配置

config\_default\params.yaml

```yaml
markmap:
  enable: true
mermaid:
  enable: true
  theme: default
  flowchart:
    diagramPadding: 20
katex:
  enable: true
  mhchem:
    enable: true
```

PS: 如果不是使用的`Configuration Directory`，要把配置加到`params`下。

## 使用示例

### Mermaid

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### MarkMap

````markmap
# markmap

## Links

- <https://markmap.js.org/>
- [GitHub](https://github.com/gera2ld/markmap)

## Related

- [coc-markmap](https://github.com/gera2ld/coc-markmap)
- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)

## Features

- links
- **inline** ~~text~~ *styles*
- multiline
  text
- `inline code`
-
    ```js
    console.log('code block');
    ```
- Katex - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
````

### Mathjax

行间公式：$$\sum_{i=0}N\int_{a}{b}g(t,i)\text{d}t$$

行内公式：\\(y=ax+b\\)

`math` 代码块：

```math
\tag*{(1)} P(E) = {n \choose k} p^k (1-p)^{n-k}
```

### mhchem

```chem
\tag*{(2)} \ce{Zn^2+  <=>[+ 2OH-][+ 2H+]  $\underset{\text{amphoteric hydroxide}}{\ce{Zn(OH)2 v}}$  <=>[+ 2OH-][+ 2H+]  $\underset{\text{tetrahydroxozincate}}{\ce{[Zn(OH)4]^2-}}$}
```
