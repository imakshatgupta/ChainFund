import Web3 from "web3";
import TransactionsABI from "./Transactions.json";
const contractABI = TransactionsABI.abi;
const web3 = new Web3(window.ethereum);

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const transactionsContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

async function makeCryptoPayment(receiverAddress, amount) {
  console.log(receiverAddress, amount);
  const amountCrypto = amount * 1000000000000000000;
  console.log(amountCrypto)
  const accounts = await web3.eth.getAccounts();
  const amountInWei = web3.utils.toWei(amount.toString(), 'ether');

const transaction = await transactionsContract.methods
    .addToBlockchain(receiverAddress, amountCrypto)
    .send({
        from: accounts[0],
        value: amountInWei,
    });
  console.log("Transaction Hash:", transaction.transactionHash);
}

async function getBalance() {
  const accounts = await web3.eth.getAccounts();
  const balance = await web3.eth.getBalance(accounts[0]);
  console.log("Balance in Wei:", balance);
  console.log("Balance in Ether:", web3.utils.fromWei(balance, "ether"));
}


export { makeCryptoPayment , getBalance};