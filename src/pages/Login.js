import React from "react";

export default function Login() {
  return (
    <div>
      <div class="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 bg-no-repeat bg-cover">
        <div class="absolute bg-gray-300 opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div class="text-center">
            <h2 class="mt-6 text-2xl font-bold text-gray-900">Welcom Back!</h2>
            <p class="mt-1 text-xs text-gray-600">
              Please sign in to your account
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <div class="relative">
              <label class="text-sm font-normal text-gray-800 tracking-wide">
                Email
              </label>
              <input
                class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="email"
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="mt-8 content-center">
              <label class="text-sm font-normal text-gray-800 tracking-wide">
                Password
              </label>
              <input
                class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-indigo-500 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-indigo-500 text-gray-100 p-3 rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </button>
            </div>
            <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <a
                href="#"
                class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
