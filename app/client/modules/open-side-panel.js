// Open side panel function
export default function(event, template) {
	let name = template.$(event.target).closest('.js-side-panel').data('panel-template');
	let user = template.$(event.target).closest('.js-side-panel').data('panel-user');
	console.log("name is ",name);
	Session.set('activeSidePanel', name);
	Session.set('panelUser', user);
	$(".cover").velocity({ opacity: 1,transformOrigin: "100% 50%",transition:"all 0.1s ease",translateX: "100%",translateX:"-6px" },{ visibility: "visible" }, 300);
	$(".side-panel").velocity({ translateX: [0, "100%"] }, {duration: 300, delay: 150});
}
