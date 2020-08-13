Stratus Meridian Developer Portal
=================================

**Guides to follow when updating/upgrading your existing Developer
Portal Installation Profile from version 2.0 to 2.1**

Before start doing the update, here are the preparations you need to
perform on your existing Developer Portal:

1.  Go to **Structure \> Display modes -\> View modes**. Under the API
    Doc, remove the **Cards View Mode** (Please take note that doing
    this will also remove the **View: API Catalog, Block: Exposed form:
    apigee_api_catalog-apidoc_list** which we will need to re-configure
    again later once the completed the update).

Update your existing Installation Profile by running the following composer command:

**composer update**. 

(Please take note a new version of **Apigee API
Catalog ver.2.2** will replace the old version which is used in this old
installation profile.) Once the update is completed, kindly run the
following drush command:

1.  **drush updb or drush updatedb**

2.  **drush cr or drush cache-rebuild**

By the time you have completed the update, you will notice a major
changes on API Docs, wherein it is now part of a node content type
(before, it is a separate Entity Type). Any custom fields you have
created inside of the old API Doc entity will be converted and migrated
as well to the new node content type. A new **API Catalog view** will be
generated and all **API Docs content** will be converted to this new
content type.

After the update, there are post update activities that needs to perform
in order to re-configure and restore the same look and feel of the **API
Catalog** from the old installation profile.

We need to perform an update-entity, to resolve the bug issue
listed on Status Report related to the API Doc.

In order to do that, please follow the steps below:

1.  On Modules list (go to **Extend**), enabled the following modules:

    a.  **Entity Update**

    b.  **Devel Entity Updates (requires Devel module)**

2.  Once installed, please run the following drush command:

    a.  **drush update-entity**

    b.  **drush cr or drush cache-rebuild**

3.  After running the said commands, uninstall **Entity Update and Devel
    Entity Updates modules**