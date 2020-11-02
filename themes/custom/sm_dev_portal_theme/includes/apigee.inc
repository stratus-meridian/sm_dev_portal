 <?php

/**
 * @file
 * Theme and preprocess functions for Apigee Edge Entities.
 */

use Drupal\apigee_edge\Entity\AppInterface;

/**
 * Implements template_preprocess_apigee_entity().
 */
function sm_dev_portal_theme_preprocess_apigee_entity(&$variables) {
  /** @var \Drupal\Core\Entity\EntityInterface $entity */
  $entity = $variables['entity'];

  // Use a common preprocess for all apps.
  if ($entity instanceof AppInterface) {
    sm_dev_portal_theme_preprocess_apigee_entity__app($variables);
    return;
  }

  // Entity specific preprocess functions.
  $function = __FUNCTION__ . '__' . $entity->getEntityTypeId();
  if (function_exists($function)) {
    $function($variables);
  }
}

/**
 * Implements template_preprocess_apigee_entity__app().
 */
function sm_dev_portal_theme_preprocess_apigee_entity__app(array &$variables) {
  /** @var \Drupal\apigee_edge\Entity\AppInterface $app */
  $app = $variables['entity'];

  // Add local tasks on the app canonical route as additional tabs.
  $variables['additional_tabs'] = [];

  switch ($app->getEntityTypeId()) {
    case 'team_app':
      $canonical_route_name = 'entity.team_app.canonical';
      $route_parameters = [
        'team' => $app->getAppOwner(),
        'app' => $app->getName(),
      ];
      break;

    default:
      $canonical_route_name = "entity.{$app->getEntityTypeId()}.canonical_by_" . str_replace('_app', '', $app->getEntityTypeId());
      $route_parameters = [
        'user' => $app->getOwnerId(),
        'app' => $app->getName(),
      ];
      break;
  }

  if ($tasks = Drupal::service('plugin.manager.menu.local_task')->getLocalTasks($canonical_route_name)) {
    foreach ($tasks['tabs'] as $tab) {
      $link = $tab['#link'];

      /** @var \Drupal\Core\Url $url */
      $url = $link['url'];
      if ($url->getRouteName() !== $canonical_route_name) {
        $url->setRouteParameters($route_parameters);

        $variables['additional_tabs'][] = [
          'title' => $link['title'],
          'url' => $url,
        ];
      }
    }
  }

  if (!empty($variables['content']['add_keys'])) {
    /** @var \Drupal\Core\Url $url */
    $url = $variables['content']['add_keys']['#url'];
    $attributes = $url->getOption('attributes');

    // Add button classes to add_keys link.
    $attributes['class'] = array_merge($attributes['class'], ['btn', 'btn-primary', 'rounded-sm']);

    // Increase the height for the dialog.
    $attributes['data-dialog-options'] = json_encode([
      'width' => 500,
      'height' => 450,
      'draggable' => FALSE,
      'autoResize' => FALSE,
    ]);

    $url->setOption('attributes', $attributes);
  }
}

/**
 * Implements template_preprocess_apigee_entity__team().
 */
function sm_dev_portal_theme_preprocess_apigee_entity__team(array &$variables) {
  $app = $variables['entity'];

  $variables['additional_tabs'] = [];
  if ($app->getName()) $teamId = $app->getName();

  $canonical_route_name = 'entity.team.canonical';

  $route_parameters = [
    'team' => $teamId,
  ];

  if ($tasks = Drupal::service('plugin.manager.menu.local_task')->getLocalTasks($canonical_route_name)) {
    foreach ($tasks['tabs'] as $tab) {
      $link = $tab['#link'];

      /** @var \Drupal\Core\Url $url */
      $url = $link['url'];
      if ($url->getRouteName() !== $canonical_route_name) {
        $url->setRouteParameters($route_parameters);

        $variables['additional_tabs'][] = [
          'title' => $link['title'],
          'url' => $url,
        ];
      }
    }
  }
}

/**
 * Implements template_preprocess_apigee_entity__apidoc().
 */
function sm_dev_portal_theme_preprocess_apigee_entity__apidoc(&$variables) {
  // Add the view_mode to the template.
  $variables['view_mode'] = $variables['elements']['#view_mode'];

  // Add the entity to the template.
  /** @var \Drupal\Core\Entity\EntityInterface $entity */
  $variables['entity'] = $entity = $variables['elements']["#apidoc"];

  // Add a link to the entity.
  if ($variables['view_mode'] !== 'full') {
    $variables['content']['field_link'] = $entity->toLink(t('View Documentation'))
      ->toRenderable();
  }
}

/**
 * Implement template_preprocess_app_credentials().
 */
function sm_dev_portal_theme_preprocess_app_credential(&$variables) {
  // Render the consumerKey and the consumerSecret as secret fields.
  foreach (['consumerKey', 'consumerSecret'] as $field_name) {
    $variables['primary_wrapper'][$field_name]['value'] = [
      '#type' => 'secret',
      '#value' => $variables['primary_wrapper'][$field_name]['value']['#value'],
    ];
  }

  // Rename title to products.
  $variables['secondary_wrapper']['title']['#title'] = t('Products');
}
