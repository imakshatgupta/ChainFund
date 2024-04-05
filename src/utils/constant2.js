import Web3 from 'web3';
import CrowdABI from "./CrowdFunding.json";
const contractABI = CrowdABI.abi;
const web3 = new Web3(window.ethereum);

const contractAddress = '0x1f58ec03c9474e8a31de9cd8f1ea412f58a4bf3f';
const crowdContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export default crowdContract;
 