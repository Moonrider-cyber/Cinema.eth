import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import { CSSTransition } from 'react-transition-group';

import Metamask from "../../asset/Metamask.svg";
import walletconnect from "../../asset/walletconnect.png";
import coinbase from "../../asset/coinbase.png";
import phantom from "../../asset/phantom.svg";
import rainbow from "../../asset/rainbow.png";


const CoonectWalletModel = ({ popup, closePopupHandle,connectMetaMask, connectCoinBase, connectPhantom }) => {
  
  
  return (
    <>
       <CSSTransition
        in={popup}
        timeout={300}
        classNames="popup"
        unmountOnExit
      >
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            {/* outer layer */}
            <div
              className="w-full h-full z-40 absolute backdrop-brightness-50"
              onClick={closePopupHandle}
            ></div>

            {/* inner layer */}
            <div className={`w-11/12 md:w-1/2 lg:w-1/3 h-3/4 bg-gray-800 rounded-lg z-50 overflow-y-auto navpopup`}>
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-600">
                <h1 className="text-3xl font-bold text-gray-300">
                  Connect Wallet
                </h1>
                <button
                  onClick={closePopupHandle}
                  className="text-3xl font-bold text-gray-300"
                >
                  &times;
                </button>
              </div>

              <div className="my-5 mx-3">
                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                    onClick={connectMetaMask}
                  >
                    <Image
                      src={Metamask}
                      width={45}
                      height={45}
                      alt="Metamask logo"
                    />
                    <span className="text-white font-bold text-lg">
                      Connect to Metamask
                    </span>
                  </button>
                </div>

                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                  onClick={()=> toast.info("Coming soon...")}>
                    <Image
                      src={coinbase}
                      width={45}
                      height={45}
                      alt="coinbase logo"
                    />
                    <span className="text-white font-bold text-lg">
                      Connect to Coinbase
                    </span>
                  </button>
                </div>

                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                    onClick={()=> toast.info("coming soon") }
                  >
                    <Image
                      src={walletconnect}
                      width={45}
                      height={45}
                      alt="walletconnect logo"
                    />
                    <span className="text-white font-bold text-lg">
                      Connect to WalletConnect
                    </span>
                  </button>
                </div>
                
                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                    onClick={()=> toast.info("Coming soon...")}
                  >
                    <Image
                        src={phantom}
                        alt="phantom wallet logo"
                        width={45}
                        height={45}
                    />
                    <span className="text-white font-bold text-lg">
                      Connect to phantom
                    </span>
                  </button>
                </div>
                
                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                  onClick={()=> toast.info("coming soon") }
                  >
                    <Image
                        src={rainbow}
                        alt="rainbow wallet logo"
                        width={45}
                        height={45}
                    />
                    <span className="text-white font-bold text-lg">
                      Connect to Rainbow
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </CSSTransition>
    </>
  );
};

export default CoonectWalletModel;
