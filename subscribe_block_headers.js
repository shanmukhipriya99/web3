const Web3 = require('web3')
let ws = 'wss://mainnet.infura.io/ws/v3/758990e5645944eab4d465a8eb6098d6'
var web3 = new Web3(ws);

web3.eth.subscribe('newBlockHeaders', (error, blockheader) => {
  if(!error){
    console.log(blockheader)
  }else{
    console.log(error)
  }
})