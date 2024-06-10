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

## Security

Security is a top priority for the Web3 Fundraising Platform. Both Ethereum and Polygon contracts are designed with security best practices in mind, including ownership and access control, immutable records, and rigorous audits and testing.

## License

[LICENSE](LICENSE)
