Meteor.publish( 'userMessageChannels', function() {
  return [
    Channels.find(),
    Meteor.users.find( { _id: { $ne: this.userId } }, { fields: { username: 1, 'profile.name': 1 } } )
  ];
});

Meteor.publish( 'channel', function( isDirect, channel ) {
  check( isDirect, Boolean );
  check( channel, String );

  if ( isDirect ) {
    let user = Meteor.users.findOne( { username: channel.replace( '@', '' ) } );
    return Messages.find({
      $or: [ { owner: this.userId, to: user._id }, { owner: user._id, to: this.userId } ]
    });;
  } else {
    let selectedChannel = Channels.findOne( { name: channel } );
    return Messages.find( { channel: selectedChannel._id } );
  }
});
// Meteor.publish( 'userMessages', function() {
//   // check( isDirect, Boolean );
//   // check( channel, String );


//   // if ( isDirect ) {
//   //   let user = Meteor.users.findOne( { username: channel.replace( '@', '' ) } );
//   //   return Messages.find({
//   //     $or: [ { owner: this.userId, to: user._id }, { owner: user._id, to: this.userId } ]
//   //   });;
//   // } else {
//   //   let selectedChannel = Channels.findOne( { name: channel } );
//   //   return Messages.find( { channel: selectedChannel._id } );
//   // }

//   return Messages.find({
//     $or: [ { owner: this.userId }, {to: this.userId } ]
//   });;
// });
