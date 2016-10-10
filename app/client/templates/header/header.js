import openSidePanel from '../../modules/open-side-panel';

Template.header.onCreated(function() {
});

// Header helpers
Template.header.helpers({
});

// Header helpers
Template.header.events({
	// Search box velocity.js effects
	'click .header-search': function(e){
		$(".header-search-box").velocity({ width: '11rem' ,transition:"all 0.1s ease"}, 100);
		$(".header-search").velocity({ width: '10rem' , 'border-radius': '2rem'}, 100);
		$("#desktop-search").delay(100).velocity({ opacity: 1 }, { visibility: 'visible', complete: function() {$(this).focus();}});
	},
	'click #desktop-search': function(e){
		e.stopPropagation();
	},
	'blur .header-search': function(e){
		$(".header-search-box, .header-search, #desktop-search").velocity("reverse");
	},
	'click .js-fakeroute-to-post-form': function (e){
		Router.go('postFormPlaceholder')
	}
});

