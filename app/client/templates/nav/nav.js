Template.nav.events({
	'click .js-back': function () {
		history.back();
	},
	'click .js-close': function () {
		console.log("Close");
	}
});