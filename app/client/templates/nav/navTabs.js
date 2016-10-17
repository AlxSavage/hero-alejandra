
// Todo, move to session var, configure routing if session var set
Template.navTabs.onCreated(function() {
  this.navTabSelection = new ReactiveVar(null);
})

Template.navTabs.helpers({
  isActiveTab: function(name) {
    console.log(name);
    return Template.instance().navTabSelection.get() == name;
  },
  navTabSelection: function(name) {
    return Template.instance().navTabSelection.get();
  }
});

Template.navTabs.events({
  'click .js-show-tab-1': function(event,template) {
    template.navTabSelection.set('tab-1');
    Router.go('feed');
  },
  'click .js-show-tab-2': function(event,template) {
    template.navTabSelection.set('tab-2');
  },
  'click .js-show-tab-3': function(event,template) {
    template.navTabSelection.set('tab-3');
  },
  'click .js-show-tab-4': function(event,template) {
    template.navTabSelection.set('tab-4');
  },
  'click .js-show-tab-5': function(event,template) {
    template.navTabSelection.set('tab-5');
  }
});