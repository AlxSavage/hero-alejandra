import selectize from 'selectize';

Template.categories.onCreated(function() {
	this.limit = new ReactiveVar(100);
  this.loaded = new ReactiveVar(0);
  this.searchQuery = new ReactiveVar(null);
  this.selectizeData = new ReactiveVar(null);	

  this.autorun(() => {
    let limit = this.limit.get();
    let searchQuery = this.searchQuery.get();
    let subscription =  this.subscribe("search", searchQuery);

   //  if (subscription.ready()) {
   //    this.loaded.set(limit);

   //  	let data = Categories.find( {}, { fields:{ name: 1, relatedCount: 1 }, limit: limit } );

			// let res = [];
   //  	data.forEach(function (doc) {
   //  		res.push({label: doc.name, value: doc.name});
   //  	});
  	//   this.selectizeData.set(res);

  	//   let _setQuery = (query) => {
  	//   	if (query === null) {
  	//   		this.searchQuery.set(null);
  	//   	} else {
	  // 	  	this.searchQuery.set({name: query});	
  	//   	}
  	  	
  	//   }
   //  	let options = {
   //  		delimiter: ',',
   //  		hvalueeSelected: true,
   //  		persist: false,
   //  		create: function(input) {
   //  			console.log(input);
   //  			if ( !Categories.findOne({name: input}) ) {
   //  				return {
   //  				    value: input,
   //  				    label: input
   //  				}
   //  			} else {
   //  				return false;
   //  			}
   //  		},
   //  		plugins: {
   //  		  "remove_button": {}
   //  		},
   //  		valueField: 'value',
   //  		labelField: 'label',
   //  		searchField: 'label',
   //  		loadThrottle: 500,
   //  		selectOnTab: false,
   //  		load: function(query, callback) {
   //  			if (!query.length) {
   //  				_setQuery(null);
   //  				return callback();
   //  			};

   //  	// 		_setQuery(query);

   //  	// 		// callback();

		 //   //  	let data = Categories.find( {}, { fields:{ name: 1, relatedCount: 1 }, limit: limit } );

			// 		// let res = [];
		 //   //  	data.forEach(function (doc) {
		 //   //  		res.push({label: doc.name, value: doc.name});
		 //   //  	});    			

		 //   //  	callback(res);

   //  			// let data = Categories.find( {} );

   //  			// if ( data ) {
   //  			//   var uniques = _.uniq( data.map( ( item ) => {
   //  			//     return item.name;
   //  			//   }), false );

   //  			//   var res = [];
   //  			//   for (var i = 0; i < uniques.length; i++) {
   //  			//     res.push({label: uniques[i], value: uniques[i]});
   //  			//   }

   //  			//   callback(res);
   //  			// }
   //  		},
   //  		options: this.selectizeData.get()
   //  	};
   //  	$('.tags-input').selectize(options);
   //  }
  });
});

Template.categories.helpers({
  categories: function() {
    if (Session.get("searchValue")) {
    	console.log(Categories.find({}).count() + ' items found');
      return Categories.find({}, { sort: [["score", "desc"]] });
    } else {
    	console.log(Categories.find({}).count() + ' items found');
      return Categories.find({});
    }
  }
});

Template.categories.events({
	'input #searchValue': function (event, template) {
		  event.preventDefault();
		  console.log('searching');
		  template.searchQuery.set( $("#searchValue").val() );
		  // Session.set("searchValue", $("#searchValue").val());
	},
	// 'change #searchValue': function (event, template) {
	// 	  event.preventDefault();
	// 	  console.log('searching');
	// 	  Session.set("searchValue", $("#searchValue").val());
	// },
});

    // "submit #search": function (e) {
    //   e.preventDefault();
    //   Session.set("searchValue", $("#searchValue").val());
    // }