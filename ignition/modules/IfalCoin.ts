import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("IfalCoinModule", (m) => {
  const fornecimentoInicial = m.getParameter("fornecimentoInicial", 1_000_000n);

  const ifalCoin = m.contract("IfalCoin", [fornecimentoInicial]);

  return { ifalCoin };
});
