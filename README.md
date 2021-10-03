# Tutorial **st.js**

### Linguagem

Mais instruções no index.html

- [x] pt-BR
- [ ] en-US

st.js é uma biblioteca JavaScript projetada para simplificar projetos de desenvolvimento web:

Fácil de aprender e fácil de usar.
Projetado para desenvolvimento rápido de aplicativos.
Projetado para todos os dispositivos: PC, Tablet e Celular.
Grátis para usar. Sem licenças.

# O que o **st.js** pode fazer?
Abaixo está uma lista de algumas das coisas que o **st.js** pode fazer:

**>** *Ocultar e mostrar qualquer elemento HTML*

# Como
**st.js** é muito fácil de usar.

Basta adicionar um link para **st.js** em sua página da web:
```html
<script src="js/st.js"></script>
```

# Seletores st.js

Seletores **st.js**
**st.js** seleciona elementos HTML e executa ações no (s) elemento (s) selecionado (s):

st.ação(*seletor*)
<ul>
  <li>A ação () é realizada no (s) elemento (s) selecionado (s)</li>
  <li>O ( *seletor* ) seleciona o (s) elemento (s) HTML</li>
</ul>
Exemplo:

st.esconder('p')

Para selecionar um elemento com um id específico, escreva um caractere hash, seguido pelo id do elemento HTML:

Oculte um elemento com id = "Londres":

st.esconder('#Londres')

Ocultar todos os elementos com class = *"cidade"*:

st.esconder('.cidade')

# Mais exemplos de seletores

Seletor:

("*") - Seleciona todos os elementos<br>
(this)	Seleciona o elemento HTML atual<br>	
("p.intro") - Seleciona todos os < p > elementos com class="intro"<br>
("div p") - Seleciona todos os elementos <p> dentro de todos os elementos < div ><br>
("div p:first-child") - Seleciona o primeiro elemento <p> dentro de todos os elementos < div ><br>
("[href]") - Seleciona todos os elementos com um atributo href<br>
("a[target=_blank]") - Seleciona todos os elementos < a > com um valor de atributo de destino(target) igual a "_blank"<br>
("p:nth-child(even)") - Seleciona todos os elementos pares < p ><br>
