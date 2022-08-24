
const main = async () => {

    const nftContract = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContractDeploy = await nftContract.deploy();
    await nftContractDeploy.deployed();

    console.log("contract deployed to :", nftContractDeploy.address);



    // Call the function

    let txn = await nftContractDeploy.makeAnEpicNFT();
    // Wait for txn to be minted
    await txn.wait();
    console.log("Minted #1");
    
    // mint another nft for fun 
    txn = await nftContractDeploy.makeAnEpicNFT();
    await txn.wait();
    console.log("Minted #2");
    
}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };


  runMain();