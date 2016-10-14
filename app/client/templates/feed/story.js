let templateTabGroupName = 'storyTabs';

Template.story.onCreated(function() {
  	this.storyId = this.data;
    Session.setDefault(templateTabGroupName, 'storyStories');
});

// Comments helpers, we get the {{storyId}} var from the router
Template.story.helpers({
	storyId() {
		return Template.instance().storyId;
	},
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

Template.story.events({
  'click .js-tab-trigger': function(e, template){
    e.preventDefault();
    let name = template.$(event.target).closest('.js-tab-trigger').data('tab-template');
    Session.set(templateTabGroupName, name);
  }
});
