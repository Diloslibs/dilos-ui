import MotionDiv from "../global/MotionDiv";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="flex items-start justify-between my-40 max-md:flex-col max-md:text-center max-md:items-center max-md:my-3">
					<MotionDiv className="text-5xl font-bold max-md:text-4xl">
						Why Choose <br /> DilosUI?
					</MotionDiv>
					<MotionDiv
						delay={0.5}
						className="w-[40%] text-xl text-zinc-700 text-right max-md:w-full max-md:text-sm max-md:text-center max-md:mt-5"
					>
						DilosUI is a Tailwind-based UI component library that provides a set
						of reusable and customizable UI components for your web
						applications.
					</MotionDiv>
				</div>

				<div className="grid grid-cols-2 max-md:mb-10 max-md:grid-cols-1 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1 }}
						className="flex items-center justify-center"
					>
						<img
							src="/img/placeholder-illustrator.svg"
							alt="Feature 1"
							className="h-full max-md:w-[70%] max-md:mx-auto"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1.5 }}
						className="max-md:text-center"
					>
						<div className="text-4xl font-semibold max-md:text-2xl">
							Ready-to-Use Components
						</div>
						<div className="w-[70%] text-zinc-600 leading-loose mt-3 max-md:w-full max-md:text-sm">
							DilosUI offers a variety of ready-to-use UI components, making it
							easier for you to build attractive and functional user interfaces
							without starting from scratch.
						</div>
					</motion.div>
				</div>
				<div className="grid grid-cols-2 max-md:mb-10 max-md:flex max-md:flex-col-reverse items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1 }}
						className="flex flex-col items-end text-right max-md:text-center max-md:items-center"
					>
						<div className="text-4xl font-semibold max-md:text-2xl">Semantic Class Usage</div>
						<div className="w-[70%] text-zinc-600 leading-loose mt-3 max-md:w-full max-md:text-sm">
							By using semantic classes, DilosUI helps you avoid repetitive
							Tailwind class writing. This keeps your code clean and
							maintainable.
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1.5 }}
						className="flex items-center justify-center"
					>
						<img
							src="/img/placeholder-illustrator.svg"
							alt="Feature 1"
							className="h-full max-md:w-[70%] max-md:mx-auto"
						/>
					</motion.div>
				</div>
				<div className="grid grid-cols-2 max-md:mb-10 max-md:grid-cols-1 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1 }}
						className="flex items-center justify-center"
					>
						<img
							src="/img/placeholder-illustrator.svg"
							alt="Feature 1"
							className="h-full max-md:w-[70%] max-md:mx-auto"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1.5 }}
						className="max-md:text-center"
					>
						<div className="text-4xl font-semibold max-md:text-2xl">
							Multi-Framework Support
						</div>
						<div className="w-[70%] text-zinc-600 leading-loose mt-3 max-md:w-full max-md:text-sm">
							DilosUI is designed to support various popular frameworks like
							React, Vue, Angular, and more, ensuring broad flexibility and
							compatibility for different project needs.
						</div>
					</motion.div>
				</div>
				<div className="grid grid-cols-2 max-md:mb-10 max-md:flex max-md:flex-col-reverse items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1 }}
						className="flex flex-col items-end text-right max-md:text-center max-md:items-center"
					>
						<div className="text-4xl font-semibold max-md:text-2xl">Customizable</div>
						<div className="w-[70%] text-zinc-600 leading-loose mt-3 max-md:w-full max-md:text-sm">
							All components in DilosUI can be easily customized to meet your
							specific requirements. Adjust styles, layouts, and component
							behaviors effortlessly to create unique interfaces.
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1.5 }}
						className="flex items-center justify-center"
					>
						<img
							src="/img/placeholder-illustrator.svg"
							alt="Feature 1"
							className="h-full max-md:w-[70%] max-md:mx-auto"
						/>
					</motion.div>
				</div>

				<div className="grid grid-cols-2 max-md:mb-10 max-md:grid-cols-1 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1 }}
						className="flex items-center justify-center"
					>
						<img
							src="/img/placeholder-illustrator.svg"
							alt="Feature 1"
							className="h-full max-md:w-[70%] max-md:mx-auto"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 2, delay: 1.5 }}
						className="max-md:text-center"
					>
						<div className="text-4xl font-semibold max-md:text-2xl">
							Time and Cost Efficiency
						</div>
						<div className="w-[70%] text-zinc-600 leading-loose mt-3 max-md:w-full max-md:text-sm">
							With reusable components, you can save development time and focus
							on the core functionality of your application, thereby increasing
							efficiency and reducing development costs.
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
