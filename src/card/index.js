// WordPress
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import './editor.scss';
import metadata from './block.json';

// Add functions to metadata
metadata.edit = Edit;
metadata.save = Save;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, metadata);
