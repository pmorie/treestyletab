/*
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

var configs;

function log(aMessage, ...aArgs)
{
  if (!configs || !configs.debug)
    return;

  var nest = (new Error()).stack.split('\n').length;
  var indent = '';
  for (let i = 0; i < nest; i++) {
    indent += ' ';
  }
  console.log(`treestyletab: ${indent}${aMessage}`, ...aArgs);
}

function dumpTab(aTab) {
  if (!configs || !configs.debug)
    return '';
  return `@${getTabIndex(aTab)}#${aTab.id}, title=${JSON.stringify(aTab.textContent)}`;
}

configs = new Configs({
  treeStructure: [],

  baseIndent: 12, // extensions.treestyletab.indent.vertical
  shouldDetectClickOnIndentSpaces: true, // extensions.treestyletab.clickOnIndentSpaces.enabled
  
  smoothScrollEnabled:  true, // extensions.treestyletab.tabbar.scroll.smooth
  smoothScrollDuration: 150, // extensions.treestyletab.tabbar.scroll.duration

  indentDuration:   200, // extensions.treestyletab.animation.indent.duration
  collapseDuration: 150, // extensions.treestyletab.animation.collapse.duration

  shouldExpandTwistyArea: true, // extensions.treestyletab.twisty.expandSensitiveArea

  scrollToNewTabMode: null, // extensions.treestyletab.tabbar.scrollToNewTab.mode
  counterRole: -1, // extensions.treestyletab.counter.role.vertical

  animation: true,
  debug:     false
});