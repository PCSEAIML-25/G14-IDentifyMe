import abi from "./Identification.json"
import  {ethers} from "ethers"
import Verify from"./blockchainFunc/Verify"
import {useEffect, useState} from"react"
function App(){
  const [state, setstate] = useState({
    provider:null,
    signer:null,
    contract:null
  })
  useEffect(()=>{
    const connectWallet=async ()=>{
      const contractAddress="0x0c6390af2cc4c39ac44fcaa40b68c56bae12df71"
      const contractAbi=abi.abi;
      try {
        const {ethereum}=window;

        if(ethereum){
          const account= await ethereum.request({method:"eth_requestAccounts",})
        }
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer =provider.getSigner();
        const contract = new ethers.Contract(contractAddress,contractAbi,signer)
        setstate({provider,signer,contract})
      } catch (error) {
        console.log(error)
      }    };
      connectWallet();
  },[]);
  console.log(state)
  return <div>
    <Verify state={state}/>
  </div>
}
export default App;