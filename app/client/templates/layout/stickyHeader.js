Template.stickyHeader.onRendered(function() {

	Template.instance().find('#sticky-header-hook')._uihooks = {
	  insertElement: function(node, next, done) {
	    var $node = $(node);

	    $node
	    .hide()
	    .insertBefore(next)
	    .velocity('transition.slideDownIn', {
	      duration: 600
	    });
	  },
	  removeElement: function(node, done) {
	    var $node = $(node);

	    $node
	    .velocity("transition.slideUpOut", {
	      duration: 300,
	      complete: function() {
	        $node.remove();
	      }
	    });
	  }
	};

});