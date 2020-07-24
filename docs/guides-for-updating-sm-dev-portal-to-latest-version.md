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

After performing the steps above, its time to update your existing
Installation Profile by running the following composer command:
**composer update**. (Please take note a new version of **Apigee API
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

But first, we need to perform an update-entity, to resolve the bug issue
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

Next, we need to reconfigure the look and feel of the API Catalog as
what was seen on the old installation profile. To do this, here are the
steps:

**\
**

**\* Reconfigure Service Type Field and associated configuration to API
Doc Form and Front Display.**

1.  As mentioned above, the Service Type field (and all custom field)
    you have added from the old API Doc entity type will be converted.
    To reconfigure this field, go to **Structure \> Content types \> API
    Doc \> Manage Fields**.

2.  The Service Type field label: **apidoc.field_service_type (machine
    name: field_service_type_apidoc)** is listed on. Kindly click
    **Edit.**

3.  Please see the screenshots below for reference in reconfiguring the
    field.

![A screenshot of a social media post Description automatically
generated](.//media/image1.png){width="6.291666666666667in"
height="2.9979527559055117in"}

4.  On API Doc's content type **Manage Form Display (Structure \>
    Content type \> API Doc \> Manage Form Display)**, kindly re-enable
    and place the **Service Type field** after **URL to OpenAPI
    specification file field**. Use **Term reference Tree** as the
    field's widget.

5.  On API Doc's content type **Manage Display (Structure \> Content
    type \> API Doc \> Manage Display)**, select [Hidden]{.ul} on the
    Label of **Service Type field**. Also, select [Swagger UI or Redoc
    UI]{.ul} as the format for **OpenAPI specification field**.

6.  On **Custom Settings Display (scroll below)**, check **Cards**
    option to create a new display settings for API Doc content type.

7.  From here there will be two display settings / view modes for API
    Doc Content type: Default and Cards. We need to setup the fields
    that will be displayed on Cards view mode. Under the same Manage
    Display, click on Cards Tab.

![](.//media/image2.png){width="6.5in" height="2.0236111111111112in"}

8.  Disable the **OpenAPI specification field**.

9.  Change the format of **Description field** to **Smart Trim**. Please
    follow the configuration as seen on the screenshot.

![](.//media/image3.png){width="2.0833333333333335in"
height="2.5883847331583554in"}

[\* API Catalog views configuration and exposed form block
re-assigning]{.ul}

1.  Go to Structures \> View. Then, click Edit on API Catalog View.

2.  Please see the screenshots below on the views configuration.![A
    screenshot of a computer Description automatically
    generated](.//media/image4.png){width="5.966819772528434in"
    height="2.7666666666666666in"}

    -   [Settings for Unformatted List]{.ul}

        i.  Uncheck **Add views row classes** options

    -   [Settings Exposed Field: Content: Service Type]{.ul}

        i.  Vocabulary: API Category

        ii. Selection Type: Dropdown

        iii. On the Field's filter criterion select the following
             configuration:

             -   Filter type to expose: Single Filter

             -   Label: Service Type

             -   Check option -- Allow multiple selections

             -   **Filter Identifier - field_service_type_target_id**

             -   Check Options -- Reduce duplicates

    -   [Settings for User Pager]{.ul}

        i.  Select Pager: Infinite Scroll

        ii. Items per page: 3

    -   [Settings for Exposed Form]{.ul}

        i.  Exposed Form style: Better Exposed Filters

        ii. Enabled auto submit: Checked

        iii. Hide submit button: Checked

        iv. Exposed filter widget: Checkboxes/Radio Buttons

[\* Block layout configuration for Exposed Form:
apigee_api_catalog-apidoc_list]{.ul}

1.  Click **Place Block button** under **Page Hidden Region**.

2.  Search for **Exposed form: apigee_api_catalog-apidoc_list** and
    click Place block.

3.  Uncheck **Display title option.**

4.  Edit the block's machine-readable name to:
    **exposed_apidoc_service_type**

5.  Lastly, kindly clear Drupal's cache.
