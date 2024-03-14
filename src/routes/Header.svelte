<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
	import github from '$lib/images/github.svg';
</script>


<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
	  <div class="relative flex h-16 items-center justify-between">
	    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
	      <!-- Mobile menu button-->
	      <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
		<span class="absolute -inset-0.5"></span>
		<span class="sr-only">Open main menu</span>
		<!--
		  Icon when menu is closed.
      
		  Menu open: "hidden", Menu closed: "block"
		-->
		<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		</svg>
		<!--
		  Icon when menu is open.
      
		  Menu open: "block", Menu closed: "hidden"
		-->
		<svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	      </button>
	    </div>
	    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
	      <div class="flex flex-shrink-0 items-center">
		<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
	      </div>
	      <div class="hidden sm:ml-6 sm:block">
		<div class="flex space-x-4">
		  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
		  <a href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
		  <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
		  <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
		  <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
		</div>
	      </div>
	    </div>
	    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
	      <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
		<span class="absolute -inset-1.5"></span>
		<span class="sr-only">View notifications</span>
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
		  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
		</svg>
	      </button>
      
	      <!-- Profile dropdown -->
	      <div class="relative ml-3">
		<div>
		  <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
		    <span class="absolute -inset-1.5"></span>
		    <span class="sr-only">Open user menu</span>
		    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
		  </button>
		</div>
      
		<!--
		  Dropdown menu, show/hide based on menu state.
      
		  Entering: "transition ease-out duration-100"
		    From: "transform opacity-0 scale-95"
		    To: "transform opacity-100 scale-100"
		  Leaving: "transition ease-in duration-75"
		    From: "transform opacity-100 scale-100"
		    To: "transform opacity-0 scale-95"
		-->
		<div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
		  <!-- Active: "bg-gray-100", Not Active: "" -->
		  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
		  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
		  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
		</div>
	      </div>
	    </div>
	  </div>
	</div>
      
	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
	  <div class="space-y-1 px-2 pb-3 pt-2">
	    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
	    <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
	    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
	    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
	    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
	  </div>
	</div>
      </nav>
      


<!-- <header>
        <nav class="fixed overflow-hidden z-20 w-full bg-white rounded-b-lg border-b border-[--ui-light-border-color] border-x dark:border-[--ui-dark-border-color] backdrop-blur">
            <div class="px-6 m-auto max-w-6xl 2xl:px-0">
                <div class="flex flex-wrap items-center justify-between py-2 sm:py-4">
                    <div class="w-full items-center flex justify-between lg:w-auto">
                        <a href="/" aria-label="tailus logo">
				<img src={logo} alt="">                        
			</a>
                        <div class="flex lg:hidden">
                            <button aria-label="humburger" id="menu" class="relative border bordeer-gray-950/30 dark:border-white/20 size-9 rounded-full transition duration-300 active:scale-95">
                                <div aria-hidden="true" id="line1" class="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"></div>
                                <div aria-hidden="true" id="line2" class="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"></div>
                            </button>
                        </div>
                    </div>
                    <div class="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                        <div class="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">
                            <ul class="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                                <li>
                                    <a href="#" class="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400">
                                        <span>Product</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400">
                                        <span>Playground</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400">
                                        <span>Docs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400">
                                        <span>Blog</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">
                            <button class="w-full h-9 lg:w-fit group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center">
                                <span>Login</span>
                            </button>
                            <button class="w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                                <span>Sign Up</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header> -->


<!-- <header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	      
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header> -->

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
