import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import secondToFrame from '../second-to-frame';

export default function Logo() {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		fps,
		frame: frame - secondToFrame(10, fps),
	});

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<Img
				src={staticFile('logo.svg')}
				style={{
					transform: `scale(${scale})`,
				}}
			/>
		</div>
	);
}
