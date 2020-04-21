let Web3 = require('web3')
let url = "https://rinkeby.infura.io/v3/758990e5645944eab4d465a8eb6098d6"
let web3 = new Web3(url)

let address = "0x6aac5e7c12d3c9259cff8e10b5bbdb1064c382a5"

web3.eth.getBalance(address, function(error, balance){
  if(!error)
  {
    console.log(web3.utils.fromWei(balance, 'ether'))
  }
  else{
    console.log(error)
  }
})