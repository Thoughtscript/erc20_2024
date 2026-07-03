import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import artifact from '../../artifacts/contracts/MyCoin.sol/MyCoin.json'

export default buildModule("MyCoin", (m) => {
  const myCoin = m.contract("MyCoin", artifact);

  return { myCoin };
});
