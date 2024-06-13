import Link from "@docusaurus/Link";
import MotionDiv from "../global/MotionDiv";

export default function HomepageHero() {
	return (
		<section className="">
			<div className="container min-h-[70vh] grid grid-cols-2 items-center gap-5 max-md:flex max-md:flex-col-reverse">
				<div className="max-md:py-10">
					<MotionDiv className="text-[52px] leading-tight font-bold max-md:text-center max-md:text-[30px]">
						Simplify Your UI Development with Semantic Tailwind Classes
					</MotionDiv>
					<MotionDiv delay={0.5} className="mt-5 text-xl text-zinc-700 max-md:text-center max-md:text-sm">
						DilosUI is a Tailwind-based UI component library that provides a set
						of reusable and customizable UI components for your web
						applications.
					</MotionDiv>
					<MotionDiv delay={1} className="flex gap-3 items-center mt-10 max-md:justify-center">
						<Link to="/docs/get-started/installation">
							<div className="px-5 py-2 text-lg font-semibold bg-gradient-to-r from-green-700 to-green-600 hover:to-green-400 transition-all ease-in-out rounded-md cursor-pointer border border-transparent text-white max-md:px-2 max-md:py-1 max-md:text-md">
								Get Started
							</div>
						</Link>
						<Link to="/docs/category/components">
							<div className="px-5 py-2 text-lg font-semibold rounded-md cursor-pointer border border-zinc-500 text-zinc-400 hover:dark:bg-zinc-800 max-md:px-2 max-md:py-1 max-md:text-md">
								Components
							</div>
						</Link>
					</MotionDiv>
				</div>

				<MotionDiv delay={1.5} className="flex items-center justify-center max-md:mt-20">
					<img src="/img/hero-illustration.svg" alt="DilosUI Hero Image" className="max-md:w-[70%]" />
				</MotionDiv>
			</div>

			<div className="container flex flex-col gap-10 my-20 items-center justify-center">
				<MotionDiv delay={2} className="text-3xl font font-semibold max-md:text-center max-md:text-[20px] max-md:w-[50%] max-md:leading-tight">
					More than 25,000 teams use Collabs
				</MotionDiv>

				<MotionDiv delay={2.5} className="flex gap-10 items-center max-md:flex-col">
					<img
						src="/img/partner/unsplash.svg"
						alt="Partner Logo"
						className="h-8 w-auto"
					/>
					<img
						src="/img/partner/notion.svg"
						alt="Partner Logo"
						className="h-8 w-auto"
					/>
					<img
						src="/img/partner/intercom.svg"
						alt="Partner Logo"
						className="h-8 w-auto"
					/>
					<img
						src="/img/partner/descript.svg"
						alt="Partner Logo"
						className="h-8 w-auto"
					/>
					<img
						src="/img/partner/grammarly.svg"
						alt="Partner Logo"
						className="h-8 w-auto"
					/>
				</MotionDiv>
			</div>
		</section>
	);
}
