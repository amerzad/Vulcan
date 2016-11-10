import Telescope from 'meteor/nova:lib';
import Users from './collection.js';

const adminGroup = {
  name: "admin",
  order: 10
};

// check if user can create a new user
const canInsert = user => Users.canDo(user, "users.new");

// check if user can edit a user
const canEdit = Users.canEdit;

// check if user can edit *all* users
const canEditAll = user => Users.canDo(user, "users.edit.all");

const alwaysPublic = user => true;

/**
 * @summary Users schema
 * @type {SimpleSchema}
 */
Users.schema = new SimpleSchema({ 
  _id: {
    type: String,
    publish: true,
    optional: true,
    viewableIf: alwaysPublic,
  },
  username: {
    type: String,
    // regEx: /^[a-z0-9A-Z_]{3,15}$/,
    publish: true,
    optional: true,
    viewableIf: alwaysPublic,
  },
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  "emails.$.verified": {
    type: Boolean,
    optional: true
  },
  createdAt: {
    type: Date,
    publish: true,
    optional: true,
    viewableIf: alwaysPublic,
  },
  isAdmin: {
    type: Boolean,
    label: "Admin",
    control: "checkbox",
    optional: true,
    insertableIf: canEditAll,
    editableIf: canEditAll,
    viewableIf: alwaysPublic,
    group: adminGroup
  },
  profile: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // 👋 bye bye, 🔭 namespace
  // telescope: { // telescope-specific data
  //   type: Telescope.schemas.userData,
  //   optional: true,
  //   viewableIf: alwaysPublic,
  // },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  /**
    Bio (Markdown version)
  */
  __bio: {
    type: String,
    optional: true,
    control: "textarea",
    insertableIf: canInsert,
    editableIf: canEdit,
    viewableIf: alwaysPublic,
  },
  /**
    The name displayed throughout the app. Can contain spaces and special characters, doesn't need to be unique
  */
  __displayName: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: "text",
    insertableIf: canInsert,
    editableIf: canEdit,
    viewableIf: alwaysPublic,
  },
  /**
    The user's email. Modifiable.
  */
  __email: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email,
    required: true,
    control: "text",
    insertableIf: canInsert,
    editableIf: canEdit,
    viewableIf: alwaysPublic,
    // unique: true // note: find a way to fix duplicate accounts before enabling this
  },
  /**
    A hash of the email, used for Gravatar // TODO: change this when email changes
  */
  __emailHash: {
    type: String,
    publish: true,
    optional: true,
    viewableIf: alwaysPublic,
  },
  /**
    The HTML version of the bio field
  */
  __htmlBio: {
    type: String,
    publish: true,
    profile: true,
    optional: true,
    viewableIf: alwaysPublic,
  },
  /**
    The user's karma
  */
  __karma: {
    type: Number,
    decimal: true,
    publish: true,
    optional: true,
    viewableIf: alwaysPublic,
  },
  /**
    The user's profile URL slug // TODO: change this when displayName changes
  */
  __slug: {
    type: String,
    publish: true,
    optional: true,
    viewableIf: alwaysPublic,
  },
  /**
    The user's Twitter username
  */
  __twitterUsername: {
    type: String,
    optional: true,
    publish: true,
    profile: true,
    control: "text",
    insertableIf: canInsert,
    editableIf: canEdit,
    template: "user_profile_twitter",
    viewableIf: alwaysPublic,
  },
  /**
    A link to the user's homepage
  */
  __website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    publish: true,
    profile: true,
    optional: true,
    control: "text",
    insertableIf: canInsert,
    editableIf: canEdit,
    viewableIf: alwaysPublic,
  },
  /**
    Groups
  */
  __groups: {
    type: [String],
    optional: true,
    control: "checkboxgroup",
    insertableIf: canEditAll,
    editableIf: canEditAll,
    viewableIf: alwaysPublic,
    form: {
      options: function () {
        const groups = _.without(_.keys(Users.groups), "anonymous", "default", "admins");
        return groups.map(group => {return {value: group, label: group};});
      }
    },
  },
});

// Meteor.startup(function(){
//   Users.internationalize();
// });

/**
 * @summary Attach schema to Users (Meteor.users at the moment) collection
 */
Users.attachSchema(Users.schema);

Telescope.graphQL.addCollection(Users);

Telescope.graphQL.addToContext({ Users });
