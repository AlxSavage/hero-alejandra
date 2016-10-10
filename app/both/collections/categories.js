Categories = new Mongo.Collection('Categories');

if (Meteor.isServer) {
	Categories._ensureIndex( { "name": "text" } );	
	Categories._ensureIndex( { "relatedCount": -1 } );		
	Categories._ensureIndex( { "defaultCategory": -1 } );	
}
