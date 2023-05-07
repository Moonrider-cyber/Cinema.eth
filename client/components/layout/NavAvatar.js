import Jazzicon from "react-jazzicon/dist/Jazzicon"

const NavAvatar = ({account}) => {
  
  return (
    <>
      <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" className="flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >
      
        <div className="flex items-center justify-center">
          <Jazzicon diameter={30} seed={parseInt(account && account.address && account.address.slice(2, 10), 16)} />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white text-sm font-bold pl-2">{account && account.address && account.address.slice(0, 4)}...{account && account.address && account.address.slice(-4)}</p>
        </div>
      </button>
      
        
    </>
  )
}

export default NavAvatar