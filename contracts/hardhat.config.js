require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon: {
      url: "https://polygon-amoy.g.alchemy.com/v2/uW993CHJWsERkThi2lUunxPCZuSFLulG",
      accounts: [
        "b48a1c3a4cffe7dd7ac36742811ded621212416d3cad6e3255b0b348353bc9c1",
      ],
    },
  },
};

