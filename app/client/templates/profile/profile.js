let templateTabGroupName = 'profileTabs';

Template.profile.onCreated(function() {
    Meteor.subscribe('posts.current');
    Session.setDefault(templateTabGroupName, 'profileStories');
});

Template.profile.helpers({
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
Template.profile.events({
  'click .js-tab-trigger': function(e, template){
    e.preventDefault();
    let name = template.$(event.target).closest('.js-tab-trigger').data('tab-template');

    Session.set(templateTabGroupName, name);
  },
  'click .st-count': function(e){
    $closestLike = $(e.target).closest('.st-count');
    if ($closestLike.data('liked-viewer')){
      $closestLike.removeClass("liked-viewer").data('liked-viewer', false);
    } else {
        $closestLike.addClass("liked-viewer").data('liked-viewer', true);
        $(e.target).closest('.shadow').velocity({ opacity: 0.5, fontSize: "1.5rem", left: "0.75rem", top: "-0.2rem" }, {
            duration: 400,
            complete: 
                function() {
                    $(e.target).closest('.shadow').velocity("reverse");
                }
            });
        }
    }






});

