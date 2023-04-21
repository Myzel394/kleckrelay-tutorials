import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FaVirus, HiMail, HiMailOpen} from 'react-icons/all';
import secondToFrame from '../second-to-frame';

export default function Email() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const mailScale = spring({
		fps,
		frame: frame - secondToFrame(4, fps),
	});
	const virus1Scale = spring({
		fps,
		frame: frame - secondToFrame(4.2, fps),
		config: {
			damping: 100,
		},
	});
	const virus2Scale = spring({
		fps,
		frame: frame - secondToFrame(4.5, fps),
		config: {
			damping: 100,
		},
	});
	const moveRight = interpolate(
		frame,
		[secondToFrame(5, fps), secondToFrame(6, fps)],
		[0, 820],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.bezier(0.5, 0.25, 0.43, 0.97),
		}
	);
	const virus1MoveProgress = interpolate(
		frame,
		[secondToFrame(6.4, fps), secondToFrame(7, fps)],
		[0, -160],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.bezier(0.5, 0.25, 0.43, 0.97),
		}
	);
	const virus2MoveProgress = interpolate(
		frame,
		[secondToFrame(6, fps), secondToFrame(6.6, fps)],
		[0, -160],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.bezier(0.5, 0.25, 0.43, 0.97),
		}
	);

	return (
		<div
			className="absolute"
			style={{
				left: 175,
				top: 500,
				transform: `translateX(${moveRight}px)`,
			}}
		>
			<div className="relative flex flex-col">
				<div
					style={{
						transform: `scale(${mailScale})`,
					}}
				>
					{frame > secondToFrame(6, fps) ? (
						<HiMailOpen
							size={48}
							className="text-gray-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
						/>
					) : (
						<HiMail
							size={48}
							className="text-gray-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
						/>
					)}
				</div>
				<div className="text-red-500 z-10 absolute -left-7 -top-5">
					<FaVirus
						size={24}
						style={{
							transform: `scale(${virus1Scale}) translateY(${virus1MoveProgress}px)`,
						}}
					/>
				</div>
				<div className="text-red-500 z-10 absolute left-2">
					<FaVirus
						size={24}
						style={{
							transform: `scale(${virus2Scale}) translateY(${virus2MoveProgress}px)`,
						}}
					/>
				</div>
			</div>
		</div>
	);
}
