import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import secondToFrame from '../second-to-frame';
import {HiEmojiHappy} from 'react-icons/all';

export default function Emoji2() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		fps,
		frame: frame - secondToFrame(15.5, fps),
		config: {
			damping: 10,
		},
	});
	const opacity = interpolate(
		frame,
		[secondToFrame(15.5, fps), secondToFrame(16, fps)],
		[0, 0.8],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-50 flex flex-col items-center justify-center"
			style={{
				background: `rgba(0, 0, 0, ${opacity})`,
			}}
		>
			<HiEmojiHappy
				color="#FFD166"
				size={200}
				style={{
					transform: `scale(${scale})`,
				}}
			/>
		</div>
	);
}
