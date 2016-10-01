Template.header.onCreated(function() {
	var self = this;
	self.headerClass = '';
	self.scroll = new ReactiveVar(0);
	$(window).on('scroll', function(e) {
		$(this).scrollTop() > 180 ? headerClass = 'sticky' : headerClass = ''
		self.scroll.set(headerClass);
	});
});

// Functions to show and hide side panel with notifications
// TODO: Move to a Metheor function with templates
function showSidePanel() {
	$(".cover").velocity({ opacity: 1,transformOrigin: "100% 50%",transition:"all 0.1s ease",translateX: "100%",translateX:"-6px" },{ visibility: "visible" }, 300);
  $(".side-menu").velocity({ translateX: [0, "100%"] }, {duration: 300, delay: 150});
}

function hideSidePanel() {
	$(".cover").velocity({ opacity: 0 ,transition:"all 0.1s ease"}, { visibility: "hidden" });
  $(".side-menu").velocity({ translateX: ["100%", 0] }, 300);
}

// Header helpers
Template.header.helpers({
	scroll: function() { 
		return Template.instance().scroll.get(); 
	}
});

// Header helpers
// Sidemenu for notifications
Template.header.events({
  'click .side-menu-left': function(e){
		return showSidePanel();
		return false;  	
  },
  'click .reverse,.cover, a.page': function(e){
		return hideSidePanel();
		return false;  	
  }
});

