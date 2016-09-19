Session.set('activeMessagesTab', 'tab-1');

Template.userNotifications.onCreated(function() {
   Meteor.subscribe( 'userMessageChannels');
   Meteor.subscribe( 'recentMessages');
});

Template.userNotifications.helpers({
	activeTab() {
		let bool = Session.get('activeMessagesTab');
		return bool;
	},
  isActiveTab(name) {
		let equals = Session.equals('activeMessagesTab', name);
  	return equals;
  },
	currentChannel( name ) {
	  let current = Router.current().params.channel;
	  if ( current ) {
	    return current === name || current === `@${ name }` ? 'active' : false;
	  }
	},
	channels() {
	  let channels = Channels.find();
	  if ( channels ) {
	    return channels;
	  }
	},
  users() {
    let users = Meteor.users.find( { _id: { $ne: Meteor.userId() } } );
    if ( users ) {
      return users;
    }
  },
  fullName( name ) {
    if ( name ) {
      return `${ name.first } ${ name.last }`;
    }
  },
  recentMessages() {
    let messages = Messages.find({},{sort: {timestamp: -1}});

    if (messages) {
      return _.uniq(messages.fetch(),'owner');
    }
  },
  fromUsername( userId ) {
    if ( userId ) {
      let user = Meteor.users.findOne( userId, { fields: { 'username': 1 } } );
      return user && user.username ? user.username : null;
    }
  },
  sendersName( userId ) {
    if ( userId ) {
      let user = Meteor.users.findOne( userId, { fields: { 'profile.name': 1 } } );
      return user && user.profile.name.first ? `${ user.profile.name.first } ${ user.profile.name.last }` : `${ user.profile.name}`;
    }
  }
});

Template.userNotifications.events({
  'click .js-show-tab-1': function(event, template) {
    Session.set('activeMessagesTab', 'tab-1');
  },
  'click .js-show-tab-2': function(event, template) {
  	Session.set('activeMessagesTab', 'tab-2');
  }
});
