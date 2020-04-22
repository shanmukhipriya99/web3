var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const url = 'https://ropsten.infura.io/v3/758990e5645944eab4d465a8eb6098d6'
const web3 = new Web3(url)

// console.log(web3.eth.accounts.create())
// console.log(web3.eth.accounts.create())

// { address: '0x7b9051557bc2D1Cc836C1E0840A643FD5F65850E',
//   privateKey: '0xa541c81befecbc29197e3b0377614d8bb8e774b8b00deb2f42d44bb3e7a75de0',
// }
//{ address: '0xD48B43d655BE61fed9aeb2a6b2B1dDac80b9117e',
//  privateKey: '0xfa62a07897eb8b53695408d9e4107e5b8a61d15dac65c314afeeb092a378b43f',

const account1 = '0x7b9051557bc2D1Cc836C1E0840A643FD5F65850E'
const privateKey1 = Buffer.from("a541c81befecbc29197e3b0377614d8bb8e774b8b00deb2f42d44bb3e7a75de0", "hex")
const account2 = '0xD48B43d655BE61fed9aeb2a6b2B1dDac80b9117e'

// web3.eth.getBalance(account1, (error, balance) => {
//   console.log('account 1 balance ', balance)
// })

// web3.eth.getBalance(account2, (error, balance) => {
//   console.log('account 2 balance ', balance)
// })

web3.eth.getTransactionCount(account1, (error, txCount) => {
    // build a transaction object
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      to: account2,
      value: web3.utils.toHex(web3.utils.toWei('0.3', 'ether')),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
  
    // console.log(txObject)
  
    // sign transaction with private key of sender
    // const tx = new Tx(txObject)
    const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})
    tx.sign(privateKey1)
  
    // serialize the transaction
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')
  
    // broadcast transaction to the network
    web3.eth.sendSignedTransaction(raw, (error, txHash) => {
      console.log("txHash: " , txHash)
    })
  })