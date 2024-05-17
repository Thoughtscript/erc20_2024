const M = require("@nomicfoundation/hardhat-ignition/modules")

module.exports = M.buildModule("MyCoinDeploymentModule", (m) => {

  const myCoin = m.contract(
    "MyCoin",
    require("../../artifacts/contracts/MyCoin.sol/MyCoin.json"),
  );

  return {
    myCoin,
  };
});