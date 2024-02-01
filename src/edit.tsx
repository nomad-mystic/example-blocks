// WordPress
import { __ } from '@wordpress/i18n';

import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import { PanelBody, RangeControl } from '@wordpress/components';

// Styles
import './editor.scss';

// Types
import { CardsParams } from './cards-types';

/**
 * @description Create the edit functionality for the cards
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {CardsParams.attributes} attributes Our block attributes
 * @param {CardsParams.setAttributes} setAttributes
 * @return React.JSX.Element
 */
export default function Edit({ attributes, setAttributes }: CardsParams) {
	// Extract
	const { columns } = attributes;

	/**
	 * @description Set our columns
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @param {number | undefined} columns
	 * @return void
	 */
	const onChangeColumns = (columns: number | undefined) => {
		setAttributes({ columns });
	};

	return (
		<section
			{ ...useBlockProps({
				className: `NomadBlockCards has-${ columns }-columns`,
			}) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __('Columns', 'nomad-blocks') }
						min={ 2 }
						max={ 4 }
						onChange={ onChangeColumns }
						value={ columns }
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={ ['nomad/card'] }
				template={ [
					['nomad/card'],
					['nomad/card'],
					['nomad/card'],
				] }
			/>
		</section>
	);
}
