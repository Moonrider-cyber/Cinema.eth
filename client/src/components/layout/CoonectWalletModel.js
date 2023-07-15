import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const CoonectWalletModel = ({ popup, closePopupHandle,connectMetaMask }) => {
  return (
    <>
      {popup && (
        <>
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            {/* outer layer */}
            <div
              className="w-full h-full z-40 absolute backdrop-blur-md"
              onClick={closePopupHandle}
            ></div>

            {/* inner layer */}
            {/* connect wallet popup in dark mode */}

            <div className="w-11/12 md:w-1/2 lg:w-1/3 h-3/4 bg-gray-800 rounded-lg z-50 overflow-y-auto">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 212 189"
                      id="metamask"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <polygon
                          fill="#CDBDB2"
                          points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                        ></polygon>
                        <polygon
                          fill="#CDBDB2"
                          points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                          transform="matrix(-1 0 0 1 256.5 0)"
                        ></polygon>
                        <polygon
                          fill="#393939"
                          points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                        ></polygon>
                        <polygon
                          fill="#F89C35"
                          points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                        ></polygon>
                        <polygon
                          fill="#F89D35"
                          points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                        ></polygon>
                        <polygon
                          fill="#D87C30"
                          points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                        ></polygon>
                        <polygon
                          fill="#EA8D3A"
                          points="46.125 101.813 65.25 119.813 65.25 137.813"
                        ></polygon>
                        <polygon
                          fill="#F89D35"
                          points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                        ></polygon>
                        <polygon
                          fill="#EB8F35"
                          points="65.25 138.375 60.75 173.25 90.563 152.438"
                        ></polygon>
                        <polygon
                          fill="#EA8E3A"
                          points="92.25 102.375 95.063 150.188 86.625 125.719"
                        ></polygon>
                        <polygon
                          fill="#D87C30"
                          points="39.375 138.938 65.25 138.375 60.75 173.25"
                        ></polygon>
                        <polygon
                          fill="#EB8F35"
                          points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                        ></polygon>
                        <polygon
                          fill="#E8821E"
                          points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                        ></polygon>
                        <polygon
                          fill="#DFCEC3"
                          points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                        ></polygon>
                        <polygon
                          fill="#DFCEC3"
                          points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                          transform="matrix(-1 0 0 1 272.25 0)"
                        ></polygon>
                        <polygon
                          fill="#393939"
                          points="70.313 112.5 64.125 125.438 86.063 119.813"
                          transform="matrix(-1 0 0 1 150.188 0)"
                        ></polygon>
                        <polygon
                          fill="#E88F35"
                          points="12.375 .563 88.875 58.5 75.938 27"
                        ></polygon>
                        <path
                          fill="#8E5A30"
                          d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                        ></path>
                        <g transform="matrix(-1 0 0 1 211.5 0)">
                          <polygon
                            fill="#F89D35"
                            points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                          ></polygon>
                          <polygon
                            fill="#D87C30"
                            points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                          ></polygon>
                          <polygon
                            fill="#EA8D3A"
                            points="46.125 101.813 65.25 119.813 65.25 137.813"
                          ></polygon>
                          <polygon
                            fill="#F89D35"
                            points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                          ></polygon>
                          <polygon
                            fill="#EB8F35"
                            points="65.25 138.375 60.75 173.25 90 153"
                          ></polygon>
                          <polygon
                            fill="#EA8E3A"
                            points="92.25 102.375 95.063 150.188 86.625 125.719"
                          ></polygon>
                          <polygon
                            fill="#D87C30"
                            points="39.375 138.938 65.25 138.375 60.75 173.25"
                          ></polygon>
                          <polygon
                            fill="#EB8F35"
                            points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                          ></polygon>
                          <polygon
                            fill="#E8821E"
                            points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                          ></polygon>
                          <polygon
                            fill="#393939"
                            points="70.313 112.5 64.125 125.438 86.063 119.813"
                            transform="matrix(-1 0 0 1 150.188 0)"
                          ></polygon>
                          <polygon
                            fill="#E88F35"
                            points="12.375 .563 88.875 58.5 75.938 27"
                          ></polygon>
                          <path
                            fill="#8E5A30"
                            d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <span className="text-white font-bold text-lg">
                      Connect to Metamask
                    </span>
                  </button>
                </div>

                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                  onClick={()=> toast.info("coming soon") }>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      fill="none"
                      viewBox="0 0 48 48"
                      id="coinbase"
                    >
                      <path
                        fill="#618dd4"
                        fill-rule="evenodd"
                        d="M11.0769 0C4.95931 0 0 4.95931 0 11.0769V36.9231C0 43.0407 4.95931 48 11.0769 48H36.9231C43.0407 48 48 43.0407 48 36.9231V11.0769C48 4.95931 43.0407 0 36.9231 0H11.0769ZM19.181 31.5223C20.601 32.4534 22.2558 32.9657 23.9548 33C27.5638 33 32.9774 29.4 32.9774 25.8H42C41.5371 30.3947 39.3215 34.6363 35.8114 37.6473C32.3014 40.6584 27.7655 42.2086 23.1418 41.9774C18.5181 41.7462 14.1604 39.7513 10.9698 36.4052C7.77927 33.0591 6 28.6179 6 24C6 19.3821 7.77927 14.9409 10.9698 11.5948C14.1604 8.2487 18.5181 6.25377 23.1418 6.02259C27.7655 5.79141 32.3014 7.34165 35.8114 10.3527C39.3215 13.3637 41.5371 17.6053 42 22.2H32.9774C32.6372 20.5392 31.8337 19.008 30.6594 17.7827C29.4851 16.5574 27.9878 15.6879 26.3398 15.2741C24.6918 14.8603 22.9602 14.9192 21.3444 15.444C19.7285 15.9687 18.294 16.938 17.2061 18.2402C16.1182 19.5424 15.4211 21.1246 15.195 22.8047C14.969 24.4847 15.2232 26.1943 15.9283 27.7365C16.6335 29.2788 17.761 30.5911 19.181 31.5223Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-white font-bold text-lg">
                      Connect to Coinbase
                    </span>
                  </button>
                </div>

                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                    onClick={()=> toast.info("coming soon") }
                  >
                    <svg
                      version="1.0"
                      id="katman_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="45"
                      height="45"
                      viewBox="0 0 824 618"
                      style={{ enableBackground: "new 0 0 824 618" }}
                      xmlSpace="preserve"
                    >
                      <style type="text/css">
                        {`.st0{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}
                        .st1{fill:#FFFFFF;}`}
                      </style>
                      <g>
                        <radialGradient
                          id="SVGID_1_"
                          cx="13.2793"
                          cy="609.416"
                          r="1"
                          gradientTransform="matrix(512 0 0 -512 -6643 312330)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" style={{ stopColor: "#5D9DF6" }} />
                          <stop offset="1" style={{ stopColor: "#006FFF" }} />
                        </radialGradient>
                        <path
                          className="st0"
                          d="M412,53c141.4,0,256,114.6,256,256S553.4,565,412,565S156,450.4,156,309S270.6,53,412,53z"
                        />
                        <path
                          className="st1"
                          d="M318.7,250.7c51.5-50.3,135.1-50.3,186.6,0l6.2,6.1c2.6,2.5,2.6,6.6,0,9.1l-21.2,20.7c-1.3,1.3-3.4,1.3-4.7,0
		l-8.5-8.3c-36-35.1-94.2-35.1-130.2,0l-9.1,8.9c-1.3,1.3-3.4,1.3-4.7,0l-21.2-20.7c-2.6-2.5-2.6-6.6,0-9.1L318.7,250.7z
		M549.2,293.5l18.9,18.4c2.6,2.5,2.6,6.6,0,9.1l-85.1,83.1c-2.6,2.5-6.8,2.5-9.3,0c0,0,0,0,0,0l-60.4-59c-0.6-0.6-1.7-0.6-2.3,0
		c0,0,0,0,0,0l-60.4,59c-2.6,2.5-6.8,2.5-9.3,0c0,0,0,0,0,0L255.9,321c-2.6-2.5-2.6-6.6,0-9.1l18.9-18.4c2.6-2.5,6.8-2.5,9.3,0
		l60.4,59c0.6,0.6,1.7,0.6,2.3,0c0,0,0,0,0,0l60.4-59c2.6-2.5,6.8-2.5,9.3,0c0,0,0,0,0,0l60.4,59c0.6,0.6,1.7,0.6,2.3,0l60.4-59
		C542.4,291,546.6,291,549.2,293.5L549.2,293.5z"
                        />
                      </g>
                    </svg>
                    <span className="text-white font-bold text-lg">
                      Connect to WalletConnect
                    </span>
                  </button>
                </div>
                
                <div className="px-4 py-2">
                  <button className="w-full py-3 px-7 flex items-center gap-6 bg-gray-600 hover:bg-gray-500 text-gray-300 rounded-lg"
                  onClick={()=> toast.info("coming soon") }
                  >
                    <Image
                        src="https://walletconnect.com/images/rainbow_icon.png"
                        alt="rainbow wallet"
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
        </>
      )}
    </>
  );
};

export default CoonectWalletModel;
