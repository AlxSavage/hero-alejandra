Meteor.publish( 'recentMessages', function() {
    
    return Messages.find({
        to: this.userId
      }, {
        fields: {
          message: 1,
          owner: 1,
          timestamp: 1,
          to: 1
      },
      limit: 50
    });
});