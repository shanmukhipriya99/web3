let Web3 = require('web3')
let url = "https://mainnet.infura.io/v3/758990e5645944eab4d465a8eb6098d6"
let web3 = new Web3(url)

let address = "0x883486E6cc2F0f9eC7409E43E7Af24061fB2d472"

web3.eth.getBalance(address, function(error, balance){
  if(!error)
  {
    console.log(web3.utils.fromWei(balance, 'ether'))
  }
  else{
    console.log(error)
  }
})