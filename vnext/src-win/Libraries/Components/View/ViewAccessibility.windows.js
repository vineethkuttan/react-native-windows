/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {SyntheticEvent} from '../../Types/CoreEventTypes';

export type AccessibilityTrait =
  | 'none'
  | 'button'
  | 'link'
  | 'header'
  | 'search'
  | 'image'
  | 'selected'
  | 'plays'
  | 'key'
  | 'text'
  | 'summary'
  | 'disabled'
  | 'frequentUpdates'
  | 'startsMedia'
  | 'adjustable'
  | 'allowsDirectInteraction'
  | 'pageTurn' // [TODO(macOS ISS#2323203)
  | 'group'
  | 'list'; // ]TODO(macOS ISS#2323203)

export type AccessibilityTraits =
  | AccessibilityTrait
  | $ReadOnlyArray<AccessibilityTrait>;

export type AccessibilityComponentType =
  | 'none'
  | 'button'
  | 'radiobutton_checked'
  | 'radiobutton_unchecked';

// [TODO(android ISS)
export type AccessibilityNodeInfoProp = {
  clickable: boolean,
}; // ]TODO(android ISS)

// This must be kept in sync with the AccessibilityRolesMask in RCTViewManager.m
export type AccessibilityRole =
  | 'none'
  | 'button'
  | 'dropdownlist'
  | 'togglebutton'
  | 'link'
  | 'search'
  | 'image'
  | 'keyboardkey'
  | 'text'
  | 'adjustable'
  | 'imagebutton'
  | 'header'
  | 'summary'
  | 'alert'
  | 'checkbox'
  | 'combobox'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'scrollbar'
  | 'spinbutton'
  | 'switch'
  | 'tab'
  | 'tabbar'
  | 'tablist'
  | 'timer'
  | 'list'
  | 'toolbar'
  | 'grid'
  | 'pager'
  | 'scrollview'
  | 'group' // Windows
  | 'tree' // Windows
  | 'treeitem' // Windows
  | 'horizontalscrollview'
  | 'viewgroup'
  | 'webview'
  | 'drawerlayout'
  | 'slidingdrawer'
  | 'iconmenu'
  | 'listitem'; // RNW-only

// Role types for web
export type Role =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'meter'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'summary'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem';

// the info associated with an accessibility action
export type AccessibilityActionInfo = $ReadOnly<{
  name: string,
  label?: string,
  ...
}>;

// The info included in the event sent to onAccessibilityAction
export type AccessibilityActionEvent = SyntheticEvent<
  $ReadOnly<{actionName: string, ...}>,
>;

export type AccessibilityState = {
  disabled?: ?boolean,
  selected?: ?boolean,
  checked?: ?boolean | 'mixed',
  busy?: ?boolean,
  expanded?: ?boolean,
  readOnly?: ?boolean, // Windows
  multiselectable?: ?boolean, // Windows
  required?: ?boolean, // Windows
  ...
};

export type AccessibilityValue = $ReadOnly<{
  /**
   * The minimum value of this component's range. (should be an integer)
   */
  min?: number,

  /**
   * The maximum value of this component's range. (should be an integer)
   */
  max?: number,

  /**
   * The current value of this component's range. (should be an integer)
   */
  now?: number,

  /**
   * A textual description of this component's value. (will override minimum, current, and maximum if set)
   */
  text?: Stringish,
}>;
