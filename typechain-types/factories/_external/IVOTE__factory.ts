/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVOTE, IVOTEInterface } from "../../_external/IVOTE";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IVOTE__factory {
  static readonly abi = _abi;
  static createInterface(): IVOTEInterface {
    return new utils.Interface(_abi) as IVOTEInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IVOTE {
    return new Contract(address, _abi, signerOrProvider) as IVOTE;
  }
}
