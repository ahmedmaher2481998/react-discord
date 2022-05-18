import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import firebaseData from "../firebase";
const Header = () => {
	const [user] = useAuthState(firebaseData.auth);
	const history = useNavigate();
	const signIn = (e) => {
		e.preventDefault();
		firebaseData.auth
			.signInWithPopup(firebaseData.provider)
			.then(() => history.push("/channels"))
			.catch((e) => alert(e.message));
	};
	return (
		<header className='bg-d_b  w-screen flex items-center justify-between py-4 px-6  '>
			<a href='/'>
				<img
					src=' ./Logo-White.png '
					alt='logo Header'
					className='w-32 h-12 object-contain '
				/>
			</a>
			<div className='hidden lg:flex space-x-6'>
				{/*eslint-disable */}
				<a href='#' className='link'>
					Download
				</a>
				<a href='#' className='link'>
					Why Discord
				</a>
				<a href='#' className='link'>
					Nitro
				</a>
				<a href='#' className='link'>
					Safety
				</a>
				<a href='#' className='link'>
					Support
				</a>
				<a href='#' className='link'></a>
			</div>
			<div className='flex space-x-4'>
				<button
					onClick={!user ? signIn : () => history.push("/channels")}
					className='rounded-full tracking-wider w-24 bg-white focus:outline-none text-xs md:text-sm text-black hover:text-d_b hover:shadow-sm p-2 px-4  transition ease-in-out whitespace-nowrap font-medium duration-300'
				>
					{!user ? "LogIn" : "Open Discord"}
				</button>
				<MenuIcon className='text-white h-8 lg:hidden cursor-pointer' />
			</div>
		</header>
	);
};

export default Header;
