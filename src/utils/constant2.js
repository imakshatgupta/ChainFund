import Web3 from 'web3';
import CrowdABI from "./CrowdFunding.json";
const contractABI = CrowdABI.abi;
const web3 = new Web3(window.ethereum);

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const crowdContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export default crowdContract;
 