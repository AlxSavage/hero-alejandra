// Helper function for opening popup menus 
// Used on: header user menu, story's share menu for fixed action bar and action bar
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
