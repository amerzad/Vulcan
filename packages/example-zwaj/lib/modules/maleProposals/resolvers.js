/*

Three resolvers are defined:

- list (e.g.: maleProposalsList(terms: JSON, offset: Int, limit: Int) )
- single (e.g.: maleProposalsSingle(_id: String) )
- listTotal (e.g.: maleProposalsTotal )

*/

import { addGraphQLResolvers } from 'meteor/vulcan:core';

// basic list, single, and total query resolvers
const resolvers = {

  list: {

    name: 'maleProposalsList',

    resolver(root, {terms = {}}, context, info) {
      let {selector, options} = context.MaleProposals.getParameters(terms, {}, context.currentUser);
      return context.MaleProposals.find(selector, options).fetch();
    },

  },

  single: {
    
    name: 'maleProposalsSingle',

    resolver(root, {documentId}, context) {
      const document = context.MaleProposals.findOne({_id: documentId});
      return context.Users.restrictViewableFields(context.currentUser, context.MaleProposals, document);
    },
  
  },

  total: {
    
    name: 'maleProposalsTotal',
    
    resolver(root, {terms = {}}, context) {
      const {selector, options} = context.MaleProposals.getParameters(terms, {}, context.currentUser);
      return context.MaleProposals.find(selector, options).count();
    },
  
  }
};

// add the "user" resolver for the MaleProposal type separately
const maleProposalUserResolver = {
  MaleProposal: {
    user(maleProposal, args, context) {
      return context.Users.findOne({ _id: maleProposal.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
    },
  },
};
addGraphQLResolvers(maleProposalUserResolver);

export default resolvers;