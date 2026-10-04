# IfalCoin (IFAL)

Token ERC-20 feito para a atividade "Minha Criptomoeda" do minicurso, usando Hardhat 3 e OpenZeppelin.

- Nome: IfalCoin
- Símbolo: IFAL
- Fornecimento inicial: 1.000.000 IFAL
- Extras: burn (ERC20Burnable) e uma página para consultar saldo

## Escolhas

Escolhi o nome IfalCoin e o símbolo IFAL por causa do IFAL. O fornecimento inicial é de 1.000.000 de tokens, que é um número redondo e fácil de conferir nos testes e na MetaMask (o dono ainda pode criar mais com o mint). Como extra, coloquei a função de queimar tokens usando o ERC20Burnable da OpenZeppelin e fiz uma página HTML simples com ethers.js para consultar o saldo de um endereço.

## Como rodar

```sh
npm install
npx hardhat compile
npx hardhat test
```

Deploy local (em dois terminais):

```sh
npx hardhat node
npx hardhat ignition deploy ignition/modules/IfalCoin.ts --network localhost
```

Deploy na Sepolia (precisa do `SEPOLIA_RPC_URL` e do `SEPOLIA_PRIVATE_KEY` no keystore):

```sh
npx hardhat ignition deploy ignition/modules/IfalCoin.ts --network sepolia
```

## Página de saldo

Fica em `dapp/index.html`. Para a MetaMask funcionar, a página precisa ser aberta por um servidor, por exemplo `npx http-server dapp`.

## Entrega

- [x] Código do contrato: `contracts/IfalCoin.sol`
- [x] Print dos testes passando: `evidencias/01-testes-passando.png`
- [x] Endereço do contrato na rede local: `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- [ ] Endereço do contrato na Sepolia
- [ ] Print do saldo na MetaMask
- [ ] Link do contrato no Sepolia Etherscan
- [x] Parágrafo explicando as escolhas (seção Escolhas)
