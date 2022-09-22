import { s } from "./scope";
import { ethers } from "hardhat";
import { expect, assert } from "chai";
import { showBody } from "../../util/format";
import { BN } from "../../util/number";
import { advanceBlockHeight, mineBlock } from "../../util/block";

describe("Mint USDa using USDC:", () => {
    it("andy deposits usdc for USDa", async () => {
        expect(await s.USDC.balanceOf(s.Andy.address)).to.eq(s.Andy_USDC)
        await s.USDC.connect(s.Andy).approve(s.USDA.address, s.Andy_USDC);
        await s.USDA.connect(s.Andy).deposit(s.Andy_USDC);
        await advanceBlockHeight(1);
        let av = BN(s.Andy_USDC).mul(BN("1e12"))
        expect(await s.USDA.balanceOf(await s.Andy.getAddress())).to.eq(av);
    })
    it("dave deposits usdc for USDa", async () => {
        expect(await s.USDC.balanceOf(s.Dave.address)).to.eq(s.Dave_USDC)
        await s.USDC.connect(s.Dave).approve(s.USDA.address, s.Dave_USDC);
        await s.USDA.connect(s.Dave).deposit(s.Dave_USDC);
        await advanceBlockHeight(1);
        let dv = BN(s.Dave_USDC).mul(BN("1e12"))
        expect(await s.USDA.balanceOf(s.Dave.address)).to.eq(dv);
    })
})