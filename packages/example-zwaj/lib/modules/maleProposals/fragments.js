/* 

Register the GraphQL fragment used to query for data

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment MaleProposalsItemFragment on MaleProposal {
    _id
    createdAt
    userId
    user {
      displayName
    }
    name
  }
`);