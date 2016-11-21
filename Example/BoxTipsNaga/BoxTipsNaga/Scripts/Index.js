$(function () {
    BoxTip.AddTip(".box1", "Este elemento é quadrado e vermelho.");
    BoxTip.AddTip(".box2", "Este botão pertence ao grupo dos felinos");
    BoxTip.AddTip(".box3", "E este aqui é azul, clique sobre ele para concluir.", "Aviso");
    BoxTip.AddTip(".box4", "Mensagem 1", "Aviso");
    BoxTip.AddTip(".box5", "este teste é em um botao tipo Button, em tags de input nao funciona o tips pois ele nao deixa eu criar dentro o tips", "Aviso");
    BoxTip.AddTip(".box6", "Preciso aprimorar este tips para que quando colocar uma classe igual ele coloque o tip de acordo com ele na tela", "Aviso");
    BoxTip.AddTip(".box7", "Preciso aprimorar este tips para que quando colocar uma classe igual ele coloque o tip de acordo com ele na tela", "Aviso");
    BoxTip.AddTip(".box8", "Preciso aprimorar este tips para que quando colocar uma classe igual ele coloque o tip de acordo com ele na tela", "Aviso");
    //BoxTip.Cache = true;
    BoxTip.Refresh();
    BoxTip.Init();
})