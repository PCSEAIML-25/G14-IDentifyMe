const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = 'YOUR_MNEMONIC'; 
const infuraApiKey = 'YOUR_INFURA_API_KEY'; 

const contract = require('./build/contracts/YourContract.json');

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonic
  },
  providerOrUrl: `https://mainnet.infura.io/v3/${infuraApiKey}` 
});

const web3 = new Web3(provider);

async function deploy() {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying from account:', accounts[0]);

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = contract.networks[networkId];
    const instance = new web3.eth.Contract(contract.abi);

    const deployTransaction = instance
      .deploy({
        data: '0x' + contract.bytecode,
        arguments: []
      })
      .send({
        from: accounts[0],
        gas: 2000000, // Adjust gas price as desired
      });

    deployTransaction.on('transactionHash', (hash) => {
      console.log('Deployment transaction hash:', hash);
    });

    const deployedContract = await deployTransaction;
    console.log('Contract address:', deployedContract.options.address);
  } catch (error) {
    console.error('Error deploying contract:', error);
  }

  provider.engine.stop();
}

deploy();
