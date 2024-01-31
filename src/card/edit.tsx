// WordPress
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	InspectorControls,
} from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

// Styles
import './style.scss';

// Types
import { CardAttributes, CardParams, CardTypes } from './card-types';

/**
 * @description Create the edit functionality for the individual card
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {CardParams.attributes} attributes
 * @param {CardParams.setAttributes} setAttributes
 * @return React.JSX.Element
 */
export default function Edit( { attributes, setAttributes }: CardParams ) {
	const { url, alt, title, body } = attributes as CardAttributes;

	/**
	 * @description Set the title text
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @param {string} title
	 * @return void
	 */
	const onChangeTitle = ( title: string ): void => {
		setAttributes( { title } );
	};

	/**
	 * @description Set the body text
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @param {string} body
	 * @return void
	 */
	const onChangeBody = ( body: string ): void => {
		setAttributes( { body } );
	};

	/**
	 * @description Set the icon values
	 * @public
	 * @author Keith Murphy | nomadmystics@gmail.com
	 *
	 * @param {CardTypes} image
	 * @return void
	 */
	const onSelectImage = ( image: CardTypes ): void => {
		// Sanity check
		if ( ! image || ! image.url ) {
			setAttributes( { url: undefined, id: undefined, alt: '' } );

			return;
		}

		setAttributes( { url: image.url, id: image.id, alt: image.alt } );
	};

	return (
		<article
			{ ...useBlockProps( {
				className: `NomadBlockCard`,
			} ) }
		>
			<InspectorControls>
				<PanelBody>
					<MediaPlaceholder
						icon="admin-users"
						onSelect={ onSelectImage }
						onError={ ( err ) => console.error( err ) }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						onHTMLDrop={ undefined }
					/>
				</PanelBody>
			</InspectorControls>

			<header className="NomadBlockCard-header">
				{ url && (
					<figure className="NomadBlockCard-figure">
						<img
							src={ url }
							alt={ alt }
							className="NomadBlockCard-image"
						/>
					</figure>
				) }

				<RichText
					placeholder={ __( 'Card title\u2026' ) }
					tagName="h4"
					onChange={ onChangeTitle }
					value={ title }
					allowedFormats={ [] }
					className="NomadBlockCard-title"
				/>
			</header>

			<RichText
				placeholder={ __( 'Card body\u2026' ) }
				tagName="p"
				onChange={ onChangeBody }
				value={ body }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				className="NomadBlockCard-body"
			/>
		</article>
	);
}
