# BARK Protocol - Web3 Fundraising Platform Contracts

The Web3 Fundraising Platform is a decentralized fundraising solution built on both the Ethereum and Polygon networks. It allows users to create and manage fundraising campaigns, accept donations, and withdraw funds securely.

## Contracts

### Ethereum Contracts

#### Fundraiser Contract
The Fundraiser contract is the core component of the Web3 Fundraising Platform on the Ethereum network. It enables users to create fundraising campaigns, accept donations in Ether, and withdraw funds. Key functionalities include:

- **Create Campaign:** Initialize a new fundraising campaign with details such as name, image, description, goal amount, and beneficiary address.
- **Donate:** Accept donations in Ether from users.
- **Generate Receipts:** Provide donors with receipts for their contributions.
- **Withdraw Funds:** Enable secure withdrawal of funds to the beneficiary address.

#### FundraiserFactory.sol Contract
The FundraiserFactory contract allows the creation of multiple Fundraiser contracts on the Ethereum network. It provides a scalable solution for managing numerous fundraising campaigns, ensuring ease of deployment and administration.

### Polygon Contracts

#### Fundraiser.sol Contract
Similar to the Ethereum version, the Fundraiser contract on the Polygon network allows users to create and manage fundraising campaigns, accept donations in MATIC tokens, and withdraw funds. It provides functionalities similar to its Ethereum counterpart but operates on the Polygon network.

#### FundraiserFactory Contract
The FundraiserFactory contract on the Polygon network facilitates the creation of Fundraiser contracts specifically for the Polygon network. It operates similarly to the Ethereum version but ensures compatibility with Polygon's infrastructure.

## Usage

### Ethereum Deployment

1. Deploy the FundraiserFactory contract on the Ethereum network.
2. Create fundraising campaigns by interacting with the FundraiserFactory contract, providing details such as campaign name, description, goal amount, etc.
3. Users can donate to the created campaigns by interacting with the respective Fundraiser contracts.
4. Campaign owners can withdraw funds once the fundraising goal is met.

### Polygon Deployment

1. Deploy the FundraiserFactory contract on the Polygon network.
2. Follow the same steps as Ethereum deployment to create and manage fundraising campaigns, but ensure interaction with the contracts deployed on Polygon.

## Deployment

deploy_contracts.js

To set up a Hardhat project and install necessary files for deploying Ethereum contracts, you can follow these steps:

1. **Install Node.js**: If you haven't already, install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm, the Node.js package manager.

2. **Create a New Directory**: Create a new directory for your Hardhat project.

3. **Initialize a New Node.js Project**: Open your terminal, navigate to the directory you created, and run the following command to initialize a new Node.js project:

   ```bash
   npm init -y
   ```

   This command will create a `package.json` file in your project directory.

4. **Install Hardhat**: Run the following command to install Hardhat globally:

   ```bash
   npm install --save-dev hardhat
   ```

5. **Initialize Hardhat**: Run the following command to initialize Hardhat in your project directory:

   ```bash
   npx hardhat
   ```

   Follow the prompts to set up Hardhat in your project. Choose the default options for most settings unless you have specific requirements.

6. **Install Necessary Plugins**: Depending on your project's requirements, you might need to install additional Hardhat plugins. For example, if you're deploying contracts to the Ethereum network, you'll need the `@nomiclabs/hardhat-ethers` plugin. Install it using the following command:

   ```bash
   npm install --save-dev @nomiclabs/hardhat-ethers
   ```

7. **Create Contracts**: Create your Ethereum contracts (`.sol` files) in the `contracts` directory of your project.

8. **Write Deployment Scripts**: Write deployment scripts for your contracts in the `scripts` directory. These scripts will be used to deploy your contracts to the Ethereum network.

9. **Configure Hardhat**: Configure Hardhat by editing the `hardhat.config.js` file in your project directory. Add any necessary settings, including network configurations, plugin configurations, etc.

10. **Compile Contracts**: Run the following command to compile your contracts:

    ```bash
    npx hardhat compile
    ```

11. **Test Your Contracts**: Write tests for your contracts in the `test` directory and run them using Hardhat's testing framework.

12. **Deploy Contracts**: Once you're ready, deploy your contracts to the Ethereum network using Hardhat's deployment scripts.

That's it! You've now set up a Hardhat project and installed necessary files for deploying Ethereum contracts. Make sure to refer to the Hardhat documentation for more detailed information on how to use Hardhat and its features.

## Security

Security is a top priority for the Web3 Fundraising Platform. Both Ethereum and Polygon contracts are designed with security best practices in mind, including ownership and access control, immutable records, and rigorous audits and testing.

## License

[LICENSE](LICENSE)
