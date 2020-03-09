<?php

/**
 * @file
 * Lists available colors and color schemes for Stratus Meridian Dev Portal theme.
 */

$info = [
	// Available colors and color labels used in theme.
	'fields' => [
		'topbarnavigation' => t('Topbar Navigation'),
		'footer' => t('Footer'),
		'text' => t('Headings & Text color'),
		'links' => t('Link color'),
		'primarycolor' => t('Primary Color'),
		'secondarycolor' => t('Secondary Color'),
		'successcolor' => t('Success Color'),
		'infocolor' => t('Info Color'),
		'warningcolor' => t('Warning Color'),
		'dangercolor' => t('Danger Color'),
		'lightcolor' => t('Light Color'),
		'darkcolor' => t('Dark Color'),
	],
	// Pre-defined color schemes.
	'schemes' => [
		'default' => [
			'title' => t('SM Dev Portal (default)'),
			'colors' => [
				'topbarnavigation' => '#fffffe',
				'footer' => '#f8f9fa',
				'text' => '#2a2c2d',
				'links' => '#0d5cff',
				'primarycolor' => '#007bff',
				'secondarycolor' => '#5a6169',
				'successcolor' => '#17c671',
				'infocolor' => '#00b8d8',
				'warningcolor' => '#ffb400',
				'dangercolor' => '#c4183c',
				'lightcolor' => '#e9ecef',
				'darkcolor' => '#212529',
			],
		],
		'portalcolor1' => [
			'title' => t('Portal Color #1'),
			'colors' => [
				'topbarnavigation' => '#4285F4',
				'footer' => '#1e2023',
				'text' => '#2a2c2d',
				'links' => '#4285F4',
				'primarycolor' => '#4285F4',
				'secondarycolor' => '#aa66cc',
				'successcolor' => '#00c851',
				'infocolor' => '#33b5e5',
				'warningcolor' => '#ffbb33',
				'dangercolor' => '#ff4444',
				'lightcolor' => '#e0e0e0',
				'darkcolor' => '#212121',
			],
		],
		'portalcolor2' => [
			'title' => t('Portal Color #2'),
			'colors' => [
				'topbarnavigation' => '#0d47a1',
				'footer' => '#1e2023',
				'text' => '#2a2c2d',
				'links' => '#0d47a1',
				'primarycolor' => '#0d47a1',
				'secondarycolor' => '#9933cc',
				'successcolor' => '#007e33',
				'infocolor' => '#0099cc',
				'warningcolor' => '#ff8800',
				'dangercolor' => '#cc0000',
				'lightcolor' => '#e0e0e0',
				'darkcolor' => '#212121',
			],
		],
		'portalcolor3' => [
			'title' => t('Portal Color #3'),
			'colors' => [
				'topbarnavigation' => '#59287a',
				'footer' => '#1e2023',
				'text' => '#2a2c2d',
				'links' => '#59287a',
				'primarycolor' => '#59287a',
				'secondarycolor' => '#00c9a7',
				'successcolor' => '#0dd157',
				'infocolor' => '#2972fa',
				'warningcolor' => '#fab633',
				'dangercolor' => '#fb4143',
				'lightcolor' => '#f6f9fc',
				'darkcolor' => '#1b1e24',
			],
		],
		'portalcolor4' => [
			'title' => t('Portal Color #4'),
			'colors' => [
				'topbarnavigation' => '#1abc9c',
				'footer' => '#1e2023',
				'text' => '#2a2c2d',
				'links' => '#1abc9c',
				'primarycolor' => '#1abc9c',
				'secondarycolor' => '#bdc3c7',
				'successcolor' => '#2ecc71',
				'infocolor' => '#3498db',
				'warningcolor' => '#f1c40f',
				'dangercolor' => '#e74c3c',
				'lightcolor' => '#bdbdbd',
				'darkcolor' => '#34495e',
			],
		],
	],

	// CSS files (excluding @import) to rewrite with new color scheme.
	'css' => [
		'color/colors.css',
	],

	// Gradient definitions.
	'gradients' => [
		[
			// (x, y, width, height).
			'dimension' => [0, 0, 0, 0],
			// Direction of gradient ('vertical' or 'horizontal').
			'direction' => 'horizontal',
			// Keys of colors to use for the gradient.
			'colors' => ['left', 'right'],
		],
	],
];
