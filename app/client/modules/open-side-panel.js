// Open side panel function
export default function(event, template) {
  let name = template.$(event.target).data('panel-template');
  let type = template.$(event.target).data('panel-type');
  Session.set('activeSidePanel', name);
  Session.set('panelType', type);
  $(".cover").velocity({ opacity: 1,transformOrigin: "100% 50%",transition:"all 0.1s ease",translateX: "100%",translateX:"-6px" },{ visibility: "visible" }, 300);
  $(".side-panel").velocity({ translateX: [0, "100%"] }, {duration: 300, delay: 150});
}
