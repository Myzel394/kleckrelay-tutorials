import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import secondToFrame from '../second-to-frame';
import {HiEmojiSad} from 'react-icons/all';

export default function Emoji() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		fps,
		frame: frame - secondToFrame(7.5, fps),
		config: {
			damping: 10,
		},
	});
	const scaleOut = interpolate(
		frame,
		[secondToFrame(9, fps), secondToFrame(9.2, fps)],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.cubic),
		}
	);
	const opacity = interpolate(
		frame,
		[
			secondToFrame(7.5, fps),
			secondToFrame(8, fps),
			secondToFrame(9, fps),
			secondToFrame(9.2, fps),
		],
		[0, 0.8, 0.8, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center"
			style={{
				background: `rgba(0, 0, 0, ${opacity})`,
			}}
		>
			<HiEmojiSad
				color="#FFD166"
				size={200}
				style={{
					transform: `scale(${
						frame > secondToFrame(9, fps) ? scaleOut : scale
					})`,
				}}
			/>
		</div>
	);
}
