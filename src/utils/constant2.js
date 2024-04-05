import Web3 from 'web3';
import CrowdABI from "./CrowdFunding.json";
const contractABI = CrowdABI.abi;
const web3 = new Web3(window.ethereum);

const contractAddress = '0x5bc502008c4647a2fc54c0247844b3e75e6919e5';
const crowdContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export default crowdContract;
 