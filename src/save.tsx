// WordPress
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

// Styles
import './style.scss';

// Types
import { CardsParams } from './cards-types.ts';

/**
 * @description Create the save functionality for the cards
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
export default function Save( { attributes }: CardsParams ) {
	const { columns } = attributes;

	return (
		<section
			{ ...useBlockProps.save( {
				className: `NomadBlockCards has-${ columns }-columns`,
			} ) }
		>
			<InnerBlocks.Content />
		</section>
	);
}
