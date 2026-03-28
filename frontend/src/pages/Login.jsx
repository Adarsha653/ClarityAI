import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("elena@example.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left side - Testimonial card */}
        <div className="relative bg-linear-to-tr from-blue-900 via-blue-800 to-blue-700 p-8 flex flex-col justify-between text-white rounded-tr-3xl rounded-br-3xl">
          <div className="absolute top-4 left-4 bg-blue-700 bg-opacity-50 rounded-md p-1">
            <svg
              className="w-6 h-6 opacity-75"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 19H5a2 2 0 0 1-2-2v-5a7 7 0 0 1 7-7h4v7h-2v7z" />
              <path d="M22 19h-4a2 2 0 0 1-2-2v-5a7 7 0 0 1 7-7h4v7h-2v7z" />
            </svg>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-4 bg-black bg-opacity-30 rounded-full px-3 py-1 text-xs font-semibold">
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
              Stress Level: Manageable
            </div>
            <p className="text-lg font-semibold leading-relaxed">
              "Zenith's AI coaching helped me reframe my anxiety before big
              meetings. It's like having a supportive mentor available 24/7."
            </p>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-white">Elena Rodriguez</p>
            <p className="text-sm text-blue-200">Senior Product Designer</p>
          </div>

          {/* Pagination dots */}
          <div className="flex space-x-2 mt-8">
            <span className="w-3 h-3 rounded-full bg-white opacity-90"></span>
            <span className="w-3 h-3 rounded-full bg-white opacity-40"></span>
            <span className="w-3 h-3 rounded-full bg-white opacity-40"></span>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="p-10 flex flex-col justify-center">
          <button
            onClick={() => window.history.back()}
            className="self-start text-sm text-blue-500 hover:underline mb-6"
          >
            ← Back to Home
          </button>

          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-600 mb-8">
            Take a breath. Let's check in on your progress.
          </p>

          <form className="space-y-6">
            <label className="block text-sm font-medium text-gray-700">
              Email address
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700 relative">
              Password
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Eye icon (show)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  // Eye-off icon (hide)
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0 1 12 19c-4.477 0-8.268-2.943-9.542-7a9.963 9.963 0 0 1 4.121-5.329m1.44-1.44A9.953 9.953 0 0 1 12 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 0 1-1.768 3.066M15 12a3 3 0 0 1-3 3"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18"
                    />
                  </svg>
                )}
              </button>
              <a
                href="#"
                className="absolute right-0 bottom-full mb-1 text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </label>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Log in
            </button>
          </form>

          <div className="my-6 flex items-center gap-2 text-gray-400 text-sm">
            <hr className="grow border-gray-300" />
            Or continue with
            <hr className="grow border-gray-300" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <svg
                className="w-5 h-5 text-red-600"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M21.35 11.1H12v2.8h5.65a4.8 4.8 0 1 1-1.85-3.5l1.35-1.35a7.3 7.3 0 1 0 2.85 4.05z"
                />
              </svg>
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full border border-gray-300 rounded-md py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16.365 1.43a7.563 7.563 0 0 0-4.76 1.99 7.57 7.57 0 0 0-2.19 5.35c0 2.28 1.19 4.5 3.06 5.72a5.555 5.555 0 0 1 2.35.01 5.59 5.59 0 0 1 1.47-.52 7.57 7.57 0 0 0-1.88-12.55z" />
                <path d="M17.82 12.9a5.693 5.693 0 0 0-1.17-2.63c-.44-.61-1.08-1.01-1.78-1.18a7.57 7.57 0 0 1 1.44 4.64z" />
                <path d="M13.5 23.5a8.118 8.118 0 0 0 4.07-1.25 6.838 6.838 0 0 0 2.9-5.16 6.91 6.91 0 0 0-2.56-4.87 8.108 8.108 0 0 0-4.42-1.17c-3.11 0-5.8 2.2-6.23 5.18a7.453 7.453 0 0 0 2.07 6.31c1.46 1.63 3.7 2.56 6.15 2.56z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Need immediate support?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Continue as Guest
            </a>
          </p>

          <p className="mt-2 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            Your data is private, secure, and encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}