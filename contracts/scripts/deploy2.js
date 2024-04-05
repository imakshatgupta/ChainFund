const hre = require('hardhat');

const main = async () => {
  console.log("Deploying contracts...")
    const campaignFactory = await hre.ethers.getContractFactory("CrowdFunding");
    const campaignContract = await campaignFactory.deploy();
  
    await campaignContract.deployed();
  
    console.log("campaign address: ", campaignContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();

