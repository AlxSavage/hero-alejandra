import sortMessages from '../../modules/sort-messages';
import handleMessageInsert from '../../modules/handle-message-insert';

Template.channel.onCreated( () => {
  let template = Template.instance();
  template.isDirect = new ReactiveVar();
  template.loading  = new ReactiveVar( true );

  let channel = Router.current().params.channel;//FlowRouter.getParam( 'channel' );
  console.log(channel);

  if ( channel ) {
    let isDirect = channel.includes( '@' );
    template.isDirect.set( isDirect );
    template.loading.set( true );
    
    template.subscribe( 'channel', isDirect, channel, () => {
      // setScroll( 'messages' );
      setTimeout( () => { template.loading.set( false ); }, 300 );
    });
  }  

  //handleChannelSwitch( template );

});

Template.channel.helpers({
  isLoading() {
    return Template.instance().loading.get();
  },
  isDirect() {
    return Template.instance().isDirect.get();
  },
  username() {
    return Router.current().params.channel;
  },
  messages() {
    let messages = Messages.find( {}, { sort: { timestamp: 1 } } );
    if ( messages ) {
      return sortMessages( messages );
    }
  },
  chatWith() {
    return Router.current().params.channel;
  }
});

Template.channel.events({
  'keyup [name="message"]' ( event, template ) {
    handleMessageInsert( event, template );
  }
});
