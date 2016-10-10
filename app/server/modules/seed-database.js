import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  Seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'bigguy1991',
      email: 'admin@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Carl', last: 'Winslow' }
      },
      roles: [ 'admin' ]
    },{
      username: 'beetsfan123',
      email: 'doug@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Doug', last: 'Funnie' }
      },
      roles: [ 'admin' ]
    }]
  });
};

let _seedChannels = () => {
  Seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ { name: 'general' } ]
  });
};

let _seedCategories = () => {
  let items = [];

  Seed( 'Categories', {
    environments: [ 'development', 'staging', 'production' ],
    data: [
      { name: "Food", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Road Trips", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Adventure", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Sports", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Wellness", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Guy Trips", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Girl Trips", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Festivals", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Boats", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Eco", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Charity", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Photogenic ", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Romance", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Staycation", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "History", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Spiritual Journeys", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Jetsetting", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Family Fun", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "North America", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Latin America", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "South America", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Mexico", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Europe", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Africa", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Australia", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Asia", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Caribbean ", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Beaches", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "South Pacific ", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Off Grid", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Cold Places", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Forests ", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 },
      { name: "Exotic", relatedCount: 0, defaultCategory: 1, createdAt: new Date(), promoted: 0, followerCount: 0 }
    ]
  });
};


export default function() {
  _seedUsers();
  _seedChannels();
  _seedCategories();
}
