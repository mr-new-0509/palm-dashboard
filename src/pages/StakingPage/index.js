import { useState } from "react";
import { ACTIVE, ENDED } from "../../utils/constants";
import PoolCard from "./PoolCard";
import StakeModal from "./StakeModal";

const classNameOfActiveTabButton = "bg-[#D7D7D7] text-[#1E1E1E] hover:bg-[#969494]";
const classNameOfInActiveTabButton = "bg-[#1e1e1e] text-[#d7d7d7] hover:bg-[#2e2d2d]";

export default function StakingPage() {
  const [currentTab, setCurrentTab] = useState(ACTIVE);

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="container mx-auto py-8 px-6">
      {/* Title */}
      <div className="flex justify-center">
        <div>
          <span className="text-4xl font-semibold text-white text-center">
            Next Generation Staking
          </span>
          <div className="mt-2 flex items-center justify-end">
            <span className="text-[#A6A6A6] text-md">
              by
            </span>
            <img
              src="/assets/images/logo_small.svg"
              alt=""
              className="ml-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        {/* Tab buttons */}
        <div className="inline-flex" role="group">
          <button
            className={`${currentTab === ACTIVE ? classNameOfActiveTabButton : classNameOfInActiveTabButton} text-md font-bold py-1 w-32 rounded-l-lg transition-all`}
            onClick={() => handleCurrentTab(ACTIVE)}
          >
            Active
          </button>
          <button
            className={`${currentTab === ENDED ? classNameOfActiveTabButton : classNameOfInActiveTabButton} text-md font-bold py-1 w-32 rounded-r-lg transition-all`}
            onClick={() => handleCurrentTab(ENDED)}
          >
            Ended
          </button>
        </div>

        {/* Switch */}
        <div className="flex items-center">
          <span className="text-md text-[#909090]">My Liquidity Only</span>
          <div className="form-switch ml-4">
            <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-[#444444] bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </div>

      {/* Pools */}
      <div className="mt-16 grid grid-cols-3 gap-12">
        <div className="col-span-1">
          <PoolCard
            pairTokenImage="/assets/images/usdc.png"
            pairTokenName="USDC"
          />
        </div>
        <div className="col-span-1">
          <PoolCard
            pairTokenImage="/assets/images/busd.png"
            pairTokenName="BUSD"
          />
        </div>
        <div className="col-span-1">
          <PoolCard
            pairTokenImage="/assets/images/ethereum.png"
            pairTokenName="ETH"
          />
        </div>
      </div>
      <StakeModal id="stakeModal" />
    </div>
  );
};