Template.stickyStoryBar.onRendered(function() {
	Template.instance().find('#sticky-story-bar-hook')._uihooks = {
	  insertElement: function(node, next, done) {
	    var $node = $(node);
	    $node
	    .hide()
	    .insertBefore(next)
	    .velocity('transition.slideUpIn', {
	      duration: 300
	    });
	  },
	  removeElement: function(node, done) {
	    var $node = $(node);
	    $node
	    .velocity("transition.slideDownOut", {
	      duration: 300,
	      complete: function() {
	        $node.remove();
	      }
	    });
	  }
	};
});