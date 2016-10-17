let templateTabGroupName = 'globalSearchTabs';

Template.globalSearch.onCreated(function() {
    Session.setDefault(templateTabGroupName, 'searchStories');
});

Template.globalSearch.helpers({
    isActiveTab: function(name) {
        return Session.equals(templateTabGroupName, name);
    },
    activeTabName: function() {
        return Session.get(templateTabGroupName);
    },
    tabKey: function() {
        return templateTabGroupName;
    }    
});

Template.globalSearch.events({
  'click .js-tab-trigger': function(e, template){
    e.preventDefault();
    let name = template.$(event.target).closest('.js-tab-trigger').data('tab-template');

    Session.set(templateTabGroupName, name);
  }
});
