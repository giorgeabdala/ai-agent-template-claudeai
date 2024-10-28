#!/bin/bash

# Lê o CID usando grep e cut
CID=$(grep -o '"cid": *"[^"]*"' ./logs/latestDeployment.json | cut -d'"' -f4)

# Verifica se conseguimos obter o CID
if [ -z "$CID" ]; then
    echo "Erro: Não foi possível ler o CID do arquivo JSON"
    exit 1
fi

echo "Buscando logs para CID: $CID"

# Executa o comando curl
curl "https://wapo-testnet.phala.network/logs/all/ipfs/$CID"

# Adiciona uma nova linha no final para melhor formatação
echo