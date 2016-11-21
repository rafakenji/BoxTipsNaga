# BoxTips for Naga - ENGLISH
## Index

1. Index
2. Requirements
3. Begin
4. Funcionalidades
5. Example

### 1. Introduction

Basically it serves to show new items into your layout.
A simplified way of a tutorial, to indicate new items, or a brief explanation of the element.
Easy to use, and simple to understand.

### 2. Requirements

What's necessary to utilize the `BoxTips`

* Jquery 3.* (tested only on 3.*)

### 3. Begin

Call for `BoxTipsNaga.js` and` BoxTipsNaga.css` in your HTML
	```
	<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title></title>
			<link href="Content/BoxTipsNaga.css" rel="stylesheet" />
		</head>
		<body>
			<div class="Tip"></div>
				
			<script src="Scripts/Jquery/jquery-3.1.1.min.js"></script>
			<script src="Scripts/BoxTipsNaga.js"></script>
			<scrip>
				$(function () {
					BoxTip.AddTip(".Tip", "Mensagem que deseja passar");
					BoxTip.Init();
				})
			</script>
		</body>
	</html>
	```

In `BoxTip.AddTip` you give the class of the element you want to highlight and the text you want to pass.
	```
	BoxTip.AddTip("CLASSE", "MENSAGEM");
	```

In `BoxTip.Init` it is necessary to start` BoxTips`
	```
	BoxTip.Init();
	```
	
Ready!

### 4. Features

* Start the tips
	```
	BoxTip.Init();
	```
	
* Add tips
	```
	BoxTip.AddTip("CLASSE", "MENSAGEM");
	```
	
* Pick up the index he finds
	```
	var index = BoxTip.Index;
	```

* Picking up the elements that will receive the tips, is an ARRAY.
	```
	var elements = BoxTip.Element;
	```
	
* If you do not want the BoxTips to repeat, it caches the displayed tips.
	```
	BoxTip.Cache = true;
	```
	
* To clear the cache
	```
	BoxTip.Refresh();
	```

### 5. Example	

In `\ Example` contains a test template using` BoxTips`.
	
	

# BoxTips do Naga - PORTUGUÊS
## Indice

1. Introdução
2. Requisitos
3. Começando
4. Funcionalidades
5. Exemplo

### 1. Introdução

Basicamente serve para na introdução de novos itens em seu layout. 
Um modo simplificado de um tutorial, para indicar novos itens, ou uma explição breve sobre o elemento.
Facil de usar, e simples de entender.

### 2. Requisitos

O que é necessario para utilizar o `BoxTips`

* Jquery 3.* (testado apenas no 3.*)

### 3. Começando

Chame pelo `BoxTipsNaga.js` e `BoxTipsNaga.css` no seu HTML.
	```
	<!DOCTYPE html>
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title></title>
			<link href="Content/BoxTipsNaga.css" rel="stylesheet" />
		</head>
		<body>
			<div class="Tip"></div>
				
			<script src="Scripts/Jquery/jquery-3.1.1.min.js"></script>
			<script src="Scripts/BoxTipsNaga.js"></script>
			<scrip>
				$(function () {
					BoxTip.AddTip(".Tip", "Mensagem que deseja passar");
					BoxTip.Init();
				})
			</script>
		</body>
	</html>
	```

No `BoxTip.AddTip` você passa a classe do elemento que deseja destacar e o texto que deseja passar.
	```
	BoxTip.AddTip("CLASSE", "MENSAGEM");
	```

No `BoxTip.Init` é necessario para começar o `BoxTips`
	```
	BoxTip.Init();
	```

Pronto!

### 4. Funcionalidades

* Iniciar as dicas
	```
	BoxTip.Init();
	```
	
* Adicionar dicas
	```
	BoxTip.AddTip("CLASSE", "MENSAGEM");
	```
	
* Pegar o indice que ele se encontra
	```
	var index = BoxTip.Index;
	```

* Pegar os elementos que vão receber as dicas, é um ARRAY.
	```
	var elements = BoxTip.Element;
	```
	
* Se desejar que o BoxTips não se repita, ele salva no cache as dicas exibidas.
	```
	BoxTip.Cache = true;
	```
	
* Para limpar o cache
	```
	BoxTip.Refresh();
	```

### 5. Exemplo

em `\Example` contem um modelo de teste utilizando o `BoxTips`.