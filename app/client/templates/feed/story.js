import togglePopUpMenu from '../../modules/toggle-popup-menu';
let templateTabGroupName = 'storyTabs';

Template.story.onCreated(function() {
  	this.storyId = this.data;
    Session.setDefault(templateTabGroupName, 'storyStory');
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
    },
    'click .action-share.fixed-icon': function(e){ // Share menu
        e.preventDefault();
        Session.set('showActionBarMenu', true);
        togglePopUpMenu($(e.target).next(".action-bar-menu"), "256px", "showActionBarMenu");
    },
    'click .action-bar-menu': function(e){
        if ( Session.get('showActionBarMenu') ) { 
            Session.set('showActionBarMenu', false);
            togglePopUpMenu($(".action-bar-menu"), "0px", "showActionBarMenu"); 
        }
    },
    'blur .action-bar-menu': function(e){
        if ( Session.get('showActionBarMenu') ) { 
            Session.set('showActionBarMenu', false);
            togglePopUpMenu($(".action-bar-menu"), "256px", "showActionBarMenu"); 
        }
    },
});
