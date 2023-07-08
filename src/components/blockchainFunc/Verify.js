import "./Verify.css"
import Navbar from "../Navbar"
// import {ethers} from "ethers"
const Verify=({state})=>{
    const user=async (e)=>{
      e.preventDefault();

const {contract}=state;
const name=document.querySelector("#name").value;
const phone=document.querySelector("#phone").value;
const add=document.querySelector("#add").value;
const aadhar=document.querySelector("#aadhar").value;
console.log(name,phone,aadhar,contract)

// const value={value:ethers.utils.parseEther(.0001)}
const transaction=await contract.setDetails(name,phone,add,aadhar)
await transaction.wait()
// let Id=await contract.get(aadhar)
// await Id.wait()
alert(`user created with id `)
console.log(transaction.input)
console.log("transaction is defined")
    }

    return <div>
    
    <Navbar/>
     <div class="main-block">
      
      <div class="left-part">
    
        <h1 style={{color:"antiquewhite"}}>Register yourself</h1>
        {/* <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p> */}
       
      </div>
      <form onSubmit={user}>
        <div class="title">
          <i class="fas fa-pencil-alt"></i> 
          <h2>Register here</h2>
        </div>
        <div class="info">
          <input class="fname" type="text" id="name" name="name" placeholder="Full name"/>
          <input type="number" id="phone" name="name" placeholder="Enter phone number"/>
          <input type="text" id="add" name="name" placeholder="Enter your DOB"/>
          <input type="number" id="aadhar"  name="name" placeholder="Enter your  aadhar"/>
       
        </div>
        
        <button type="submit" href="/">Submit</button>
      </form>
    </div>
    </div>
};
export default Verify;
