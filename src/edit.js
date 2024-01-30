// WordPress
import { __ } from '@wordpress/i18n';

import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import {
	PanelBody,
	RangeControl,
} from '@wordpress/components';

// Internal
import './editor.scss';

/**
 * @description Create the edit functionality for the cards
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
export default function Edit({ attributes, setAttributes }) {
	// Extract
	const { columns } = attributes;

	/**
	 * @description Set our columns
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @return void
	 */
	const onChangeColumns = (columns) => {
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
				orientation="horizontal"
				template={ [
					['nomad/card'],
					['nomad/card'],
					['nomad/card'],
				] }
			/>
		</section>
	);
}
