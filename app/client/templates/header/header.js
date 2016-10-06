import openSidePanel from '../../modules/open-side-panel';

Template.header.onCreated(function() {
	// Reactive var creation for scroll and fixed header
	var self = this;
	self.scroll = new ReactiveVar('');
	$(window).on('scroll', function(e) {
		checkScroll($(this).scrollTop(), self);
	});
});

Template.header.onRendered(function() { // Checks scroll on load
	checkScroll(window.pageYOffset, this);
});

function checkScroll(scrollTop, self) { // Checks scroll
	scrollTop > 180 ? setStickyHeader(self) : removeStickyHeader(self);
}

function setStickyHeader(self) { // Sets sticky header and black backdrop
	if (!$('header').hasClass('sticky')) {
		$('.header-backdrop').velocity("reverse").velocity({ translateY: 0 });
		self.scroll.set('sticky');
	}
}

function removeStickyHeader(self) { // Removes the sticky header and sets the backdrop back
	if ($('header').hasClass('sticky')) {
		$('.header-backdrop').velocity("reverse").velocity({ translateY: '-4.5rem' }, 100);
		self.scroll.set('');
	}
}

// Header helpers
Template.header.helpers({
	scroll: function() { 
		return Template.instance().scroll.get(); 
	}
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
	}
});

