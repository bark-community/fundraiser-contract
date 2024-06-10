async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const FundraiserFactory = await ethers.getContractFactory("FundraiserFactory");
    const fundraiserFactory = await FundraiserFactory.deploy(deployer.address);
  
    console.log("FundraiserFactory address:", fundraiserFactory.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  