import { chainIdToPath } from "./chain-id-to-path";

describe("chain id to path", () => {
  test("It should resolve chain id to path", async () => {
    const chains = await chainIdToPath();
    expect(chains.get("axelar-dojo-1")).toBe("axelar");
    expect(chains.get("cosmoshub-4")).toBe("cosmoshub");
    expect(chains.get("juno-1")).toBe("juno");
  });
});
