import { client } from "@/app/client";
import { getContract } from "thirdweb";
// import { baseSepolia } from "thirdweb/chains";
import { base } from "thirdweb/chains";
// export const contractAddress = "0x124D803F8BC43cE1081110a08ADd1cABc5c83a3f";
export const singlepmcontractAddress = "0x784f4499720e111337344B87dF9346088985603F";
export const tokenAddress = "0xB90C49cb2D16cDb11bD398d96Dec386e9b9D3D2D";

// export const contract = getContract({
//     client: client,
//     chain: baseSepolia,
//     address: contractAddress
// });

export const singlepmcontract = getContract({
  client: client,
  chain: base,
  address: singlepmcontractAddress,
});

export const tokenContract = getContract({
  client: client,
  chain: base,
  address: tokenAddress,
});
