
Iron.utils.debug = true;

Router.configure({
  layoutTemplate: 'default',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'feed'
});

Router.route('/explore', {
  name: 'explore'
});

Router.route('/create-post', {
  name: 'createPost'
});

Router.route('/user-notifications', {
  name: 'userNotifications'
});

Router.route('/messages/:channel', {
  name: 'channel'
});

Router.route('/profile', {
  name: 'profile'
});


AccountsTemplates.configure({
  defaultLayout: 'default',
  showForgotPasswordLink: true,
  sendVerificationEmail: false,
  enablePasswordChange: true,    
  lowercaseUsername: true,
  focusFirstInput: true,
  showAddRemoveServices: false,
  showLabels: false,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,
  // onLogoutHook: accountsLogoutCallback,
  // onSubmitHook: accountSubmitCallback,
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,
  // privacyUrl: 'privacy',
  // termsUrl: 'terms-of-use',
  texts: {
    errors: {
      loginForbidden: 'Incorrect username or password',
      pwdMismatch: 'Passwords don\'t match'
    },
    title: {
      signIn: 'LOGIN',
      signUp: 'SIGN UP',
    },
    signUpLink_pre: "dontHaveAnAccount",
    signUpLink_link: "signUp",
    signUpLink_suff: "",      
  }
});

let accountsErrors = {
  userExists: "This username is already taken"
};
let pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: 'fullName',
      type: 'text',
      required: true,
      displayName: "Full Name",
      placeholder: "Full Name"
  },
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
      func: function(value){
          if (Meteor.isClient) {
              console.log("Validating username...");
              var self = this;
              Meteor.call("userExists", value, function(err, userExists){
                  if (!userExists)
                      self.setSuccess();
                  else
                      self.setError(accountsErrors.userExists);
                  self.setValidating(false);
              });
              return;
          }
          // Server
          return Meteor.call("userExists", value);
      },
      // errStr: ""    
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'This is not a valid email address.',
  },
  pwd
]);
AccountsTemplates.configureRoute('signIn', {
  name: 'login',
  path: '/login',
});
AccountsTemplates.configureRoute('signUp', {
  name: 'register',
  path: '/register',
});

var makeSureLoggedIn = function() {
  if (! Meteor.userId()) {
    this.render('atForm');
  } else {
    this.next();
  }
}

Router.onBeforeAction(makeSureLoggedIn, {
  except: ['login', 'register']
});