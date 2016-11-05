// Inserts and removes ui-hooks element with given velocity transitions
// $container: ui-hook container
// insertTransition: name of the velocity transition for node insert
// removeTransition: name of the velocity transition for node removal
// duration: transition duration
export default function($container, insertTransition, removeTransition, duration) {
  Template.instance().find($container)._uihooks = {
    insertElement: function(node, next, done) {
      var $node = $(node);
      $node
      .hide()
      .insertBefore(next)
      .velocity('transition.'+insertTransition, {
        duration: duration
      });
    },
    removeElement: function(node, done) {
      var $node = $(node);
      $node
      .velocity("transition."+removeTransition, {
        duration: duration,
        complete: function() {
          $node.remove();
        }
      });
    }
  };
};
