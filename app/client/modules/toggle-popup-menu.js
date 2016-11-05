// Helper function for opening popup menus 
// Used on: header user menu, story's share menu for fixed action bar and action bar
// $container: class of the popup menu container
// newHeight: height for the popup menu after animation's end
// sessionVar: name of the session var that gets the 'opened' state
export default function($container, newHeight, sessionVar) {
    var opened = Session.get(sessionVar);
    $container.velocity({
        height: opened ? newHeight : "0",
        opacity: opened ? 1 : 0,
    }, {
        duration: 200,
        easing: "easeOutCirc",
        complete: function() {
            $container.find("ul").velocity({ opacity: opened ? 1 : 0 });
        }
    });
    $container.find("a:first").focus();
};
