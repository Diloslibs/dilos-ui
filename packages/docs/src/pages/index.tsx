import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomepageHero from "../components/HomepageHero";

export function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={`${styles.buttons} mt-5`}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/get-started/installation"
					>
						Dilos UI Instalation - 5min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<main className="relative overflow-hidden">
				<div className="w-[1500px] h-[1500px] bg-radial-gradient opacity-30 absolute -z-50 -top-[50%] -left-[50%]"></div>
				<HomepageHero />
				<HomepageFeatures />
				<div className="w-[1500px] h-[1500px] bg-radial-gradient opacity-30 absolute -z-50 -bottom-[50%] -right-[50%]"></div>
			</main>
		</Layout>
	);
}
