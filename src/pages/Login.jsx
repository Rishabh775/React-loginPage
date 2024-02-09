// import "./Login.css";
export default function Login() {
  return (
    <>
      <div className="text-center font-bold text-7xl mt-20">
        <h1>MY ACCOUNT</h1>
        <hr className=" mx-auto border-neutral-950 w-4/6 mb-14 mt-16" />
      </div>
      <div className=" flex lg:flex-row lg:items-stretch items-center justify-center mb-48 sm:flex-col  ">
        <div className="flex  items-center justify-center max-lg:w-2/3 w-2/6   lg:mr-20  sm:m-0">
          <div className="flex flex-col items-center w-full h-full space-y-8  bg-gray-100 p-10">
            <h1 className="text-4xl font-bold">LOGIN</h1>
            <form className="flex flex-col w-full space-y-5">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="rememberMe" className="text-gray-700">
                  Remember Me
                </label>
              </div>
              <div className="flex  justify-end">
                <button
                  type="submit"
                  className="login  ali w-1/2  p-4 text-white bg-black cursor-pointer hover:scale-105   duration-500 hover:after:content-['➜'] "
                >
                  LOGIN
                </button>
              </div>
              <a href="/FORGOTPASSWORD">
                <p className="text-right text-black">Forgot Password?</p>
              </a>
            </form>
          </div>
        </div>

        <div className=" flex justify-start  max-lg:mt-40   max-lg:w-2/3  w-2/6">
          <div className="  bg-black text-white w-full h-full space-y-6  p-10">
            <p className="font-bold text-xl ">Create an Account</p>
            <p className="font-bold  text-base">
              Create an account to enjoy all the benefits of our registered
              customers.
            </p>
            <p className="font-bold ">Save your favourites across devices</p>
            <p className="font-bold ">
              Save time at checkout for future orders
            </p>
            <p className="font-bold ">
              Manage your purchases and returns in your order history
            </p>
            <p className="font-bold">
              Become a HUGO BOSS EXPERIENCE member to profit from special offers
            </p>
            <a href="/REGISTER">
              <button className="register w-full p-4 mt-9 text-black font-bold bg-white cursor-pointer  duration-500 hover:scale-105 hover:after:content-['➜']  ">
                REGISTER
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
