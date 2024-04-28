# Eth RPC API calls

This page documents the JSON-RPC calls and responses for the `eth_` namespace API.

::: tip 
💡 Check out the live API call page at: [https://zapinfra.com/api-docs/zap-namespace](https://zapinfra.com/api-docs/eth-namespace)

:::

<!-- ------------------------------------------------------------------------------------------------------------- -->
## Get Balance:

Returns the balance of given account address (as a hexidecimal number) in wei.

**RRC Method:**

`eth_getBalance`


**Request Body:**

```
{
  "method": "eth_getBalance",
  "params": "["0x26011688d573fb822676647fd6c9f4f02817696c", "safe"]",
  "id": "1",
  "jsonrpc": "2.0"
}
```

**CURL example:**
```console
curl https://rpcbeta5.zapinfra.com \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_getBalance","params":["0x26011688d573fb822676647fd6c9f4f02817696c", "safe"],"id":1,"jsonrpc":"2.0"}'
```

<br/>

**Response Data:**
```
{
  "jsonrpc": "2.0",
  "result": "0xa5ffa6",
  "id": "1"
}
```

<!-- ------------------------------------------------------------------------------------------------------------- -->
## Get Transaction Count:

Returns the number of transactions sent from an address.

**RRC Method:**

`eth_getTransactionCount`

**Request Body:**
```
{
  "method": "eth_getTransactionCount",
  "params": [
    "0x26011688d573fb822676647fd6c9f4f02817696c",
    "latest"
  ],
  "id": 1,
  "jsonrpc": "2.0"
}
```

**CURL example:**
```console
curl https://rpcbeta5.zapinfra.com \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_getTransactionCount","params":["0x26011688d573fb822676647fd6c9f4f02817696c", "latest"],"id":1,"jsonrpc":"2.0"}'
```


<br/>

**Response Data:**
```
{
  "jsonrpc": "2.0",
  "result": "0x1",
  "id": "1"
}
```


<!-- ------------------------------------------------------------------------------------------------------------- -->
## Get block number:

Returns the current latest block number in hexidecial format.

**RRC Method:**

`eth_blockNumber`

**Request Body:**
```
{
  "method": "eth_blockNumber",
  "params": [],
  "id": 1,
  "jsonrpc": "2.0"
}
```

**CURL example:**
```console
curl https://rpcbeta5.zapinfra.com \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_blockNumber","id":1,"jsonrpc":"2.0"}'
```

<br/>

**Response Data:**
```
{
  "jsonrpc": "2.0",
  "result": "0x218",
  "id": "1"
}
```


<!-- ------------------------------------------------------------------------------------------------------------- -->
## Get block by number:

Returns information with respect to a specific block by number.

**RRC Method:**

`eth_getBlockByNumber`

**Request Body:**
```
{
  "method": "eth_getBlockByNumber",
  "params": [
    "0x1d",
    "false"
  ],
  "id": 1,
  "jsonrpc": "2.0"
}
```

**CURL example:**
```console
curl https://rpcbeta5.zapinfra.com \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_getBlockByNumber","params":["0x1d"],"id":1,"jsonrpc":"2.0"}'
```

<br/>

**Response Data:**
```
{
  "jsonrpc": "2.0",
  "result": {
    "hash": "0x9e12c98227944377185f98d6344217cbdba7b7a22bb0a2fd60c6c40f1b2a4281",
    "parentHash": "0x38272f0d109f3aa409da0f42b68a3e0d79a3628f7796518d2bcd4a8164483e26",
    "sha3Uncles": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "miner": null,
    "stateRoot": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "transactionsRoot": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "receiptsRoot": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "number": "0x1ea5",
    "gasUsed": "0x0",
    "gasLimit": "0x0",
    "extraData": "0x",
    "logsBloom": null,
    "timestamp": "0x658675b3",
    "difficulty": "0x0",
    "totalDifficulty": null,
    "uncles": [],
    "transactions": [
      "0x281deb3483b752a78600e09bb8a1de54e0d9bf7ddcd59be48a5aca3b559f93ef"
    ],
    "size": null,
    "mixHash": null,
    "nonce": "0x0000000000000000",
    "baseFeePerGas": null
  },
  "id": 1
}
```


<!-- ------------------------------------------------------------------------------------------------------------- -->
## Get max priority fee per gas:

Get the priority fee, or 'tip' needed to be included in a block.


**RRC Method:**

`eth_maxPriorityFeePerGas`

**Request Body:**

```
{
  "method": "eth_maxPriorityFeePerGas",
  "params": [],
  "id": 1,
  "jsonrpc": "2.0"
}
```

**CURL example:**
```console
curl https://rpcbeta5.zapinfra.com \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"eth_maxPriorityFeePerGas","params":[],"id":1,"jsonrpc":"2.0"}'
```

<br/>

**Response Data:**
```
{
  "jsonrpc": "2.0",
  "result": "0xf4240",
  "id": "1"
}
```
