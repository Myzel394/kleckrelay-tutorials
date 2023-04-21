import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import secondToFrame from '../second-to-frame';

export default function LaserScreen() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[
			secondToFrame(13, fps),
			secondToFrame(13.05, fps),
			secondToFrame(13.3, fps),
			secondToFrame(13.4, fps),
			secondToFrame(13.45, fps),
			secondToFrame(13.7, fps),
		],
		[0, 1, 0, 0, 1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div
			className="absolute left-0 top-0 w-full h-full bg-red-500 z-100"
			style={{
				opacity,
			}}
		/>
	);
}
