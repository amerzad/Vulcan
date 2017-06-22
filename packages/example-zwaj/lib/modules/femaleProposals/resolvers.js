/*

Three resolvers are defined:

- list (e.g.: femaleProposalsList(terms: JSON, offset: Int, limit: Int) )
- single (e.g.: femaleProposalsSingle(_id: String) )
- listTotal (e.g.: femaleProposalsTotal )

*/

import { addGraphQLResolvers } from 'meteor/vulcan:core';

// basic list, single, and total query resolvers
const resolvers = {

  list: {

    name: 'femaleProposalsList',

    resolver(root, {terms = {}}, context, info) {
      let {selector, options} = context.FemaleProposals.getParameters(terms, {}, context.currentUser);
      return context.FemaleProposals.find(selector, options).fetch();
    },

  },

  single: {
    
    name: 'femaleProposalsSingle',

    resolver(root, {documentId}, context) {
      const document = context.FemaleProposals.findOne({_id: documentId});
      return context.Users.restrictViewableFields(context.currentUser, context.FemaleProposals, document);
    },
  
  },

  total: {
    
    name: 'femaleProposalsTotal',
    
    resolver(root, {terms = {}}, context) {
      const {selector, options} = context.FemaleProposals.getParameters(terms, {}, context.currentUser);
      return context.FemaleProposals.find(selector, options).count();
    },
  
  }
};

// add the "user" resolver for the FemaleProposal type separately
const femaleProposalUserResolver = {
  FemaleProposal: {
    user(femaleProposal, args, context) {
      return context.Users.findOne({ _id: femaleProposal.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
    },
  },
};
addGraphQLResolvers(femaleProposalUserResolver);

export default resolvers;