import React from 'react';
//https://play.tailwindcss.com/PWxkEURR2m
//https://www.youtube.com/watch?v=GICbXj9Ey4A&t=281s

const LoginDialog = () => {
    return (
        <div class="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col sm:py-12">
            <div class="relative py-3 sm:w-96 mx-auto text-center">
                <span class="text-2xl font-light">Login to your account</span>
                <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                    <div class="h-2 bg-indigo-400 rounded-t-md">
                        <div class="px-8 py-6">
                            <label class="block font-semibold">Username or Email</label>
                            <input type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"></input>
                            <label class="block mt-3 font-semibold">Password</label>
                            <input type="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"></input>
                            <div class="flex justify-between items-baseline">
                                <button type="submit" class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">Login</button>
                                <a href='#' class="text-sm hover:underline">Forgot Passwort?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginDialog;