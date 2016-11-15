Session.setDefault('activeGlobalSearch', null);

Template.explore.onCreated(function() {
  this.limit = new ReactiveVar(50);
  this.loaded = new ReactiveVar(0);

  this.autorun(() => {
    var opts = {
      limit: this.limit.get()
    };

    var subscription = this.subscribe('categories', opts);    

    if (subscription.ready()) {
      console.log("> Subscription is ready. \n\n");
      this.loaded.set(opts.limit);
    }
  });

  this.items = function() {
    return Categories.find({},{ sort: { promoted: -1, relatedCount: -1 }, limit: this.loaded.get() });
  };
});

Template.explore.helpers({
  categories: function(){
    return Template.instance().items();
  } 
});

Template.explore.events({
  'focus #mobile-search': function(e, template){
    e.preventDefault();
    Session.set('activeGlobalSearch', true);
  },
  'click .js-destroy-search': function(e, template) {
    e.preventDefault();
    Session.set('activeGlobalSearch', null);
  }  
});