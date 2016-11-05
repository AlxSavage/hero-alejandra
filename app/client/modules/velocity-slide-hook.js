// Inserts and removes ui-hooks element with given velocity transitions
// $container: ui-hook container
// insertTransition && removeTransition: names of the velocity transitions for node insert and removal
// inDuration & outDuration: insert and delete transitions durations
export default function($container, insertTransition, removeTransition, inDuration, outDuration) {
  Template.instance().find($container)._uihooks = {
    insertElement: function(node, next, done) {
      var $node = $(node);
      $node
      .hide()
      .insertBefore(next)
      .velocity('transition.'+insertTransition, {
        duration: inDuration
      });
    },
    removeElement: function(node, done) {
      var $node = $(node);
      $node
      .velocity("transition."+removeTransition, {
        duration: outDuration,
        complete: function() {
          $node.remove();
        }
      });
    }
  };
};
