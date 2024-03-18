import Link from "@docusaurus/Link";

export default function HomepageHero(): JSX.Element {
	return (
		<section className="">
			<div className="container min-h-[70vh] flex flex-col gap-3 items-center justify-center">
				<h1 className="text-center font-extrabold text-5xl max-md:text-4xl max-sm:text-3xl">
					Welcome to{" "}
					<span className="bg-gradient-to-r from-green-500 to-green-300 inline-block text-transparent bg-clip-text">
						DilosUI
					</span>
					<br /> Your Tailwind-Based UI Component Library
				</h1>
				<p className="mt-3 text-lg w-[50%] max-lg:w-[80%] text-center max-sm:text-md max-sm:w-full">
					DilosUI is a Tailwind-based UI component library that provides a set
					of reusable and customizable UI components for your web applications.
				</p>

				<div className="flex gap-3 items-center mt-5">
					<Link to="/docs/get-started/installation">
						<div className="px-5 py-2 text-lg font-semibold bg-gradient-to-r from-green-700 to-green-600 hover:to-green-400 transition-all ease-in-out rounded-md cursor-pointer border border-transparent text-white">
							Get Started
						</div>
					</Link>
					<Link to="/docs/category/components">
						<div className="px-5 py-2 text-lg font-semibold rounded-md cursor-pointer border border-zinc-500 text-zinc-400 hover:dark:bg-zinc-800">
							Components
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
}
