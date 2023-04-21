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
	const virus3Scale = spring({
		fps,
		frame: frame - secondToFrame(11, fps),
		config: {
			damping: 100,
		},
	});
	const virus4Scale = spring({
		fps,
		frame: frame - secondToFrame(11.3, fps),
		config: {
			damping: 100,
		},
	});
	const moveRight = interpolate(
		frame,
		[
			secondToFrame(5, fps),
			secondToFrame(6, fps),
			secondToFrame(9, fps),
			secondToFrame(10, fps),
			secondToFrame(12, fps),
			secondToFrame(13, fps),
			secondToFrame(13.8, fps),
			secondToFrame(14.8, fps),
		],
		[0, 820, 820, 0, 0, 460, 460, 820],
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
	const virusOpacity = interpolate(
		frame,
		[secondToFrame(9, fps), secondToFrame(9.2, fps)],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
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
					{(frame > secondToFrame(6, fps) && frame < secondToFrame(9, fps)) ||
					frame > secondToFrame(14.8, fps) ? (
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
							opacity: virusOpacity,
						}}
					/>
				</div>
				<div className="text-red-500 z-10 absolute left-2">
					<FaVirus
						size={24}
						style={{
							transform: `scale(${virus2Scale}) translateY(${virus2MoveProgress}px)`,
							opacity: virusOpacity,
						}}
					/>
				</div>
				<div className="text-red-500 z-10 absolute -left-7 -top-5">
					{frame <= secondToFrame(13.05, fps) && (
						<FaVirus
							size={24}
							style={{
								transform: `scale(${virus3Scale})`,
							}}
						/>
					)}
				</div>
				<div className="text-red-500 z-10 absolute left-2">
					{frame <= secondToFrame(13.45, fps) && (
						<FaVirus
							size={24}
							style={{
								transform: `scale(${virus4Scale})`,
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
