# BoxTips for Naga
# BoxTips do Naga

## Index
## Indice

### 1. Introduction
### 1. Introdução

Basically it serves to show new items into your layout.
A simplified way of a tutorial, to indicate new items, or a brief explanation of the element.
Easy to use, and simple to understand.

Basicamente serve para na introdução de novos itens em seu layout. 
Um modo simplificado de um tutorial, para indicar novos itens, ou uma explição breve sobre o elemento.
Facil de usar, e simples de entender.

### 2. Requirements
### 2. Requisitos

What's necessary to utilize the `BoxTips`
O que é necessario para utilizar o `BoxTips`

* Jquery 3.* (tested only on 3.*)
* Jquery 3.* (testado apenas no 3.*)


### 3. Begin
### 3. Começando

Call for `BoxTipsNaga.js` and` BoxTipsNaga.css` in your HTML
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

In `BoxTip.AddTip` you give the class of the element you want to highlight and the text you want to pass.
No `BoxTip.AddTip` você passa a classe do elemento que deseja destacar e o texto que deseja passar.

	```
	BoxTip.AddTip("CLASSE", "MENSAGEM");
	```

In `BoxTip.Init` it is necessary to start` BoxTips`
No `BoxTip.Init` é necessario para começar o `BoxTips`

	```
	BoxTip.Init();
	```
	
Ready!
Pronto!


### 4. Features
### 4. Funcionalidades

* Start the tips
* Iniciar as dicas

	```
	BoxTip.Init();
	```
	
* Add tips
* Adicionar dicas

	```
	BoxTip.AddTip("CLASSE", "MENSAGEM");
	```
	
* Pick up the index he finds
* Pegar o indice que ele se encontra

	```
	var index = BoxTip.Index;
	```

* Picking up the elements that will receive the tips, is an ARRAY.
* Pegar os elementos que vão receber as dicas, é um ARRAY.

	```
	var elements = BoxTip.Element;
	```
	
* If you do not want the BoxTips to repeat, it caches the displayed tips.
* Se desejar que o BoxTips não se repita, ele salva no cache as dicas exibidas.

	```
	BoxTip.Cache = true;
	```
	
* To clear the cache
* Para limpar o cache

	```
	BoxTip.Refresh();
	```

### 5. Example	
### 5. Exemplo
	
In `\ Example` contains a test template using` BoxTips`.
em `\Example` contem um modelo de teste utilizando o `BoxTips`.