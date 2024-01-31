// WordPress
import { registerBlockType } from '@wordpress/blocks';

// Styles
import './style.scss';

// Block
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

// Children
import './card';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	...metadata,
	edit: Edit,
	save: Save,
} );
