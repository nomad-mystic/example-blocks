<?php
/**
 * Plugin Name:       Interview 10up
 * Description:       Example block for 10up interview
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Version:           1.0.0
 * Author:            Keith Murphy | nomadmystics@gmail.com
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       interview-10up
 *
 * @package           interview-10up
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function interview_10up_interview_10up_block_init(): void
{
	register_block_type(__DIR__ . '/build');
}

add_action('init', 'interview_10up_interview_10up_block_init');
