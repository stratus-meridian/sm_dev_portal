# Welcome to Stratus Meridian Developer Portal!

Developer portal V2 will give you a brand new interface with improved functionality in content editing filtering, better UI and also best in class performance.


# Installation
Use Composer to download latest source code and settings. Change *YOUR_DIRECTORY_NAME* and name it as you like for your installation root.
````
composer create-project stratus-meridian/drupal8-composer-project:8.x-dev YOUR_DIRECTORY_NAME --no-interaction
````
## Creating files and folders for your install

The package installer is supposed to create all files and folders you require. This should help in creating project's directory structure.

|                |           Location             |Can I modify These ?                         |
|----------------|-------------------------------|-----------------------------|
|**Stratus Meridian Profile files**|`'/web/profiles/contrib/sm_dev_portal'`            |Not advisable, because when you install updates, these will be overwritten.         |
|**Drupal Core Files**           |`/web/core/`            |Never touch these files. Security breaches can happen!           |
|**Custom Modules/ Themes**          |`/web/modules/custom/` and `/web/themes/custom/`|All your custom code should live here|


## Issues ?

Please raise an issue here on github.


## Schematic of  Developer portal connecting to Apigee Edge
The following chart shows how Apigee edge interacts with Developer portal. **Apps**, **Developers**, **developer keys and tokens** are synced from edge to dev portal. New Developers are created on portal, then synced back to edge, along with their apps and keys.

```mermaid
graph LR
A[Apigee Edge]  --> B((Apps))
A --> C((Devs))
B --> D{Developer Portal}
C --> D
E(New Developers) --requesting access to portal --> D
D{Developer Portal} --sync apps and developers back to edge --> A
```
