import Users from 'meteor/vulcan:users';

const membersActions = [
  'maleProposals.new',
  'maleProposals.edit.own',
  'maleProposals.remove.own',
];
Users.groups.members.can(membersActions);

const adminActions = [
  'maleProposals.edit.all',
  'maleProposals.remove.all'
];
Users.groups.admins.can(adminActions);
