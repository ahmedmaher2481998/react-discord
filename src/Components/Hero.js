import React from "react";
import { DownloadIcon } from "@heroicons/react/outline";
const Hero = () => {
	return (
		<>
			<div className='h-screen bg-d_b w-screen p-4'>
				<div className=' p-7 py-9 md:h-[83hv] md:flex  relative'>
					<div className='flex flex-col gap-7 md:max-w-non lg:justify-center'>
						<h1 className='text-white text-5xl  font-extrabold tracking-wider'>
							IMAGINE A PLACE...
						</h1>
						<h2 className='text-white text-lg font-light tracking-wide lg:max-w-3xl w-full'>
							...where you can belong to a school club, a gaming
							group, or a worldwide art community. Where just you
							and a handful of friends can spend time together. A
							place that makes it easy to talk every day and hang
							out more often.
						</h2>
						<div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6'>
							<button className='main-btn bg-white px-10'>
								<DownloadIcon className='h-10 w-8 mr-2 ' />
								Download for Windows
							</button>
							<button className='main-btn bg-gray-900 text-white  hover:text-gray-50 px-6 py-6 hover:bg-gray-700 font-bold'>
								Open Discord in Your browser
							</button>
						</div>
					</div>
					<div className='flex-grow'></div>
					<img
						src='https://discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg'
						alt='discord pic  hero  '
						className=' absolute -left-36 mt-16 sm:-left-44 md:hidden'
					/>
					<img
						src='https://discord.com/assets/7b01f72a2054561145b6dd04add417c0.svg'
						alt='discord hero '
						className=' md:inline   absolute hidden'
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
