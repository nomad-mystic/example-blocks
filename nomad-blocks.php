<?php
/**
 * Plugin Name:       Nomad Blocks
 * Description:       Example blocks for demonstrating skills
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Version:           1.0.0
 * Author:            Keith Murphy | nomadmystics@gmail.com
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       nomad-blocks
 *
 * @package           nomad-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function nomad_blocks_nomad_blocks_block_init(): void {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'nomad_blocks_nomad_blocks_block_init' );
