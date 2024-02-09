export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold">Register</h1>
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300"
        />
        <button className="p-2 bg-blue-500 text-white">Register</button>
      </form>
    </div>
  );
}
