import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {HiMail} from 'react-icons/all';
import secondToFrame from '../second-to-frame';

export default function YourEmail() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scaleText = spring({
		fps,
		frame,
	});
	const scaleMail = spring({
		fps: fps * 1.3,
		frame,
	});
	const moveRight = interpolate(
		frame,
		[secondToFrame(2, fps), secondToFrame(3, fps)],
		[0, 120],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
			easing: Easing.out(Easing.cubic),
		}
	);

	return (
		<div
			className="flex items-center flex-col gap-y-2"
			style={{
				transform: `translateX(${moveRight}%)`,
			}}
		>
			<HiMail
				size={64}
				className="text-white"
				style={{
					transform: `scale(${scaleMail})`,
				}}
			/>
			<h1
				className="text-3xl text-white font-bold"
				style={{
					transform: `scale(${scaleText})`,
				}}
			>
				your-email@example.com
			</h1>
		</div>
	);
}
