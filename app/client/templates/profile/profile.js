import openSidePanel from '../../modules/open-side-panel';

PROFILE_TAB_KEY = "PROFILE_TAB_KEY";
DEFAULT_PROFILE_TAB = 'tab-1';

Session.set(PROFILE_TAB_KEY, null);


Template.profile.onCreated(function() {
    Template.instance().subscribe( 'singleUser' )
    Template.profile.setTab(DEFAULT_PROFILE_TAB);
    Meteor.subscribe('posts.current');
});

Template.profile.helpers({
  configureHammer: function () {
    return function (hammer, templateInstance) {
      var swipeup = new Hammer.Swipe({
        event: 'swipeup',  
        pointers: 1,
        velocity: 0.5
      });
      var swipedown = new Hammer.Swipe({
        event: 'swipedown', 
        pointers: 1,
        velocity: 0.5
      });
      hammer.add(swipeup);
      // hammer.add(swipedown);

      return hammer;
    }
  },  
  profileGestures: {
    'swipeup .page-view-profile': function (event, templateInstance) {
      console.log('swipeup');
    },
    'swipedown .page-view-profile': function (event, templateInstance) {
      console.log('swipedown');
    }
  },  
  userPosts: function() {
    var data = Posts.find().fetch();
    if (data){
      return data;
    } else {
      return [];
    }
  },
  isActiveTab: function(name) {
    return Session.equals(PROFILE_TAB_KEY, name);
  },
  activeTabClass: function() {
    return Session.get(PROFILE_TAB_KEY);
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

Template.profile.events({
  'click .js-show-tab-1': function(event) {
    Template.profile.setTab('tab-1');
  },
  'click .js-show-tab-2': function(event) {
    Template.profile.setTab('tab-2');
  },
  'click .js-show-tab-3': function(event) {
    Template.profile.setTab('tab-3');
  },
  'click .js-show-tab-4': function(event) {
    Template.profile.setTab('tab-4');
  },
  // Opens side menu for followers/following
  'click .side-panel-profile': function(e, template){
    openSidePanel(e, template);
  }
  // 'click .js-uncollapse': function() {
  //   Template.profile.setTab(null);
  // }
});

Template.profile.setTab = function(tab) {
    var lastTab = Session.get(PROFILE_TAB_KEY);
    var newTab = tab;
    Session.set(PROFILE_TAB_KEY, newTab);

    // var composedClassFrom = "." + lastTab + "-scrollable";
    // var composedClassTo = "." + newTab + "-scrollable";
};
