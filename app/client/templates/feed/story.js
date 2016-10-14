Template.story.onCreated(function() {
   this.storyId = this.data;
});

// Comments helpers, we get the {{storyId}} var from the router
Template.story.helpers({
  storyId() {
    return Template.instance().storyId;
  }
});