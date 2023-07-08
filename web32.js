const contractAddress = "CONTRACT_ADDRESS";
const contractABI = []
    

document.getElementById("userForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const age = document.getElementById("age").value;
    const identityDocument = document.getElementById("identityDocument").files[0];

    if (!name || !phoneNumber || !age || !identityDocument) {
        alert("Please fill in all the fields.");
        return;
    }

    if (window.ethereum) {
        await window.ethereum.enable();
    }

    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(identityDocument);

    reader.onloadend = async () => {
        const buffer = Buffer.from(reader.result);
        const accounts = await web3.eth.getAccounts();
        const result = await contract.methods.registerUser(name, phoneNumber, age, buffer).send({ from: accounts[0] });

        const userId = result.events.UserRegistered.returnValues.userId;
        const barcode = result.events.UserRegistered.returnValues.barcode;

        document.getElementById("result").innerHTML = `User registered with ID: ${userId}, Barcode: ${barcode}`;
    };
});
