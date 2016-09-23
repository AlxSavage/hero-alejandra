Meteor.publish( 'recentMessages', function() {
    
    return Messages.find({
        $or: [{ to: this.userId }, { owner : this.userId } ]
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