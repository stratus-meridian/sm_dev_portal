<?php

/**
 * @file
 * Template suggestions for SM Dev Portal
 */

use Drupal\block\Entity\Block;

function sm_dev_portal_theme_theme_suggestions_page_alter(array &$suggestions, array $variables) {
	$request = \Drupal::routeMatch();
	if ($node = $request->getParameter('node')) {
		if (!empty($node) && is_object($node)) {
			array_splice($suggestions, 2, 0, 'page__node__' . $node->getType());
			array_splice($suggestions, 3, 0, 'page__node__' . strtolower(str_replace(" ", "_", $node->getTitle())));
		}
	}

	if ($request->getRouteObject()->getDefault('entity_type_id') == 'developer_app') {
		if (!empty($request->getParameter('user'))) {
			if ($request->getRouteName() == 'entity.developer_app.collection_by_developer') {
				array_splice($suggestions, 4, 0, 'page__user__apps__' . $request->getRouteObject()->getDefault('entity_type_id'));
			}

			if (!empty($request->getParameter('app'))) {
				if (($request->getRouteName() !== 'entity.developer_app.edit_form_for_developer') &&
					($request->getRouteName() !== 'entity.developer_app.delete_form_for_developer') &&
					($request->getRouteName() !== 'entity.developer_app.analytics_for_developer'))
				{
					array_splice($suggestions, 5, 0, 'page__user__apps__' . $request->getRouteObject()->getDefault('entity_type_id') . '__full');
				}
			}
		}
	} else {
		if ((!empty($request->getParameter('team')))
			|| ($request->getRouteObject()->getDefault('_entity_list') == 'team')
			|| ($request->getParameter('entity_type_id') == 'team')) {

			if (($request->getRouteName() == 'entity.team_app.collection_by_team')
				|| ($request->getRouteName() == 'entity.team_app.canonical')
				|| ($request->getRouteName() == 'entity.team_app.add_form_for_team')
				|| ($request->getRouteName() == 'entity.team_app.edit_form')
				|| ($request->getRouteName() == 'entity.team_app.delete_form')
				|| ($request->getRouteName() == 'entity.team_app.analytics')) {

				array_splice($suggestions, 4, 0, 'page__teams__apps');
				if ($request->getRouteName() == 'entity.team_app.collection_by_team') {
					array_splice($suggestions, 5, 0, 'page__teams__apps__team_app');
				}

				if (!empty($request->getParameter('app'))) {
					if (($request->getRouteName() !== 'entity.team_app.edit_form') &&
						($request->getRouteName() !== 'entity.team_app.delete_form') &&
						($request->getRouteName() !== 'entity.team_app.analytics')) {

						array_splice($suggestions, 6, 0, 'page__teams__apps__team_app__full');
					}
				}
			}

			if (($request->getRouteName() == 'entity.team.collection')
				|| ($request->getRouteName() == 'entity.team.edit_form')
				|| ($request->getRouteName() == 'entity.team.delete_form')
				|| ($request->getRouteName() == 'entity.team.canonical')
				|| ($request->getRouteName() == 'entity.team.add_form')) {

				if (($request->getRouteName() == 'entity.team.collection')) {
					array_splice($suggestions, 5, 0, 'page__teams__list');
				}

				if (!empty($request->getParameter('team'))) {
					if (($request->getRouteName() !== 'entity.team.edit_form') &&
						($request->getRouteName() !== 'entity.team.delete_form')) {

						array_splice($suggestions, 6, 0, 'page__teams__full');
					}
				}
			}

			if (($request->getRouteName() == 'entity.team.add_members')
				|| ($request->getRouteName() == 'entity.team.members')
				|| ($request->getRouteName() == 'entity.team.member.remove')
				|| ($request->getRouteName() == 'entity.team.member.edit')) {

				array_splice($suggestions, 4, 0, 'page__teams__members');

				if (($request->getRouteName() == 'entity.team.members')) {
					array_splice($suggestions, 5, 0, 'page__teams__members__list');
				}

				if (!empty($request->getParameter('developer'))) {
					if (($request->getRouteName() !== 'entity.team.member.remove') &&
						($request->getRouteName() !== 'entity.team.member.edit')) {

						array_splice($suggestions, 6, 0, 'page__teams__members_full');
					}
				}
			}
		}
	}
}

function sm_dev_portal_theme_theme_suggestions_node_alter(array &$suggestions, array $variables) {
	if ($node = \Drupal::routeMatch()->getParameter('node')) {
		if (!empty($node) && is_object($node)) {
			array_splice($suggestions, 3, 0, 'node__' . strtolower(str_replace(" ", "_", $node->getTitle())));
		}
	}
}

function sm_dev_portal_theme_theme_suggestions_block_alter(array &$suggestions, array $variables) {
	// Block suggestions for custom block bundles.
	if (isset($variables['elements']['content']['#block_content'])) {
		array_splice($suggestions, 2, 0, 'block__' . $variables['elements']['content']['#block_content']->bundle());
	}
}

function sm_dev_portal_theme_theme_suggestions_form_alter(array &$suggestions, array $variables) {
	$suggestions[] = 'form__'.  str_replace('-','_',$variables['element']['#id']);
}

function sm_dev_portal_theme_theme_suggestions_table_alter(array &$suggestions, array $variables) {
	$request = \Drupal::routeMatch();

	if (!empty($request->getRouteName())) {
		$suggestions[] = 'table__'. str_replace('.', '_', $request->getRouteName());
	}
}
