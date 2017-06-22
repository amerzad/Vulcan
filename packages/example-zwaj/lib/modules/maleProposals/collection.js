/*

The main MaleProposals collection definition file.

*/

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import resolvers from './resolvers.js';
import './fragments.js';
import mutations from './mutations.js';
import './permissions.js';
import './parameters.js';

const MaleProposals = createCollection({

  collectionName: 'MaleProposals',

  typeName: 'MaleProposal',

  schema,
  
  resolvers,

  mutations,

});

export default MaleProposals;
