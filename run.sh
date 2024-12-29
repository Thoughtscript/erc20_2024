#!/usr/bin/env bash

rm -rf ./hardhat/contracts && cp -R contracts ./hardhat

rm -rf ./react/contracts && cp -R contracts ./react

# If using Docker Compose Engine V2 uncomment:
# sleep 5 && docker compose up
sleep 5 && docker-compose up