// WordPress
import {
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';

// Internal
import './style.scss';

/**
 * @description Create the save functionality for the cards
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
export default function Save({ attributes }) {
	const { columns } = attributes;

	return (
		<section { ...useBlockProps.save({
			className: `InterviewBlockCards has-${ columns }-columns`,
		}) }>
			<InnerBlocks.Content />
		</section>
	);
}
