require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon: {
      url: "https://polygon-amoy.g.alchemy.com/v2/uW993CHJWsERkThi2lUunxPCZuSFLulG",
      accounts: [
        "e1224d4d5e30316e7ebbd0fc563728b5a4efdd7c027dd7ab4441febbc68cd4b0"
      ],
    },
  },
};

