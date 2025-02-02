const Navbar = () => {
  return (
    <nav className="bg-blue-200 text-black">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-black text-2xl">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">OP/ &gt;</span>
        </div>
        {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul> */}
        <div className="flex gap-2">
          <a
            href="https://github.com/ibads17"
            type="button"
            className="mt-2 text-white bg-blue-400 rounded-full hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 transition-all"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            Github
          </a>

          {/* <a href="https://www.buymeacoffee.com/mdIbaad">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=mdIbaad&button_colour=7ab6ff&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
          </a> */}
        </div>
        {/* <button className='text-white bg-blue-500 my-5 mx-2 rounded-full flex justify-between items-center'>
                    <img className='invert w-10 p-1 rounded-full' src="/Icons/github.png" alt="GitHub Logo" />
                    <span className='font-bold px-2'>GitHub</span>
                </button> */}
      </div>
      
    </nav>
  );
};

export default Navbar;
