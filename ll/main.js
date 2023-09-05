
    // Definindo uma classe ContaCorrente para representar a conta
    class ContaCorrente {
      constructor(nome, saldoInicial) {
        this.nome = nome;
        this.saldo = saldoInicial;
      }

      // Função para depositar dinheiro na conta
      depositar(valor) {
        if (valor > 0) {
          this.saldo += valor;
          console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
          console.log("O valor do depósito deve ser maior que zero.");
        }
      }

      // Função para sacar dinheiro da conta
      sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
          this.saldo -= valor;
          console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
          console.log("Saldo insuficiente ou valor inválido.");
        }
      }

      // Função para verificar o saldo atual
      verificarSaldo() {
        console.log(`Saldo atual da conta de ${this.nome}: R$${this.saldo}`);
      }
    }

    // Exemplo de uso:
    const minhaConta = new ContaCorrente("João", 1000);

    minhaConta.verificarSaldo();
    minhaConta.depositar(500);
    minhaConta.sacar(200);
    minhaConta.sacar(1500);
    minhaConta.verificarSaldo();
