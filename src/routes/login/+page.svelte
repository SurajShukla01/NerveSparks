<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login" />
</svelte:head>

<div id="login-page">
    <div class="max-w-6xl relative z-10 m-auto px-6 lg:mt-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-2 items-center login-section">
            <div class="bg-white rounded-lg p-10 sm:m-auto md:m-auto lg:m-0" style="border: solid 1px #CACED0; min-height: 524px;">
                <div class="sm:w-full text-left m-auto lg:m-0">
                    
                    <h1 class="text-3xl md:text-4xl font-bold mb-3">Log in to your account</h1>
                    <p class="mb-10">Not a member yet? <a class="no-underline tw-blue" href="/signup">Get
                            started free now!</a></p>
                    <div class="w-full">

                        

                        <form action="/login/check" method="POST" id="login-form">
                            <input type="hidden" name="redirect_to" value="">
                            <input type="hidden" name="attempts" value="">
                            <input type="hidden" name="cust_id" id="cust_id" value="">
                            <input type="hidden" name="token" id="token" value="">
                            <div>
                                <label for="email" class="block text-sm font-medium leading-8 text-gray-700">
                                    Email address
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input id="email" value="" type="email" placeholder="Email" name="email" autocomplete="email" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                </div>
                            </div>

                            <div class="mt-2">
                                <label for="password" class="block text-sm font-medium leading-8 text-gray-700">
                                    Password
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input type="password" placeholder="Password" name="password" id="password" autocomplete="current-password" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                </div>
                            </div>

                            <div class="mt-2 flex flex-col md:flex-row justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" type="checkbox" class="form-checkbox h-4 w-4 tw-blue transition duration-150 ease-in-out">
                                    <label for="remember-me" class="ml-2 block text-sm leading-5 text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div class="text-sm leading-5 mt-4 md:mt-0">
                                    <a href="/password-reset/" class="font-medium tw-blue focus:outline-none no-underline transition ease-in-out duration-150">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div class="mt-10">
                            <span class="block w-full rounded-md">
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-tailwind-blue focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out">
                                Log in
                                </button>
                                <!-- <input type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-tailwind-blue focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out" value="Log in"> -->
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="text-center pt-10 md:pt-0 lg:pt-0 m-auto md:m-0 lg:m-0 hidden md:block lg:block">
                <img class="rounded-lg md:ml-4 lg:ml-4" style="height: 524px;" src="https://www.tailwindapp.com/dashboard/v2/images/onboarding/sign-up-finisher-ghostwriter.png" alt="The new Tailwind">
            </div>
        </div>
    </div>
</div>
