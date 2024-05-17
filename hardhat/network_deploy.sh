#!/usr/bin/env bash

# Can't pass --network here in node
# https://github.com/NomicFoundation/hardhat/issues/2449
npx hardhat node

# Wait a bit and then deploy compiled contract to the network
sleep 10 && npx hardhat ignition deploy ./ignition/modules/MyCoinDeploy.js --network localhost