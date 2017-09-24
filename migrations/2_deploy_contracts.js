var ConvertLib = artifacts.require("./ConvertLib.sol");
var mapper = artifacts.require("./mapper.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, mapper);
  deployer.deploy(mapper);
};
