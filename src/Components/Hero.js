import React from "react";
import * as icons from "@heroicons/react/outline";
const Hero = () => {
	return (
		<>
			<div className='h-screen bg-d_b w-screen p-4'>
				<h1 className='text-white text-[50px] font-extrabold tracking-wider'>
					IMAGINE A PLACE...
				</h1>
				<h2 className='text-white text-x'>
					...where you can belong to a school club, a gaming group, or
					a worldwide art community. Where just you and a handful of
					friends can spend time together. A place that makes it easy
					to talk every day and hang out more often.
				</h2>
				<div>
					<button>Download for Windows</button>
					<button>Open Discord in Your browser</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
