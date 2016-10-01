import openSidePanel from '../../modules/open-side-panel';

Template.header.onCreated(function() {
	var self = this;
	self.headerClass = '';
	self.scroll = new ReactiveVar(0);
	$(window).on('scroll', function(e) {
		$(this).scrollTop() > 180 ? headerClass = 'sticky' : headerClass = ''
		self.scroll.set(headerClass);
	});
});

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

