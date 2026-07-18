import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [club, setClub] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const gradientStyle = {
    backgroundImage: "linear-gradient(to bottom,#3D51BE,#3E4B91,#394378)",
  };

  function handleRegister() {
    if (!username || !password || !club || !confirmPassword) {
      alert("Please enter all details.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password must match");
      return;
    }

    // Frontend-only behavior
    alert("Registration successful (frontend only)");
    router.push("/");
  }

  return (
    <div
      data-aos="fade-down"
      className="font-mont flex relative items-center justify-center mt-96 md:mt-80"
    >
      <div
        className="absolute right-1 bg-[#3D51BE] rounded-l-3xl px-6 py-12 md:px-96 shadow-2xl w-full md:w-[1321px] flex flex-col gap-2"
        style={gradientStyle}
      >
        {/* Username */}
        <div className="mb-4 md:ml-[-56px]">
          <label className="block text-lg md:text-xl font-bold text-white">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full md:w-[742px] bg-[#6B739D] rounded-2xl"
          />
        </div>

        {/* Club */}
        <div className="mb-4 md:ml-[-56px]">
          <label className="block text-lg md:text-xl font-bold text-white">
            Club / Org Name
          </label>
          <input
            value={club}
            onChange={(e) => setClub(e.target.value)}
            className="mt-1 p-2 w-full md:w-[742px] bg-[#6B739D] rounded-2xl"
          />
        </div>

        {/* Password */}
        <div className="mb-4 md:ml-[-56px]">
          <label className="block text-lg md:text-xl font-bold text-white">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full md:w-[742px] bg-[#6B739D] rounded-2xl"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4 md:ml-[-56px]">
          <label className="block text-lg md:text-xl font-bold text-white">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 w-full md:w-[742px] bg-[#6B739D] rounded-2xl"
          />
        </div>

        {/* Register Button */}
        <div
          onClick={handleRegister}
          className="mt-5 md:ml-32 mx-auto md:w-[272px] text-md text-center bg-[#6B739D] hover:bg-white hover:text-black text-white rounded-full py-3 px-8 shadow-md cursor-pointer"
        >
          Register
        </div>

        {/* Login Link */}
        <div className="mt-2 text-sm md:text-md ml-10 md:ml-40 text-white">
          Already have an account?
          <Link href="/" className="text-black hover:text-white ml-1">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register

