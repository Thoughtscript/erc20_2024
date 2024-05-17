const { buildModule } = require("@nomicfoundation/hardhat-ignition");

module.exports = buildModule("MyCoinDeploymentModule", (m) => {

  const myCoin = m.contract(
    "MyCoin",
    require("../artifacts/contracts/MyCoin.sol/MyCoin.json"),
  );

  return {
    myCoin,
  };
});