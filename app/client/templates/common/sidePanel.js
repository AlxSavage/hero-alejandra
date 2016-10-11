// sidePanel helpers getting the active side panel and the panel type
Template.sidePanel.helpers({
	activeSidePanel: function() {
		return Session.get('activeSidePanel');
	}
});

// sidePanel events
Template.sidePanel.events({
	// Hides the sidepanel
	'click .cover, click .js-close-sidepanel': function(e){
		$(".cover").velocity({ opacity: 0 ,transition:"all 0.1s ease"}, { visibility: "hidden" });
		$(".side-panel").velocity({ translateX: ["100%", 0] }, 300);
		delete Session.keys['activeSidePanel'];
		return false;  	
	},
	'click .cover, click .js-replace-sidepanel': function(e, template){
        Session.set('activeMessagesTab', template.$(e.target).data('panel-tab'));
        Session.set('activeSidePanel', template.$(e.target).data('panel-template'));
	}
});
