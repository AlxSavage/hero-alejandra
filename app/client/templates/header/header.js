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
// TODO: Fix reactive var after showing panel
function hideSidePanel() {
	$("body").velocity({ perspectiveOriginX:"0px", perspectiveOriginY:"50%"});
	$(".side-menu").velocity({ transformOrigin: "100% 50%",transition:"all 0.2s ease",translateX: "-100%", translateX:"6px"}).velocity({ opacity: 0 }, { display: "none" });
	$(".side-menu,.contents, body").velocity("reverse");
	$(".cover").velocity({ opacity: 0 ,transition:"all 0.1s ease"}, { visibility: "hidden" });
	$('.reverse').velocity({ left: "5px",transition:"all 0.1s ease" }).fadeOut(100);	
	$('.side-menu li').velocity('transition.swoopOut',{duration: 300, delay:100});
}

function showSidePanel() {
	$(".cover").velocity({ opacity: 1,transition:"all 0.1s ease" }, { visibility: "visible" });
	$(".contents").velocity({ translateX: "260px",transition:"all 0.1s ease",rotateY: "15deg",transformOrigin: "0px 50%"});
	$("body").velocity({perspective: "800px",perspectiveOriginX:"0px", perspectiveOriginY:"50%"});
	$(".side-menu").velocity({ opacity: 1 }, { display: "block" }).velocity({transformOrigin: "100% 50%",transition:"all 0.1s ease",translateX: "100%", translateX:"-6px"});
	$('.reverse').fadeIn().velocity({ left: "200px",transition:"all 0.1s ease" });
	$('.side-menu li').velocity('transition.swoopIn',{duration: 300, delay:100}).show();
	return false; 	
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
  },
  'mouseenter .side-menu li': function(e){
		$(this).velocity({rotateY: '30deg',duration: 300});
  },
  'mouseleave .side-menu li': function(e){
		$(this).velocity('reverse'); 
  }
});

