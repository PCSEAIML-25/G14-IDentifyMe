// const {ethers}= require("hardhat")
const hre = require("hardhat");

async function main() {
const IdentificationFactory=await hre.ethers.getContractFactory("Identification");
console.log("Deploying....")
const identify=await IdentificationFactory.deploy()
await identify.waitForDeployment()
console.log(`contract deployed at ${identify.getAddress()}`)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
