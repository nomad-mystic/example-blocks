// WordPress
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	InspectorControls,
} from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

// Internal
import './style.scss';

/**
 * @description Create the edit functionality for the individual card
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
export default function Edit({ attributes, setAttributes }) {
	const { url, alt, title, body } = attributes;

	/**
	 * @description Set the title text
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @return void
	 */
	const onChangeTitle = (title) => {
		setAttributes({ title });
	};

	/**
	 * @description Set the body text
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @return void
	 */
	const onChangeBody = (body) => {
		setAttributes({ body });
	};

	/**
	 * @description Set the icon values
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @return void
	 */
	const onSelectImage = (image) => {
		// Sanity check
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: '' });

			return;
		}

		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};

	return (
		<article { ...useBlockProps({
			className: `InterviewBlockCard`,
		}) }>
			<InspectorControls>
				<PanelBody>
					<MediaPlaceholder
						icon="admin-users"
						onSelect={ onSelectImage }
						onError={ (err) => console.log(err) }
						accept="image/*"
						allowedTypes={ ['image'] }
					/>
				</PanelBody>
			</InspectorControls>

			<header className="InterviewBlockCard-header">
				{
					url && (
						<figure className="InterviewBlockCard-figure">
							<img src={ url } alt={ alt } className="InterviewBlockCard-image" />
						</figure>
					)
				}

				<RichText
					placeholder={ __('Card title...',) }
					tagName="h4"
					onChange={ onChangeTitle }
					value={ title }
					allowedFormats={ [] }
					className="InterviewBlockCard-title"
				/>
			</header>

			<RichText
				placeholder={ __('Card body...',) }
				tagName="p"
				onChange={ onChangeBody }
				value={ body }
				allowedFormats={ ['core/bold', 'core/italic'] }
				className="InterviewBlockCard-body"
			/>
		</article>
	);
}
