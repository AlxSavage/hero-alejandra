// var TEMPLATE_KEY = 'overlayTemplate';
// var DATA_KEY = 'overlayData';
// var ANIMATION_DURATION = 400;

// Session.setDefault(TEMPLATE_KEY, null);

// Overlay = {
//   open: function(template, data) {
//     Session.set(TEMPLATE_KEY, template);
//     Session.set(DATA_KEY, data);
//   },
//   close: function() {
//     Session.set(TEMPLATE_KEY, null);
//     Session.set(DATA_KEY, null);
//   },
//   isOpen: function() {
//     return !Session.equals(TEMPLATE_KEY, null);
//   },
//   template: function () {
//     return Session.get(TEMPLATE_KEY);
//   },
//   data: function () {
//     return Session.get(DATA_KEY);
//   }
// }

// Template.overlay.helpers({
//   template: function() {
//     return Overlay.template();
//   },
  
//   data: function() {
//     return Overlay.data();
//   }
// });

// Template.overlay.events({
//   'click .js-close-overlay': function(event) {
//     event.preventDefault();
//     Overlay.close();
//   }
// });


// Template.overlay.onRendered(function() {
//   // Template.instance().find('#overlay-hook')._uihooks = {
//   //   insertElement: function(node, next, done) {
//   //     var $node = $(node);

//   //     $node
//   //     .hide()
//   //     .insertBefore(next)
//   //     .velocity('transition.slideUpIn', {
//   //       duration: ANIMATION_DURATION
//   //     });
//   //   },
//   //   removeElement: function(node, done) {
//   //     var $node = $(node);

//   //     $node
//   //     .velocity("fadeOut", {
//   //       duration: ANIMATION_DURATION,
//   //       complete: function() {
//   //         $node.remove();
//   //       }
//   //     });
//   //   }
//   // }
// });