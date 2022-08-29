import type { AppCurrency } from "@keplr-wallet/types";
import { createClient } from "cosmos-directory-client";
import unfetch from "unfetch";

import type { GrazChain } from "../../dist";

export const getGrazChain = async (chainId: string) => {
  const client = createClient({ fetch: unfetch });
  const { chain } = await client.fetchChain(chainId);
  const curr: AppCurrency[] = [];
  chain.assets!.forEach((item) => {
    curr.push({
      coinDenom: item.denom_units[item.denom_units.length - 1]!.denom,
      coinMinimalDenom: item.denom_units[0]!.denom,
      coinDecimals: item.denom_units[item.denom_units.length - 1]!.exponent,
    });
  });

  const grazChain: GrazChain = {
    chainId: chain.chain_id,
    rest: chain.apis!.rest[0]!.address,
    rpc: chain.apis!.rpc[0]!.address,
    currencies: curr,
    path: chain.path,
  };
  return grazChain;
};
