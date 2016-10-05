import openSidePanel from '../../modules/open-side-panel';

Template.header.onCreated(function() {
	var self = this;
	self.scroll = new ReactiveVar('');
	$(window).on('scroll', function(e) {
		$(this).scrollTop() > 180 ? setStickyHeader(self) : removeStickyHeader(self);
	});
	//headerClass = 'sticky'
	//headerClass = ''
});

function setStickyHeader(self) {
	if (!$('header').hasClass('sticky')) {
		self.scroll.set('sticky');
		$('.header-backdrop').velocity({ translateY: 0 }, 100);
	}
}

function removeStickyHeader(self) {
	if ($('header').hasClass('sticky')) {
		self.scroll.set('');
		$('.header-backdrop').velocity("reverse").velocity({ translateY: '-4.5rem' }, 100);
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

