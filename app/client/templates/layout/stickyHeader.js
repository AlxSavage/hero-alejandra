import velocitySlideHook from '../../modules/velocity-slide-hook';

Template.stickyHeader.onRendered(function() {
  velocitySlideHook("#sticky-header-hook", "slideDownIn", "slideUpOut", "600", "300");
});