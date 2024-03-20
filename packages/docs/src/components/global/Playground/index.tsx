import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";

type MdxContent = () => JSX.Element;

interface ContentItem {
	key: string;
	code: MdxContent | UsageTargetOptions;
	src: string;
}

interface UsageTargetOptions {
	files: {
		[key: string]: MdxContent;
	};
	dependencies?: {
		[key: string]: string;
	};
}

interface PlaygroundProps {
	version: string;
	content: ContentItem[];
}

const Playground: React.FC<PlaygroundProps> = ({ content }) => {
	const [activeTab, setActiveTab] = useState<string>(content[0]?.key || "");

	const renderContent = (contentItem: ContentItem) => {
		if (typeof contentItem.code === "function") {
			// If content is a function (MDX Content), call the function to render the MDX content
			return <MDXProvider components={{}}>{contentItem.code()}</MDXProvider>;
		} else {
			const usageTargetOptions = contentItem.code as UsageTargetOptions;
			// If content is an object with 'files' property, it means it's UsageTargetOptions
			// Iterate over each file and render its content
			return Object.keys(usageTargetOptions.files).map((key) => (
				<div
					key={key}
					style={{ display: activeTab === key ? "block" : "none" }}
				>
					<h3>{key}</h3>
					{renderContent({
						key,
						code: usageTargetOptions.files[key],
						src: contentItem.src,
					})}
				</div>
			));
		}
		// If none matches, return null
		return null;
	};

	return (
		<div className="">
			<div className="border border-zinc-500 rounded-t-md p-3 flex items-center gap-3">
				{content.map((contentItem) => (
					<button
						key={contentItem.key}
						className={`capitalize px-3 py-1 ${activeTab === contentItem.key ? "bg-gradient-to-tr from-green-500 to-green-400 text-black rounded-sm font-semibold" : ""}`}
						onClick={() => setActiveTab(contentItem.key)}
					>
						{contentItem.key}
					</button>
				))}
			</div>
			{content.map((contentItem) => (
				<div key={contentItem.key} className={activeTab === contentItem.key ? "block" : "hidden"}>
					<iframe
						src={contentItem.src}
						className="bg-white w-full"
					/>
					{renderContent(contentItem)}
				</div>
			))}
		</div>
	);
};

export default Playground;
