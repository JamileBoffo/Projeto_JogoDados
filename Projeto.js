const prompt = require('prompt-sync')();
console.clear();
console.log();


let replay

do{
    let lista = [];
    let vitory = [];

    console.log(`
    Sejam bem vindos ao Jogo de Dados,
    as regas são simples, quem tirar o maior número durante a rodada ganha,
    e quem acumular mais vitórias vence o jogo.
    `)
    let pergunta = +prompt('Quantas rodadas serão? ');
    let users = +prompt('Quantos jogadores jogarão? ');

    console.log();

    for (let i = 0; i < users; i++){
        let player = {
            nome: prompt(`Digite seu nome Jogador ${i+1}: `),
            dado: 0,
            vitoria: 0,
        }
        lista.push(player);
    }

    console.log();

    for (let i = 0; i < pergunta; i++){
        let valor = [];
        for (let i of lista) {
            i.dado = Math.trunc(Math.random() * 5) + 1;
            valor.push(i.dado);
            valor.sort((a, b) => b - a);
        }
        for (let i of lista) {
            if (i.dado == valor[0]) {
                i.vitoria += 1
                console.log(`O ganhador desta rodada é ${i.nome}. Parabéns!!`);
                console.log(lista);
                continue;
            }
        }
    }

    for (let i of lista) {
        vitory.push(i.vitoria);
    }

    vitory.sort((a, b) => b - a);

    for (let i of lista) {
        if (i.vitoria == vitory[0]) {
            console.log(`
    E O GRANDE VENCEDOR DO JOGO DE DADOS É...
    ...
    ...
    ...
    ...
    ...
    ...
    ...
    ${i.nome.toUpperCase()}.`);
            break;
        }
    }

    console.log();

    console.log(lista);

    console.log();

    replay = prompt('Deseja jogar novamente? ').toUpperCase();

    console.log();
    
} while(replay == 'SIM' || replay =='S')