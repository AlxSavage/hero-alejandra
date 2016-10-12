Template.activeTab.helpers({
  activeTabTemplate: function(tabKey) {
      if (!tabKey) {
          return null;
      } else {
          return Session.get(tabKey);            
      }
  }
});