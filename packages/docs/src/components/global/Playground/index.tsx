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
	title?: string;
	version: string;
	content: ContentItem[];
	height: number;
}

const Playground: React.FC<PlaygroundProps> = ({ title, content, height }) => {
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
			{title && <h2 className="mb-3">{title}</h2>}
			<div className="border border-muted rounded-t-lg p-3 flex items-center gap-3">
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
				<div
					key={contentItem.key}
					className={activeTab === contentItem.key ? "block" : "hidden"}
				>
					<div className="border border-muted border-t-0 mb-3 rounded-b-lg overflow-hidden iframe-box">
						<iframe
							src={contentItem.src}
							height={height ? height : 384}
							className={`bg-white w-full`}
						/>
					</div>
					{renderContent(contentItem)}
				</div>
			))}
		</div>
	);
};

export default Playground;
