// WordPress
import {
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './style.scss';

/**
 * @description Create the save functionality for the individual card
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
export default function Save({ attributes }) {
	const { url, alt, title, body } = attributes;

	return (
		<article { ...useBlockProps.save({
			className: 'InterviewBlockCard',
		}) }>
			<header className="InterviewBlockCard-header">
				<figure className="InterviewBlockCard-figure">
					<img
						src={ url }
						alt={ alt }
						className="InterviewBlockCard-image"
					/>
				</figure>

				<RichText.Content tagName="h4" value={ title } className="InterviewBlockCard-title" />

			</header>

			<RichText.Content tagName="p" value={ body } className="InterviewBlockCard-body" />
		</article>
	);
}
