Template.header.onCreated(function() {
	var self = this;
	self.headerClass = '';
	self.scroll = new ReactiveVar(0);
	$(window).on('scroll', function(e) {
		$(this).scrollTop() > 180 ? headerClass = 'sticky' : headerClass = ''
		self.scroll.set(headerClass);
	});
});

Template.header.helpers({
	scroll: function() { 
		return Template.instance().scroll.get(); 
	}
});
