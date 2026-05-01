"use client"

import React from 'react';

export default function Login() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 h-screen'>
                <div className='bg-white flex flex-col items-center justify-center text-gray-600 p-4' >
                    <h3 className='font-bold text-2xl'>Style<span className='text-amber-800'>Gen</span></h3>
                    <h3 className='font-bold text-2xl mt-5 text-start'>Welcome back</h3>
                    <p className='font-sans mb-5'>Enter your credentials to access your artisan portal.</p>

                    <div className='bg-gray-100 rounded-lg border border-gray-400'>
                        <h1 className='px-5 pt-3'>DEMO CREDENTIALS</h1>

                        <div className="grid grid-cols-2 gap-6 items-center justify-center">
                            {/* Box 1 */}
                            <div className="p-2">
                                <div className="text-center rounded-lg border border-gray-400 px-2 py-2">
                                    <h3 className="font-bold">Admin</h3>
                                    <p className="font-sans">admin@stylegen.com</p>
                                </div>
                            </div>

                            {/* Box 2 */}
                            <div className="p-2">
                                <div className="text-center rounded-lg border border-gray-400 px-2 py-2">
                                    <h3 className="font-bold">Customer</h3>
                                    <p className="font-sans">customer@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <fieldset className="fieldset w-96">
                            <label className="label">Email Address</label>
                            <input type="text" className='input w-full rounded-lg' placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input w-full rounded-lg" placeholder="Password" />

                            <div className="grid grid-cols-2 gap-6 items-center justify-center p-2">
                                <label className="label">
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                    Keep me signed in for 30 days
                                </label>
                                <p className='text-amber-800 text-bold font-sans text-end'>Forgot password?</p>
                            </div>

                            <button className="btn btn-neutral bg-amber-800 text-white mt-2 w-full">Sign in <i className='fa-solid fa-arrow-right'></i></button>
                        </fieldset>
                    </div>
                    <h3 className='p-5'><i className='fa-solid fa-shield text-green-500'></i> SECURE ACCESS</h3>
                    <p className='font-sans pb-5'>New to StyleGen? <span className='text-amber-800'>Create an account</span></p>
                </div>

                <div className='bg-amber-800 flex flex-col items-center text-center justify-center text-white p-6'>
                    <h1 className='font-bold text-2xl'>Premium Leather Goods</h1>
                    <p className='px-12'>Access your artisan portal to manage orders, track shipments, and discover our latest handcrafted collections.</p>

                    <div className="grid grid-cols-2 gap-6 items-center justify-center">

                        {/* Box 1 */}
                        <div className="text-white p-6 rounded-lg">
                            <div className="p-4 text-center">
                                <div className=" bg-amber-600 text-2xl rounded-lg w-10 h-10 flex items-center justify-center ml-10">
                                    <i className="fa-solid fa-shield"></i>
                                </div>
                                <h3 className="font-bold">Secure</h3>
                                <p className="font-sans">256-bit encryption</p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="text-white p-6 rounded-lg">
                            <div className="p-4 text-center">
                                <div className="bg-amber-600 text-2xl rounded-lg w-10 h-10 flex items-center justify-center ml-10">
                                    <i className="fa-solid fa-bolt"></i>
                                </div>
                                <div className="font-bold">Fast</div>
                                <div className="font-sans">Instant access</div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="text-white p-6 rounded-lg">
                            <div className="p-4 text-center">
                                <div className=" bg-amber-600 text-2xl rounded-lg w-10 h-10 flex items-center justify-center ml-10">
                                    <i className="fa-solid fa-shield"></i>
                                </div>
                                <h3 className="font-bold">Protected</h3>
                                <p className="font-sans">Your data is safe</p>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="text-white p-6 rounded-lg">
                            <div className="p-4 text-center">
                                <div className=" bg-amber-600 text-2xl rounded-lg w-10 h-10 flex items-center justify-center ml-10">
                                    <i className="fa-solid fa-lock"></i>
                                </div>
                                <h3 className="font-bold">Private</h3>
                                <p className="font-sans">Your privacy matters</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
