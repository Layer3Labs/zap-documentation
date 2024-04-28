# Wallet initialization


Currently the Zap predicate wallet supports Base asset (ETH) transactions using Ethereum Legacy and/or Typed 
(EIP-1559) Signed transactions in RLP encoded format. Before being able to make base asset transactions the wallet itself 
needs to be initialized. The result of the initialization procedure mints "nonce tokens" from Zaps Nonce Manager Contract, which are sent to the predicate wallet.


You can use the Zap frontend to initialize a wallet, provided you have an ethereum browser extension wallet/signer containing the private 
key of your signer. This will be used as the "Owner" of the newly created Zap wallet.



::: tip 
💡 Initialize your wallet here: [https://zapinfra.com/devpage-walletinit](https://zapinfra.com/devpage-walletinite)

:::

::: warning
This is live on Fuels beta-5 testnet. All assets held within a Zap wallet are only for testnet purposes.
:::

<br/>


## Nonce asset Id calculation:

To calculate the Nonce (token) AssetId of the following example is given taking the variables:


```
32 byte "the key" or sub_id, e.g., 
    0000000000000000000000000000000000000000000000000000000000000001 

32 bytes padded evm address, e.g., 
    000000000000000000000000ff03ffd5d3e881c60a91eaa30c67d03aec025c49 

32 bytes the NonceManager3's own ContractId, e.g., 
    554b720ec67604b2de0d8691e133587da2ab24415e4147c0fcd4a96182e6a5e2


The AssetId is calculated by this by:
h1 = sha256("padded_evm_address":"key")
h2 = sha256("contractid":"h1")
AssetId = h2

```

    example:
```
8a1aa9c4f2b55e2991a44f390d27c12617b2a9b0e9d48546f06b709374f3dfd8 = sha256(
    000000000000000000000000ff03ffd5d3e881c60a91eaa30c67d03aec025c49,
    0000000000000000000000000000000000000000000000000000000000000001)
```


[Check hash of the above 👆](https://emn178.github.io/online-tools/sha256.html?input_type=hex&input=000000000000000000000000ff03ffd5d3e881c60a91eaa30c67d03aec025c490000000000000000000000000000000000000000000000000000000000000001&hmac_input_type=utf-8)
    


```
abc353c7e76cf320f2c80f3da34c61009d222ef90d2d8244d158df283e30efc1 = sha256(
    554b720ec67604b2de0d8691e133587da2ab24415e4147c0fcd4a96182e6a5e2,
    8a1aa9c4f2b55e2991a44f390d27c12617b2a9b0e9d48546f06b709374f3dfd8)

```

[Check hash of the above 👆](https://emn178.github.io/online-tools/sha256.html?input_type=hex&input=554b720ec67604b2de0d8691e133587da2ab24415e4147c0fcd4a96182e6a5e28a1aa9c4f2b55e2991a44f390d27c12617b2a9b0e9d48546f06b709374f3dfd8&hmac_input_type=utf-8)

```
AssetId = abc353c7e76cf320f2c80f3da34c61009d222ef90d2d8244d158df283e30efc1
```