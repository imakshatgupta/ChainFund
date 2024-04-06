require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/hrLV5V3EYV_QrDoZfITz8K3Ef3Gfh0Tf",
      accounts: [
        "cfe7ba741ce1327cd75373701e71e399341676f0f53985a86b558fdf3823442e",
      ],
    },
  },
};

