import {Composition} from 'remotion';
import './style.css';
import ProcessComposition from './ProcessComposition/ProcessComposition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={ProcessComposition}
				durationInFrames={60 * 9}
				fps={60}
				width={1280}
				height={720}
			/>
		</>
	);
};
