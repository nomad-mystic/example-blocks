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
				className: `InterviewBlockCards has-${ columns }-columns`,
			}) }
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __('Columns', 'interview-10up') }
						min={ 2 }
						max={ 4 }
						onChange={ onChangeColumns }
						value={ columns }
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks
				allowedBlocks={ ['interview-10up/card'] }
				orientation="horizontal"
				template={ [
					['interview-10up/card'],
					['interview-10up/card'],
					['interview-10up/card'],
				] }
			/>
		</section>
	);
}
