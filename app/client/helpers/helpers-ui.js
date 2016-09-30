/*
* UI Helpers
* Define UI helpers for common template functionality.
*/

/*
* Meteor extensions
*/
UI.registerHelper("absoluteUrl", function(path) {
  return Meteor.absoluteUrl(path);
});

/*
* Environment: native and web userAgent identification
*/
UI.registerHelper('isIOS',function(){
  return ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
});
UI.registerHelper('isAndroid',function(){
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
});
UI.registerHelper('isNativeEnv',function(){
  return (( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ||  (navigator.userAgent.toLowerCase().indexOf("android") > -1)) ? true : false );
});
UI.registerHelper('isWebEnv',function(){
  return !( navigator.userAgent.match(/(iPad|iPhone|iPod|android)/g));
});

/*
* Current Route
* Return an active class if the currentRoute === passed name. 
*/
UI.registerHelper("currentRoute", function(name) {
  var current = Router.current();
  return current && current.route && current.route.getName() === name && "active" || "";
});

/*
* Dates and Strings
*/
UI.registerHelper('formatDate', function(context, options) {
  if(context)
    return moment(context).format("dddd, MMMM Do YYYY, h:mm:ss a");
});

UI.registerHelper('formatShortDate', function(context, options) {
  if(context)
    return moment(context).format("DD-MMMM-YYYY");
});

UI.registerHelper('relativeTime', function(context, options) {
  if(context)
    return moment(context).fromNow();
});

UI.registerHelper('pluralize', function(n, thing, options) {
  var plural = thing;
  if (_.isUndefined(n)) {
    return thing;
  } else if (n !== 1) {
    if (thing.slice(-1) === 's')
      plural = thing + 'es';
    else
      plural = thing + 's';
  }

  if (options && options.hash && options.hash.wordOnly)
    return plural;
  else
    return n + ' ' + plural;
});

UI.registerHelper('truncateText', function(string) {
  if(string)
    return string.substr(0,25)+ (string.length > 25 ? "..." : "");
});


UI.registerHelper( 'messageTimestamp', ( timestamp ) => {
  if ( timestamp ) {
    let today         = moment().format( 'YYYY-MM-DD' ),
        datestamp     = moment( timestamp ).format( 'YYYY-MM-DD' ),
        isBeforeToday = moment( today ).isAfter( datestamp ),
        format        = isBeforeToday ? 'MMMM Do, YYYY hh:mm a' : 'hh:mm a';
    return moment( timestamp ).format( format );
  }
});

UI.registerHelper( 'capitalize', ( string ) => {
  if ( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
  }
});

UI.registerHelper( 'lowercase', ( string ) => {
  if ( string ) {
    return string.toLowerCase();
  }
});

UI.registerHelper( 'parseMarkdown', ( string ) => {
  if ( string && parseMarkdown ) {
    return parseMarkdown( string );
  }
});

UI.registerHelper( 'currentUserId', () => {
  return Meteor.userId();
});
