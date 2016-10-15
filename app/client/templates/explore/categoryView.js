let templateTabGroupName = 'categoryViewTabs';

Template.categoryView.onCreated(function() {
    Session.setDefault(templateTabGroupName, 'categoryTab1');
});

Template.categoryView.helpers({
    userPosts: function() {
        var data = Posts.find().fetch();
        if (data){
            return data;
        } else {
            return [];
        }
    },
    isActiveTab: function(name) {
        return Session.equals(templateTabGroupName, name);
    },
    activeTabName: function() {
        return Session.get(templateTabGroupName);
    },
    tabKey: function() {
        return templateTabGroupName;
    },
    data: function() {
        return {
            user: Meteor.user()
        }
    },
    userPicHelper: function() {
        return Users.avatar.getGravatarUrl(Meteor.user());
    }
});

Template.coverImage.helpers({
    fileRef: function () {
        console.log(Template.instance().data.id);
        return Images.findOne({_id: Template.instance().data.id});
    }
});

// we attach the event trigger here instead of the layout so that we can maintain separate session keys
// for different tabs throughout the application.
Template.categoryView.events({
  'click .js-tab-trigger': function(e, template){
    e.preventDefault();
    let name = template.$(event.target).closest('.js-tab-trigger').data('tab-template');

    Session.set(templateTabGroupName, name);
  },
  'click .js-fakeroute-explore': function (e,template) {
    console.log('fakerout');
    e.preventDefault();
    Router.go('explore');
  }
});

