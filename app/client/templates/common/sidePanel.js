// sidePanel helpers getting the active side panel and the panel type
Template.sidePanel.helpers({
	activeSidePanel: function() {
		return Session.get('activeSidePanel');
	},
  panelType: function () {
		return Session.get('panelType');
  }
 });

// sidePanel events
Template.sidePanel.events({
	// Hides the sidepanel
  'click .cover': function(e){
		$(".cover").velocity({ opacity: 0 ,transition:"all 0.1s ease"}, { visibility: "hidden" });
	  $(".side-panel").velocity({ translateX: ["100%", 0] }, 300);
	  delete Session.keys['activeSidePanel','panelType'];
		return false;  	
  }
});
