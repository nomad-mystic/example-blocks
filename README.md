# Gutenberg block(s)

> Note: At Flickerbox with abstracted out all block creation into JSON schemas, so I created this block setup by hand.

## What is it:

A plugin that creates new blocks.

## What does it do:

Creates a new cards block with card block children.

## What we should look for:

* block.json
	* ./src/block.json
	* ./src/card/block.json
* save.js
	* ./src/save.js
      * `<InnerBlocks.Content />`
	* ./src/card/save.js
      * `<RichText.Content />`
* edit.js
	* ./src/edit.js
      * `<InspectorControls />`
      * `<PanelBody />`
      * `<RangeControl />`
      * `<InnerBlocks />`
	* ./src/card/edit.js
		* `<PanelBody />`
		* `<InspectorControls />`
		* `<RichText />`

## Images
### Two Columns (Two Cards)
![01_05_2024_two_columns.png](documentation%2Fimages%2F01_05_2024_two_columns.png)

### Three Columns (Three Cards)
![01_05_2024_three_columns.png](documentation%2Fimages%2F01_05_2024_three_columns.png)

### Four Columns (Four Cards)
![01_05_2024_four_columns.png](documentation%2Fimages%2F01_05_2024_four_columns.png)
