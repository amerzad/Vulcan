/* 

Register the GraphQL fragment used to query for data

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment FemaleProposalsItemFragment on FemaleProposal {
    _id
    createdAt
    userId
    user {
      displayName
    }
    name
    gradeYear
    notes
  }
`);