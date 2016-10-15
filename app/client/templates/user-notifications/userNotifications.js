import openSidePanel from '../../modules/open-side-panel';

let templateTabGroupName = 'userNotificationsTabs';


Template.userNotifications.onCreated(function() {
    Session.setDefault(templateTabGroupName, 'activity');
});

Template.userNotifications.helpers({
    isActiveTab: function(name) {
        return Session.equals(templateTabGroupName, name);
    },
    activeTabName: function() {
        return Session.get(templateTabGroupName);
    },
    tabKey: function() {
        return templateTabGroupName;
    },



    // currentChannel( name ) {
    //     let current = Router.current().params.channel;
    //     if ( current ) {
    //         return current === name || current === `@${ name }` ? 'active' : false;
    //     }
    // },
    // channels() {
    //     let channels = Channels.find();
    //     if ( channels ) {
    //         return channels;
    //     }
    // },
    // users() {
    //     let users = Meteor.users.find( { _id: { $ne: Meteor.userId() } } );
    //     if ( users ) {
    //         return users;
    //     }
    // },
    // fullName( name ) {
    //     if ( name ) {
    //         return `${ name.first } ${ name.last }`;
    //     }
    // },
    // recentMessages() {
    //     let messages = Messages.find({},{sort: {timestamp: -1}});

    //     if (messages) {
    //         return _.uniq(messages.fetch(),'owner');
    //     }
    // },
    // fromUsername( userId ) {
    //     if ( userId ) {
    //         let user = Meteor.users.findOne( userId, { fields: { 'username': 1 } } );
    //         return user && user.username ? user.username : null;
    //     }
    // },
    // sendersName( userId ) {
    //     if ( userId ) {
    //         let user = Meteor.users.findOne( userId, { fields: { 'profile.name': 1 } } );
    //         return user && user.profile.name.first ? `${ user.profile.name.first } ${ user.profile.name.last }` : `${ user.profile.name}`;
    //     }
    // }
});

// we attach the event trigger here instead of the layout so that we can maintain separate session keys
// for different tabs throughout the application.
Template.userNotifications.events({
  'click .js-tab-trigger': function(e, template){
    e.preventDefault();
    let name = template.$(event.target).closest('.js-tab-trigger').data('tab-template');

    Session.set(templateTabGroupName, name);
  },
  //     'click .inboxMessage': function(event, template) {
  //         let messageOwner = template.$(event.target).closest('.inboxMessage').data('panel-owner');
  //         Session.set('chatWith', messageOwner);
  //         if (Session.get('showMobileNav')) {
  //             openSidePanel(event, template);
  //             console.log("mobile version");
  //         } else {
  //             Session.set('activeSidePanel', 'channel');
  //             console.log("show desktop");
  //         }
  //     }  
});