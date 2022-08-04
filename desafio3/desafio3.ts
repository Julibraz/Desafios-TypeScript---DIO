let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let subtraçao = document.getElementById('subtraçao')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString();
  }
}

function subtrairDoSaldo(subtraçao: number) {
    if (campoSaldo) {
      saldoTotal -= subtraçao
      campoSaldo.innerHTML = saldoTotal.toString();
    }
  }

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
        subtrairDoSaldo(Number(subtraçao.value));
});
}

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});