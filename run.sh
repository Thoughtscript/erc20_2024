#!/usr/bin/env bash

rm -rf ./hardhat/contracts && cp -R contracts ./hardhat

rm -rf ./react/contracts && cp -R contracts ./react

sleep 5 && docker-compose up