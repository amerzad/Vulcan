import Users from 'meteor/vulcan:users';

const membersActions = [
  'femaleProposals.new',
  'femaleProposals.edit.own',
  'femaleProposals.remove.own',
];
Users.groups.members.can(membersActions);

const adminActions = [
  'femaleProposals.edit.all',
  'femaleProposals.remove.all'
];
Users.groups.admins.can(adminActions);
