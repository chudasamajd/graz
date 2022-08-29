import { createClient } from "cosmos-directory-client";
import unfetch from "unfetch";

export const chainIdToPath = async () => {
  const client = createClient({ fetch: unfetch });
  const { chains } = await client.fetchChains();
  const map = new Map<string, string>();
  chains.forEach((item) => {
    map.set(item.chain_id, item.path);
  });
  return map;
};
