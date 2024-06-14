import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHero from "../components/HomepageHero";
import HomepageComponents from "../components/HomepageComponents/HomepageComponents";


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
				<HomepageComponents />
				<div className="w-[1500px] h-[1500px] bg-radial-gradient opacity-30 absolute -z-50 -bottom-[50%] -right-[50%]"></div>
			</main>
		</Layout>
	);
}
