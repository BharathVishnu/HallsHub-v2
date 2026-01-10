import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLoginClick() {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Frontend-only behavior
    alert("Login successful (frontend only)");
    router.push("/book");
  }

  const gradientStyle = {
    backgroundImage: "linear-gradient(to bottom,#3D51BE,#3E4B91,#394378)",
  };

  return (
    <div data-aos="fade-down" className="flex relative items-center justify-center mt-72 md:mt-80">
      <div
        className="font-mont absolute right-0 rounded-l-3xl px-8 py-24 mt-8 md:px-72 shadow-2xl w-full md:w-[1321px] flex flex-col gap-2"
        style={gradientStyle}
      >
        {/* Username */}
        <div className="mb-4">
          <label className="block text-lg md:text-xl font-bold text-white">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-3 w-full md:w-[742px] bg-[#6B739D] rounded-2xl"
            placeholder="Enter your username"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-lg md:text-xl font-bold text-white">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-3 w-full md:w-[742px] bg-[#6B739D] rounded-2xl"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <div
          onClick={handleLoginClick}
          className="mt-5 mx-auto md:w-[272px] text-md text-center bg-[#6B739D] hover:bg-white hover:text-black text-white rounded-full py-3 px-8 shadow-md cursor-pointer"
        >
          Login
        </div>

        {/* Register Link */}
        <div className="mt-2 text-sm md:text-md ml-10 md:ml-64 text-white">
          Don't have an account?
          <Link href="/register" className="text-black hover:text-white ml-1">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
