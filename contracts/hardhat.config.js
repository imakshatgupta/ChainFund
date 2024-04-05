require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    polygon: {
      url: "https://polygon-amoy.g.alchemy.com/v2/uW993CHJWsERkThi2lUunxPCZuSFLulG",
      accounts: [
        "cfe7ba741ce1327cd75373701e71e399341676f0f53985a86b558fdf3823442e",
      ],
    },
  },
};

