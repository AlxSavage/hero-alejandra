// Header events
Template.header.events({
	// Opens side menu for followers/following
	'click header .side-panel-trigger': function(e, template){
		Session.set('activeMessagesTab', template.$(e.target).closest('.side-panel-trigger').data('panel-tab'));
	},
	// Search box velocity.js effects
	'click .header-search': function(e){
		// $(".header-search-box").velocity({ width: '11rem' ,transition:"all 0.1s ease"}, 100);
		// $(".header-search").velocity({ width: '10rem' , 'border-radius': '2rem'}, 100);
		// $("#desktop-search").delay(100).velocity({ opacity: 1 }, { visibility: 'visible', complete: function() {$(this).focus();}});

		Session.set('activeGlobalSearch', true);
		$("#desktop-search").focus();
	},
	'click .js-fakeroute-to-post-form': function (e){
		Router.go('postFormPlaceholder')
	},
	'click .js-destroy-search': function(e, template) {
		e.preventDefault();
		Session.set('activeGlobalSearch', null);
	},
	'keydown':function(e,template) {
		console.log(e.keyCode);
		if(e.keyCode == 27){
			Session.set('activeGlobalSearch', null);
		}
	},
	'click .header-user img': function(e){ // User menu
		e.preventDefault();
		Session.set('showUserNav', true);
		toggleUserMenu($(e.target).next(".user-menu"), "192px");
	},
	'blur .user-menu': function(e){
		if ( Session.get('showUserNav') ) { 
			Session.set('showUserNav', false);
			toggleUserMenu($(".user-menu"), "192px"); 
		}
	}
})

// Helper functions 
toggleUserMenu = function($container, newHeight) {
	var opened = Session.get('showUserNav');
	$container.velocity({
		height: opened ? newHeight : "0",
		opacity: opened ? 1 : 0,
	}, {
		duration: 1000,
		easing: "easeOutCirc",
		complete: function() {
			$container.find("ul").velocity({ opacity: opened ? 1 : 0 });
		}
	});
	$container.find("a:first").focus();
};
