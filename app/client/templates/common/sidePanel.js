// sidePanel helpers getting the active side panel and the panel type
Template.sidePanel.helpers({
	activeSidePanel: function() {
		return Session.get('activeSidePanel');
	},
	panelUser: function() {
		return Session.get('panelUser');
	}
});

// sidePanel events
Template.sidePanel.events({
	// Hides the sidepanel
	'click .cover, click .js-back': function(e){
		$(".cover").velocity({ opacity: 0 ,transition:"all 0.1s ease"}, { visibility: "hidden" });
		$(".side-panel").velocity({ translateX: ["100%", 0] }, 300);
		delete Session.keys['activeSidePanel', 'panelUser'];
		return false;  	
	}
});
