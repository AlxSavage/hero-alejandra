import setScroll from './set-scroll';

let _handleInsert = ( message, event, template ) => {
  Meteor.call( 'insertMessage', message, ( error ) => {
    if ( error ) {
      console.log(error.reason);
    } else {
      template.find( '[name="message"]' ).value = '';
    }
  });
};

let _buildMessage = ( template, text ) => {
  return {
    destination: Router.current().params.channel.replace( '@', '' ),
    isDirect: template.isDirect.get(),
    message: text
  };
};

let _checkIfCanInsert = ( message, event, click ) => {
  return message !== '' && (event.keyCode === 13 || click === true);
};

let _getMessage = ( template ) => {
  let message = template.find( '[name="message"]' ).value;
  return message.trim();
};

export default function( event, template, click = false) {
  let text      = _getMessage( template ),
      canInsert = _checkIfCanInsert( text, event, click );

  if ( canInsert ) {
    setScroll( 'messages' );
    _handleInsert( _buildMessage( template, text ), event, template );
  }
}
