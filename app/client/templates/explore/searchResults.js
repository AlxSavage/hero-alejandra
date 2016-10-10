SEARCH_TAB_KEY = "SEARCH_TAB_KEY";
DEFAULT_SEARCH_TAB = 'tab-1';

Session.set(SEARCH_TAB_KEY, null);

Template.searchResults.onCreated(function() {
    Template.searchResults.setTab(DEFAULT_SEARCH_TAB);
});

Template.searchResults.onRendered(function () {
});

Template.searchResults.helpers({
  isActiveTab: function(name) {
    return Session.equals(SEARCH_TAB_KEY, name);
  },
  activeTabClass: function() {
    return Session.get(SEARCH_TAB_KEY);
  },
  data: function() {
   return {
     user: Meteor.user()
   }
  },
  notFollowing: function() {
    let followingIds = Meteor.user().heroProfile.following;
    if (!followingIds || followingIds == []) {
      return [];
    } else {
      console.log('found some notFollowing');
      return Meteor.users.find({_id: { $nin: [follwingIds] }})  
    }
    
  } 
});

Template.searchResults.events({
  'click .js-show-tab-1': function(event) {
    Template.searchResults.setTab('tab-1');
  },
  'click .js-show-tab-2': function(event) {
    Template.searchResults.setTab('tab-2');
  },
  'click .js-show-tab-3': function(event) {
    Template.searchResults.setTab('tab-3');
  }
});



Template.searchResults.setTab = function(tab) {
    var lastTab = Session.get(SEARCH_TAB_KEY);
    var newTab = tab;
    Session.set(SEARCH_TAB_KEY, newTab);
};
