import setBrowserPolicies from './modules/set-browser-policies';
import seedDatabase from './modules/seed-database';

Meteor.startup( () => {
  setBrowserPolicies();
  seedDatabase();

	Inject.rawModHtml('addUnresolved',function(html){
	  return html = html.replace('<body>', '<body unresolved fullbleed>');
	});
});
