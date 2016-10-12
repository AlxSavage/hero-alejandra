// Open side panel function
export default function(event, template) {
  let name = template.$(event.target).closest('.side-panel-trigger').data('panel-template');
  Session.set('activeSidePanel', name);
  $(".cover").velocity({ opacity: 1,transformOrigin: "100% 50%",transition:"all 0.1s ease",translateX: "100%",translateX:"-6px" },{ visibility: "visible" }, 300);
  $(".side-panel").velocity({ translateX: [0, "100%"] }, {duration: 300, delay: 150});
}
