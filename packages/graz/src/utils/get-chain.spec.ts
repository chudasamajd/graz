import { getGrazChain } from "./get-chain";

describe("getGrazChain", () => {
  test("It should get graz chain info", async () => {
    const chains = await getGrazChain("axelar-dojo-1");
    console.log(chains);
  });
});
