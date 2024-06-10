async function main() {
  // Retrieve the deployer's signer
  const [deployer] = await ethers.getSigners();

  // Log the deployer's address
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory for the FundraiserFactory contract
  const FundraiserFactory = await ethers.getContractFactory("FundraiserFactory");
  
  // Deploy the FundraiserFactory contract, passing the deployer's address as a constructor argument
  const fundraiserFactory = await FundraiserFactory.deploy(deployer.address);

  // Log the deployed FundraiserFactory contract's address
  console.log("FundraiserFactory address:", fundraiserFactory.address);
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
