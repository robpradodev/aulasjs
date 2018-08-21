let prog;
let program = [];
let option;

program[1] = ['1 - Digite'];
program[2] = ['2 - Contador'];
program[3] = ['3 - Empréstimo'];
program[4] = ['4 - Aleatório'];
program[5] = ['5 - Escadinha'];
program[6] = ['6 - Quadrilha Agostina'];


option = prompt("Escolha uma opção \n" + program.join('\n'));

option = option.trim();

while (isNaN(Number(option))|| (option === '') || (option === null) || (option.length === 0) || (option > program[length])) {
    option = prompt("Digite uma opção");
    option = option.trim();
}


if (option === '1') {

    prog = true;

    while (prog === true) {

        let numero = (prompt("Digite o numero:"));

        while (isNaN(Number(numero)) || (numero === '')|| (numero === null) || (numero.length === 0)) {
            alert("Valor inválido");
            numero = (prompt("Digite o numero:"));
        }

        if (numero > 10) {
            alert("É um número maior que 10");
        } else if (numero < 10) {
            alert("É um número menor que 10");
        } else {
            alert("É o número 10");
        }

        prog = confirm("Deseja executar o programa?");
    }

    option = prompt("Escolha uma opção \n" + program.join('\n'));

    option = option.trim();

    while (isNaN(Number(option)) || (option === '') || (option === null) || (option.length === 0) || (option > program[length])) {
        option = prompt("Digite uma opção");
        option = option.trim();
    }

} else if (option === '2') {

    option = prompt("Escolha uma opção \n" + program.join('\n'));

    option = option.trim();

    while (isNaN(Number(option)) || (option === '') || (option === null) || (option.length === 0) || (option > program[length])) {
        option = prompt("Digite uma opção");
        option = option.trim();
    }

} else if (option === '3') {

    prog = true;

    while (prog === true) {
        let renda;
        let emprestimo;
        let parcelas;
        let valorParcela;
        let valorFinalParcela;
        let valorTotal;
        let idade = prompt("Digite a idade");



        while ((idade < 21) || (idade > 60) || (isNaN(Number(idade))) || (idade === '')|| (idade === null) || (idade.length === 0)) {
            alert("Idade inválida");
            idade = prompt("Digite a idade");
        }

        if ((idade >= 21) && (idade <= 60)) {

            renda = prompt("Digite a renda mensal");
            while ((renda < 1500) || (isNaN(Number(renda))) || (renda === '')|| (renda === null) || (renda.length === 0)) {
                alert("Renda inválida. Só aceitamos renda a partir de R$ 1500,00");
                renda = prompt("Digite a renda mensal");
            }

            if (renda >= 1500) {

                emprestimo = prompt("Digite o valor do empréstimo. Só emprestamos acima de 1000 reais");
                while ((emprestimo < 1000) || (emprestimo > (renda * 20)) || (isNaN(Number(emprestimo))) || (emprestimo === '')|| (emprestimo === null) || (emprestimo.length === 0)) {
                    alert(`Valor para empréstimo inválido. Só emprestamos valores acima de 1000 e de até 20 vezes o valor da renda. No seu caso, até R$ ${renda*20}`);
                    emprestimo = prompt("Digite o valor do empréstimo. Só emprestamos acima de 1000 reais");
                }

                if ((emprestimo >= 1000) && (emprestimo <= (renda * 20))) {

                    alert(`Empréstimo de R$ ${emprestimo} aprovado!`);

                    parcelas = prompt("Entre 1 e 36 vezes, em quantas parcelas deseja pagar?");

                    while ((parcelas < 1) || (parcelas > 36) || (isNaN(Number(parcelas))) || (parcelas === '')|| (parcelas === null) || (parcelas.length === 0)) {
                        alert("Digite um número válido de parcelas. Deve ser entre 1 e 36!");
                        parcelas = prompt("Entre 1 e 36 vezes, em quantas deseja pagar?");
                    }

                    if ((parcelas >= 1) && (parcelas <= 36)) {
                        valorParcela = emprestimo / parcelas;
                        valorFinalParcela = valorParcela + ((valorParcela / 100) * 6);
                        valorTotal = valorFinalParcela * parcelas;
                        alert(`Com juros a 6%, cada parcela será de R$ ${valorFinalParcela} \n e o valor total do seu empréstimo, com juros, será de R$ ${valorTotal}`);

                    }

                }
            }


        }

        prog = confirm("Deseja executar o programa?");
    }

    option = prompt("Escolha uma opção \n" + program.join('\n'));

    option = option.trim();

    while (isNaN(Number(option)) || (option === '') || (option === null) || (option.length === 0) || (option > program[length])) {
        option = prompt("Digite uma opção");
        option = option.trim();
    }



} else if (option === '4') {
    option = prompt("Escolha uma opção \n" + program.join('\n'));

    option = option.trim();

    while (isNaN(Number(option)) || (option === '') || (option === null) || (option.length === 0) || (option > program[length])) {
        option = prompt("Digite uma opção");
        option = option.trim();
    }
} else if (option === '5') {
    option = prompt("Escolha uma opção \n" + program.join('\n'));

    option = option.trim();

    while (isNaN(Number(option)) || (option === '') || (option === null) || (option.length === 0) || (option > program[length])) {
        option = prompt("Digite uma opção");
        option = option.trim();
    }
} else if (option === '6') {
    option = prompt("Escolha uma opção \n" + program.join('\n'));

    option = option.trim();

    while (isNaN(Number(option)) || (option === '') || (option === null) || (option.length === 0) || (option > program[length])) {
        option = prompt("Digite uma opção");
        option = option.trim();
    }

}