Stratus Meridian Developer Portal

TABLE OF CONTENTS
-----------------

* Introduction
* Requirements
* Installation
* Configuration

INTRODUCTION
------------
 
 Stratus Meridian offers a unique selection of APIs in FinTech which you could consume and build your apps from.

 * For a full description of the profile, visit the project page:
   https://www.drupal.org/project/sm_dev_portal 
 
REQUIREMENTS
------------
 
 * Drupal 8
 * Apigee Edge module connect a Drupal 8 site to Apigee Edge in order to build a developer portal https://www.drupal.org/project/apigee_edge
 * Barrio Theme for base theme for this project. https://www.drupal.org/project/bootstrap_barrio
 * Shards for custom theme markup inspiration. https://designrevision.com/downloads/shards
 
INSTALLATION
------------
 
 Recommended Installation

 * composer self-update
 * composer create-project stratus-meridian/drupal8-composer-project:8.x-dev YOUR_DIRECTORY_NAME --no-interaction

 Composer Installation

 * composer create-project stratus-meridian/drupal8-composer-project

CONFIGURATION
-------------

 * User can override theme default ("Layout", "Components", "Affix", "Scroll SPY", "Fonts", "Colors" and "Documentation") configuration from here /admin/appearance/settings/sm_dev_portal_theme
