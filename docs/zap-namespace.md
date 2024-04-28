# Zap RPC API calls


This page documents the JSON-RPC calls and responses for the `zap_` namespace API.


::: tip 
💡 Check out the live API call page at: [https://zapinfra.com/api-docs/zap-namespace](https://zapinfra.com/api-docs/zap-namespace)

:::


<!-- ------------------------------------------------------------------------------------------------------------- -->
## Get Nonce Asset Id:

Return the nonce asset id for a key=1, for the Zap wallet owned by the EVM address. The default nonce asset key 
is always one (1). This is the nonce assets that is used for base assets transfers using an ethereum Legacy or 
Typed (EIP-1559) signed and RLP encoded transaction.

**RRC Method:**

`zap_get_assetidKey1`


**Request Body:**

```
{
  "method": "zap_get_assetidKey1",
  "params": ["0x26011688d573fb822676647fd6c9f4f02817696c"],
  "id": 1,
  "jsonrpc": "2.0"
}
```


**CURL example:**
```console
curl https://rpcbeta5.zapinfra.com \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"method":"zap_get_assetidKey1","params":["0x26011688d573fb822676647fd6c9f4f02817696c"],"id":1,"jsonrpc":"2.0"}'

```


<br/>

**Response Data:**
```
{
 "jsonrpc": "2.0",
  "result": "0x55aa72ab97ae1554371eb07c8a86ce4c262318a527d7c71bb5315ae776cbde2c",
  "id": "1"
}
```




<!-- ------------------------------------------------------------------------------------------------------------- -->
## Get Zap Predicate Address:

Returns the Address of the Zap wallet on Fuels beta-5 network, for the specified EVM address.

**RRC Method**

`zap_getPredicateAddress`


**Request Body:**
```
{
  "method": "zap_getPredicateAddress",
  "params": [
    "0x26011688d573fb822676647fd6c9f4f02817696c"
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
  --data '{"method":"zap_getPredicateAddress","params":["0x26011688d573fb822676647fd6c9f4f02817696c"],"id":1,"jsonrpc":"2.0"}'

```

<br/>


**Response Data:**
```
{
  "jsonrpc": "2.0",
  "result": "e339c47441194dd6d448bb1514124e9767891d32ccf49683dddcd16ce1501e4b",
  "id": "1"
}
```
