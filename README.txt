Stratus Meridian Developer Portal

TABLE OF CONTENTS
-----------------

* Introduction
* Requirements
* Installation
* Configuration

INTRODUCTION
------------
 
 Stratus Meridian developer portal distribution will help with acceleration of your API program. 

 * For a full description of the profile, visit the project page:
   https://www.drupal.org/project/sm_dev_portal 
 
REQUIREMENTS
------------
 
 * Drupal 8
 * Apigee Edge module as a connector to Apigee Edge. https://www.drupal.org/project/apigee_edge
 * Barrio Theme for base theme for this project. https://www.drupal.org/project/bootstrap_barrio
 
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
