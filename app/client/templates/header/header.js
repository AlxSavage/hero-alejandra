Template.header.events({
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
  }
});

