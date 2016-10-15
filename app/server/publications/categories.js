Meteor.publish('categoryReactiveQuery', function (query, limit) {
  Meteor._sleepForMs(1000);
    console.log(query)
    return Categories.find({$or: [ {defaultCategory: 1}, {name: query} ]}, {limit: limit});

});

Meteor.publish("search", function(searchValue) {
	console.log(searchValue);
  if (!searchValue) {
    return Categories.find({defaultCategory: 1});
  }
  return Categories.find(
    { $text: {$search: searchValue, $caseSensitive: false} },
    {
      // `fields` is where we can add MongoDB projections. Here we're causing
      // each document published to include a property named `score`, which
      // contains the document's search rank, a numerical value, with more
      // relevant documents having a higher score.
      fields: {
        score: { $meta: "textScore" }
      },
      // This indicates that we wish the publication to be sorted by the
      // `score` property specified in the projection fields above.
      sort: {
        score: { $meta: "textScore" }
      }
    }
  );
});

Meteor.publish('categories', function(opts){
  if (opts.limit) {
    return Categories.find({}, {limit: opts.limit});
  } else {
    return [];
  }
});
