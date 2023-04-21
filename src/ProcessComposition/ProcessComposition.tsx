import {AbsoluteFill} from 'remotion';
import YourEmail from './YourEmail';
import GitHubService from './GitHubService';
import Email from './Email';
import Emoji from './Emoji';

export default function ProcessComposition() {
	return (
		<AbsoluteFill className="items-center bg-github-dark justify-center">
			<div className="flex flex-row items-center justify-center">
				<YourEmail />
				<GitHubService />
			</div>
			<Email />
			<Emoji />
		</AbsoluteFill>
	);
}
