import openSidePanel from '../../modules/open-side-panel';

Template.header.onCreated(function() {
	var self = this;
	self.scroll = new ReactiveVar('');
	$(window).on('scroll', function(e) {
		checkScroll($(this).scrollTop(), self);
	});
});

Template.header.onRendered(function() {
	checkScroll(window.pageYOffset, this);
});

function checkScroll(scrollTop, self) {
	scrollTop > 180 ? setStickyHeader(self) : removeStickyHeader(self);
}

function setStickyHeader(self) {
	if (!$('header').hasClass('sticky')) {
		$('.header-backdrop').velocity("reverse").velocity({ translateY: 0 });
		self.scroll.set('sticky');
	}
}

function removeStickyHeader(self) {
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
	// Opens side menu for followers
  'click .side-panel-left': function(e, template){
  	openSidePanel(e, template);
  }
});

