import "./Login.css";
export default function Login() {
  return (
    <>
      <div className="text-center font-bold text-7xl mt-20">
        <h1>MY ACCOUNT</h1>
        <hr className=" mx-auto border-neutral-950 w-4/6 mb-14 mt-16" />
      </div>
      <div className=" flex flex-row items-center justify-center mb-48 ">
        <div className="flex  items-center justify-center   mr-20 w-2/6">
          <div className="flex flex-col items-center w-full space-y-8  bg-gray-100 p-10">
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

              <button
                type="submit"
                className="login ml-64  w-1/2  p-4 text-white bg-black cursor-pointer hover:scale-105  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                LOGIN
              </button>
              <a href="/FORGOTPASSWORD">
                <p className="text-right text-black">Forgot Password?</p>
              </a>
            </form>
          </div>
        </div>

        <div className="bg-black text-white text-left w-2/6 p-10 space-y-8 ">
          <p className="font-bold text-xl mb-8">Create an Account</p>
          <p className="font-bold mb-4 text-base">
            Create an account to enjoy all the benefits of our registered
            customers.
          </p>
          <p className="font-bold mb-4">Save your favourites across devices</p>
          <p className="font-bold mb-4">
            Save time at checkout for future orders
          </p>
          <p className="font-bold mb-4">
            Manage your purchases and returns in your order history
          </p>
          <p className="font-bold mb-16">
            Become a HUGO BOSS EXPERIENCE member to profit from special offers
          </p>
          <a href="/REGISTER">
            <button className="register w-full p-4 mt-9 text-black font-bold bg-white cursor-pointer hover:scale-105 ">
              REGISTER
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
