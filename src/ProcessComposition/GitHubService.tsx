import {BsGithub} from 'react-icons/all';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import secondToFrame from '../second-to-frame';

export default function GitHubService() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scaleText = spring({
		fps,
		frame: frame - secondToFrame(2, fps),
	});
	const scaleMail = spring({
		fps: fps * 1.3,
		frame: frame - secondToFrame(2, fps),
	});

	return (
		<div
			className="flex items-center flex-col gap-y-4"
			style={{
				transform: 'translateX(-400%)',
			}}
		>
			<BsGithub
				size={64}
				className="text-white"
				style={{
					transform: `scale(${scaleMail})`,
				}}
			/>
			<h1
				className="text-lg text-white text-center w-40"
				style={{
					transform: `scale(${scaleText})`,
				}}
			>
				A service asking for your email
			</h1>
		</div>
	);
}
