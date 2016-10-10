EXPLORE_SEARCHING_STATE = 'EXPLORE_SEARCHING_STATE';
EXPLORE_TAB_KEY = 'EXPLORE_TAB_KEY';
DEFAULT_EXPLORE_TAB = 'tab-1';

Session.set(EXPLORE_TAB_KEY, null);

Template.explore.onCreated(function() {
    if(Session.get('navTabSelection') != 'explore') {
      Session.set('navTabSelection', 'explore');
    };


    Template.explore.setTab(DEFAULT_EXPLORE_TAB);
    Session.set(EXPLORE_SEARCHING_STATE, null);
});

Template.explore.onRendered(function () {
});

Template.explore.helpers({
  isActiveTab: function(name) {
    return Session.equals(EXPLORE_TAB_KEY, name);
  },
  activeTabClass: function() {
    return Session.get(EXPLORE_TAB_KEY);
  },
  data: function() {
   return {
     //user: Meteor.user()
   }
  },
  searching: function() {
    return Session.get(EXPLORE_SEARCHING_STATE);
  } 
});

Template.explore.events({
  'click .js-show-tab-1': function(event) {
    Template.explore.setTab('tab-1');
  },
  'click .js-show-tab-2': function(event) {
    Template.explore.setTab('tab-2');
  },
  'click .js-cancel-search': function(event) {
    Session.set(EXPLORE_SEARCHING_STATE, null);
  },
  'focus #searchfield': function(event) {
    Session.set(EXPLORE_SEARCHING_STATE, true);
  },
  'click .js-show-search': function(event, template) {
    Overlay.open('searchResults', Template.instance());
  }
});

Template.explore.setTab = function(tab) {
    var lastTab = Session.get(EXPLORE_TAB_KEY);
    var newTab = tab;
    Session.set(EXPLORE_TAB_KEY, newTab);

    // var composedClassFrom = "." + lastTab + "-scrollable";
    // var composedClassTo = "." + newTab + "-scrollable";
};
