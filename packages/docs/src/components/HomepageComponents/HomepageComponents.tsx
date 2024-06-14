import React from "react";
import MotionDiv from "../global/MotionDiv";

const HomepageComponents = () => {
	return (
		<div className="container my-40">
			<MotionDiv className="flex flex-col text-center gap-5">
				<div className="text-5xl font-bold max-md:text-4xl">Components</div>
				<div className="text-zinc-600 font-semibold max-md:text-sm">
					Browse through our diverse range of components including Buttons,
					Forms, Modals, and many more.
				</div>
			</MotionDiv>
			<div className="grid grid-cols-3 max-md:grid-cols-1 gap-10 mt-20">
				{Array.from({ length: 6 }).map((_, index) => (
					<MotionDiv
						key={index}
						className="bg-white border rounded-lg shadow-lg overflow-hidden cursor-pointer"
					>
						<div className="w-full aspect-video bg-zinc-200"></div>
						<div className="p-3">
							<div className="text-lg font-semibold">Button</div>
							<div className="line-clamp-2 text-ellipsis text-sm text-zinc-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
								odio nam doloremque, maxime beatae nisi accusantium, quaerat
								deleniti animi expedita sapiente facilis placeat eos, quas sint
								laboriosam quod? Neque, excepturi?
							</div>
						</div>
					</MotionDiv>
				))}
			</div>
		</div>
	);
};

export default HomepageComponents;
