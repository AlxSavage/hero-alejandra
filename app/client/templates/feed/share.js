Template.share.onCreated(function() {
   this.storyId = this.data;
});

// Share helpers, we get the {{storyId}} var from the router
Template.share.helpers({
  storyId() {
    return Template.instance().storyId;
  }
});

// Share events
// If an item is being shared, [data-sharing="true"], otherwise, it's shown as [data-sharing="false"]
Template.share.events({
  'click .js-share': function(e){
    if ($(e.target).data('sharing')){
      $(e.target).removeClass("sharing").data('sharing', false);
    } else {
      $(e.target).addClass("sharing").data('sharing', true);
    }
  }
});

