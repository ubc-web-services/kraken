<?php

/**
 * @file
 * CLF THEME INFO.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */

function kraken_form_system_theme_settings_alter(&$form, FormStateInterface &$form_state)
{
  // Inject the ThemeSettingsProvider service where possible.
  $themeSettingsProvider = \Drupal::service('Drupal\Core\Extension\ThemeSettingsProvider');
  // Move the default theme settings to our custom vertical tabs for core theme
  // settings.
  $form['core'] = [
    '#type' => 'vertical_tabs',
    '#prefix' => '<h2><small>' . t('Override Global Settings') . '</small></h2>',
    '#weight' => 0,
  ];

  $form['theme_settings']['#group'] = 'core';
  $form['logo']['#group'] = 'core';
  $form['favicon']['#group'] = 'core';

  // CLF FORM SETTINGS.
  $form['clf_credits'] = [
    '#type' => 'fieldset',
    '#title' => t('UBC CLF Drupal Theme Information'),
    '#prefix' => '<h1>' . t('UBC CLF for Drupal') . '</h1>',
    '#weight' => -10,
    '#description' => t(
      'The CLF Drupal theme is a responsive theme, developed by the <a href=":url_web_services" title="Contact UBC IT Web Services" target="_blank">UBC IT Web Services Department</a>.<br><br>The <a href=":url_clf" title="Discover the UBC CLF Brand" target="_blank">CLF</a> is developed and distributed by Communications &amp; Marketing. For support <a href=":url_support" title="Contact UBC Communications & Marketing" target="_blank">please contact us</a>.<br><br>To report an issue with this theme, please visit <a href=":url_repo" target="_blank">the repository on Github</a>', [
        ':url_web_services' => 'https://web.it.ubc.ca/forms/webservices/',
        ':url_support' => 'https://clf.ubc.ca/support',
        ':url_repo' => 'https://github.com/ubc-web-services/kraken',
        ':url_clf' => 'https://brand.ubc.ca/clf',
      ]
    ),
  ];

  // Custom settings in Vertical Tabs container.
  $form['clf'] = [
    '#type' => 'vertical_tabs',
    '#prefix' => '<h2>' . t('CLF Settings') . '</h2>',
    '#weight' => -9,
    '#default_tab' => 'general',
  ];

  // CLF GENERAL OPTIONS.
  $form['general'] = [
    '#type' => 'details',
    '#title' => t('General Settings'),
    '#group' => 'clf',
  ];

  $form['general']['clf_8_name'] = [
		'#type' => 'textfield',
    '#prefix' => t('<h2>General Settings</h2>'),
		'#title' => t(
			'This field will populate the <a href=":url_unit_name" title="View the location of the Unit Name" target="_blank">Unit Name</a> in the header and the <a href=":url_unit_sub_footer" title="View the location of the Unit Sub Footer" target="_blank">Unit Sub Footer</a>.', [
				':url_unit_name' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-name',
				':url_unit_sub_footer' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-sub-footer',
			]
		),
		'#default_value' => $themeSettingsProvider->getSetting('clf_8_name', 'kraken'),
		'#size' => 60,
		'#maxlength' => 128,
		'#required' => true,
	];

	$form['general']['clf_8_color'] = [
		'#type' => 'select',
		'#title' => t('Theme Colors)'),
		'#description' => t(
			'Choose one of the 2 colour theme options for the Brand Identity Header. Grey is no longer an option. You can <a href=":url" target="_blank">compare the theme options here</a>.', [
				':url' => 'https://clf.ubc.ca/design-specifications/#theme-options',
			]
		),
		'#default_value' => $themeSettingsProvider->getSetting('clf_8_color', 'kraken'),
		'#options' => [
			'white' => t('Blue on White (Default)'),
			'blue' => t('White on Blue'),
		],
	];

	$form['general']['clf_8_layout'] = [
		'#type' => 'select',
		'#title' => t('CLF Layout'),
		'#description' => t(
			'Make the CLF Full Width and Centered, Fluid Width and Left Aligned, or Fixed Width and Centered. You can <a href=":url" target="_blank">compare the layout options here</a>.', [
				':url' => 'https://clf.ubc.ca/design-specifications/#layout-options',
			]
		),
		'#default_value' => $themeSettingsProvider->getSetting('clf_8_layout', 'kraken'),
		'#options' => [
			'full' => t('Full Width (Default)'),
			'fixed' => t('Fixed width, centered'),
			'stretch' => t('Fluid Width, Left-Aligned'),
		],
	];

	$form['general']['clf_8_campus'] = [
		'#type' => 'select',
		'#title' => t('Campus Identity'),
		'#description' => t(
			'This field shows your unit\'s campus mandate: Vancouver Campus or Okanagan Campus.<br /><small>If your unit has an institution-wide mandate or if neither choice is applicable, select the third option. See <a href=":url" target="_blank">Campus Identity</a> for guidelines.</small>', [
				':url' => 'https://clf.ubc.ca/parts-of-the-clf',
			]
		),
		'#default_value' => $themeSettingsProvider->getSetting('clf_8_campus', 'kraken'),
		'#options' => [
			'vancouver' => t('Vancouver'),
			'okanagan' => t('Okanagan'),
			'' => t('Institution-wide mandate / Not applicable'),
		],
	];

	$form['general']['clf_8_faculty'] = [
		'#type' => 'select',
		'#title' => t('If yes, choose your Faculty'),
		'#default_value' => $themeSettingsProvider->getSetting('clf_8_faculty', 'kraken'),
		'#options' => [
			'' => t('No Faculty'),
			'Allard School of Law' => t('Allard School of Law'),
			'Faculty of Applied Science' => t('Faculty of Applied Science'),
			'Faculty of Arts' => t('Faculty of Arts'),
			'Faculty of Dentistry' => t('Faculty of Dentistry'),
			'Faculty of Education' => t('Faculty of Education'),
			'Faculty of Forestry' => t('Faculty of Forestry'),
			'Faculty of Land and Food Systems' => t('Faculty of Land and Food Systems'),
			'Faculty of Medicine' => t('Faculty of Medicine'),
			'Faculty of Pharmaceutical Sciences' => t('Faculty of Pharmaceutical Sciences'),
			'Faculty of Science' => t('Faculty of Science'),
			'Graduate and Postdoctoral Studies' => t('Graduate and Postdoctoral Studies'),
			'Sauder School of Business' => t('Sauder School of Business'),
		],
	];

  $form['general']['clf_8_unit_text'] = [
    '#type' => 'checkbox',
    '#title' => t('Change the Unit name in the header to black (defaults to white)'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_8_unit_text', 'kraken'),
    ];

	$form['general']['clf_8_show_mobile_nav_trigger'] = [
		'#type' => 'checkbox',
		'#title' => t('Show the mobile navigation trigger'),
		'#description' => t('This option shows the mobile navigation trigger on small screens.'),
		'#default_value' => $themeSettingsProvider->getSetting('clf_8_show_mobile_nav_trigger', 'kraken'),
	];

	$form['general']['clf_8_search_path'] = [
		'#type' => 'textfield',
		'#title' => t('Search path'),
		'#description' => t('If you want to use the dropdown CLF search region as an internal search, enter the relative path here (e.g. <code>/search</code>, making sure to include the opening backslash.)'),
		'#default_value' => $themeSettingsProvider->getSetting('clf_8_search_path', 'kraken'),
		'#size' => 60,
		'#maxlength' => 128,
	];

  $form['general']['clf_dark_mode'] = [
    '#type' => 'checkbox',
    '#title' => t('Load Dark Mode stylesheet'),
    '#description' => t('Allow a Dark Mode option to be loaded if a user\'s preferences ask for it. This option is currently a placeholder.'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_dark_mode', 'kraken'),
  ];

  $form['general']['clf_fonts'] = [
    '#type' => 'select',
    '#title' => t('CLF typeface options'),
    '#description' => t(
      'UBC web branding uses two google fonts, <a href=":url" target="_blank">Merriweather</a> (serif, 400 & 700) and <a href=":url2" target="_blank">Open Sans</a> (sans-serif, 400, 600 and 700). Enabling this option loads them correctly from Google\'s CDN. If you\'d like to use the older Whitney webfont on the website, choose the version you will be using.<br /><small>Please note that the production version of Whitney is provided by Web Communications, requires authorization via <a href=":brandurl">this form</a>, and only includes two weights (400 and 600).</small>', [
      ':url' => 'https://fonts.google.com/?query=merriweather',
      ':url2' => 'https://fonts.google.com/?query=open+sans',
      ':brandurl' => 'http://brand.ubc.ca/font-request-form/',
      ]
    ),
    '#default_value' => $themeSettingsProvider->getSetting('clf_fonts', 'kraken'),
    '#options' => [
      '' => t("Don't load any webfonts"),
      'default' => t("Open Sans / Merriweather - Google CDN"),
      'legacy-dev' => t('Whitney - Development version'),
      'legacy-prod' => t('Whitney - Production version'),
    ],
  ];

	$form['general']['clf_sticky'] = [
		'#type' => 'checkbox',
		'#title' => t('Make the top navigation sticky?'),
		'#description' => t('This option allows the top navigation to stay pinned to the top of the page when scrolling.'),
		'#default_value' => $themeSettingsProvider->getSetting('clf_sticky', 'kraken'),
	];

  $form['general']['cwl_site'] = [
    '#type' => 'checkbox',
    '#title' => t('Display a CWL Login option'),
    '#description' => t(
        '<strong>Check this option if the site should display a CWL Login option on the <a href=":url" target="_blank">drupal login page</a>.</strong><br />Note that this does not implement CWL protection, but simply adds the form to the login page. If you are using a module like <strong><a href=":url2" target="_blank">Gin Login</a></strong>, you should disable it.', [
        ':url' => '/user',
        ':url2' => 'https://www.drupal.org/project/gin_login',
        ]
    ),
    '#default_value' => $themeSettingsProvider->getSetting('cwl_site', 'kraken'),
  ];

  // UBC unit information.
  $form['unit'] = [
    '#type' => 'details',
    '#title' => t('Unit Settings'),
    '#group' => 'clf',
  ];

  $form['unit']['clf_theme_unitbar_colour'] = [
    '#type' => 'color',
    '#prefix' => t('<h2>Unit Settings</h2><small>Unit settings for colours, spacing.</small>'),
    '#title' => t('Unit Bar Colour'),
    '#description' => t(
      'See design specifications for <a href=":url" title="Learn more about the Unit Name background colours" target="_blank">Unit Name background colours</a>.', [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => $themeSettingsProvider->getSetting('clf_theme_unitbar_colour', 'kraken'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_link_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Link Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--default-color-link</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => $themeSettingsProvider->getSetting('clf_theme_link_colour', 'kraken'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_link_hover_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Link Hover Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--default-color-link-hover</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => $themeSettingsProvider->getSetting('clf_theme_link_hover_colour', 'kraken'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_link_active_colour'] = [
    '#type' => 'color',
    '#title' => t('Unit Link Active Colour'),
    '#description' => t(
      'This colour will be set as a variable that can be used in your css as <code>--default-color-link-active</code>.',
      [
        ':url' => 'https://clf.ubc.ca/parts-of-the-clf/#unit-colors',
      ]
    ),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => $themeSettingsProvider->getSetting('clf_theme_link_active_colour', 'kraken'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_leading'] = [
    '#type' => 'textfield',
    '#title' => t('Theme Line Height'),
    '#description' => t('This will set a variable that can be used in your css as <code>--leading</code>. '),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => $themeSettingsProvider->getSetting('clf_theme_leading', 'kraken'),
    '#required' => true,
  ];

  $form['unit']['clf_theme_base_font_size'] = [
    '#type' => 'textfield',
    '#title' => t('Theme Base Font Size'),
    '#description' => t('This will set a variable that can be used in your css as <code>--base-font-size</code>. It should be set in px.'),
    '#size' => 7,
    '#maxlength' => 7,
    '#default_value' => $themeSettingsProvider->getSetting('clf_theme_base_font_size', 'kraken'),
    '#required' => true,
  ];

  // LOCATION INFORMATION.
   $form['location'] = [
    '#type' => 'details',
    '#title' => t('Location and Contact Settings'),
    '#group' => 'clf',
  ];

  $form['location']['clf_streetaddr'] = [
    '#type' => 'textfield',
    '#title' => t('Street Address'),
    '#prefix' => t('<h2>Location and Contact Settings</h2>'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_streetaddr', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_locality'] = [
    '#type' => 'textfield',
    '#title' => t('City'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_locality', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_region'] = [
    '#type' => 'textfield',
    '#title' => t('Province / Region'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_region', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_country'] = [
    '#type' => 'textfield',
    '#title' => t('Country'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_country', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_postal'] = [
    '#type' => 'textfield',
    '#title' => t('Postal Code'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_postal', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_telephone'] = [
    '#type' => 'textfield',
    '#title' => t('Telephone Number - format as xxx xxx xxxx (spaces only)'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_telephone', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_fax'] = [
    '#type' => 'textfield',
    '#title' => t('Fax Number - format as xxx xxx xxxx (spaces only)'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_fax', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_email'] = [
    '#type' => 'textfield',
    '#title' => t('Email'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_email', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['location']['clf_website'] = [
    '#type' => 'textfield',
    '#title' => t('Website'),
    '#description' => t('Do not include the <em>https://</em>'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_website', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  // social.
  $form['social'] = [
    '#type' => 'details',
    '#title' => t('Social Media Settings'),
    '#group' => 'clf',
  ];

  $form['social']['clf_social_facebook'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook Account Link'),
    '#prefix' => t('<h2>Social Media Settings</h2><small>Add Social Media icons/links to the unit footer</small>'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_social_facebook', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_twitter'] = [
    '#type' => 'textfield',
    '#title' => t('Twitter Account Link'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_social_twitter', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_instagram'] = [
    '#type' => 'textfield',
    '#title' => t('Instagram Account Link'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_social_instagram', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_linkedin'] = [
    '#type' => 'textfield',
    '#title' => t('Linkedin Account Link'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_social_linkedin', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  $form['social']['clf_social_youtube'] = [
    '#type' => 'textfield',
    '#title' => t('YouTube Account Link'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_social_youtube', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('Format of https://www.xyz.com'),
  ];

  // search.
  $form['search'] = [
    '#type' => 'details',
    '#title' => t('Search Settings'),
    '#group' => 'clf',
  ];

  $form['search']['clf_searchdomain'] = [
    '#type' => 'textfield',
    '#title' => t('Search Domain'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_searchdomain', 'kraken'),
    '#prefix' => t('<h2>Search Settings</h2>'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('This option allows you to limit search results in the global UBC search field to a specific domain other than this site. e.g. <strong>*.arts.ubc.ca</strong> or <strong>www.publicaffairs.ubc.ca/category/</strong>. The default searches only this site.'),
  ];

  $form['search']['clf_searchlabel'] = [
    '#type' => 'textfield',
    '#title' => t('Search Field Placeholder (usually your unit name)'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_searchlabel', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
    '#description' => t('This appears inside the search field as placeholder text. e.g. <strong>Search Pharmacy</strong>'),
  ];

  $form['search']['clf_google_verify'] = [
    '#type' => 'textfield',
    '#title' => t('Google Site Verification Code'),
    '#description' => t('Adds a meta tag to your site to allow you to verify the property with Google'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_google_verify', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  $form['search']['clf_bing_verify'] = [
    '#type' => 'textfield',
    '#title' => t('Bing Site Verification Code'),
    '#description' => t('Adds a meta tag to your site to allow you to verify the property with Bing'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_bing_verify', 'kraken'),
    '#size' => 60,
    '#maxlength' => 128,
  ];

  // extras.
  $form['extra'] = [
    '#type' => 'details',
    '#title' => t('Extra Settings'),
    '#group' => 'clf',
  ];

  $form['extra']['clf_noindex'] = [
    '#type' => 'checkbox',
    '#title' => t('<strong>Do <em>not</em> allow the site to be indexed</strong>'),
    '#prefix' => t('<h2>Extra Settings</h2><small>Additional miscellaneous options</small>'),
    '#description' => t('If this is <strong>not</strong> a production website, this checkbox will add a "nofollow" meta tag to all pages.'),
    '#default_value' => $themeSettingsProvider->getSetting('clf_noindex', 'kraken'),
  ];

  $form['extra']['unit_signature'] = [
    '#type' => 'managed_file',
    '#required' => false,
    '#title' => t('Unit signature (SVG)'),
    '#description' => t('This option allows an SVG of signature to be uploaded, which is then displayed in the unit footer.<br><strong>* ensure that svg is trimmed to artwork bounds.</strong>'),
    '#default_value' => $themeSettingsProvider->getSetting('unit_signature', 'kraken'),
    '#upload_location' => 'public://unit-signature/',
    '#upload_validators' => array(
      'file_validate_extensions' => array('svg'),
    ),
  ];

  if ($file_id = $form_state->getValue(['unit_signature', '0'])) {
    $file = \Drupal::entityTypeManager()->getStorage('file')->load($file_id);
    $file->setPermanent();
    $file->save();
  }
}
