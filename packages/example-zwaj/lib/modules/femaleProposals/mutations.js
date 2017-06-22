/*

Define the three default mutations:

- new (e.g.: femaleProposalsNew(document: femaleProposalsInput) : FemaleProposal )
- edit (e.g.: femaleProposalsEdit(documentId: String, set: femaleProposalsInput, unset: femaleProposalsUnset) : FemaleProposal )
- remove (e.g.: femaleProposalsRemove(documentId: String) : FemaleProposal )

Each mutation has:

- A name
- A check function that takes the current user and (optionally) the document affected
- The actual mutation

*/

import { newMutation, editMutation, removeMutation, Utils } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {

  new: {
    
    name: 'femaleProposalsNew',
    
    check(user) {
      if (!user) return false;
      return Users.canDo(user, 'femaleProposals.new');
    },
    
    mutation(root, {document}, context) {
      
      Utils.performCheck(this.check, context.currentUser, document);

      return newMutation({
        collection: context.FemaleProposals,
        document: document, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },

  edit: {
    
    name: 'femaleProposalsEdit',
    
    check(user, document) {
      if (!user || !document) return false;
      return Users.owns(user, document) ? Users.canDo(user, 'femaleProposals.edit.own') : Users.canDo(user, `femaleProposals.edit.all`);
    },

    mutation(root, {documentId, set, unset}, context) {

      const document = context.FemaleProposals.findOne(documentId);
      Utils.performCheck(this.check, context.currentUser, document);

      return editMutation({
        collection: context.FemaleProposals,
        documentId: documentId, 
        set: set, 
        unset: unset, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },
  
  remove: {

    name: 'femaleProposalsRemove',
    
    check(user, document) {
      if (!user || !document) return false;
      return Users.owns(user, document) ? Users.canDo(user, 'femaleProposals.remove.own') : Users.canDo(user, `femaleProposals.remove.all`);
    },
    
    mutation(root, {documentId}, context) {

      const document = context.FemaleProposals.findOne(documentId);
      Utils.performCheck(this.check, context.currentUser, document);

      return removeMutation({
        collection: context.FemaleProposals,
        documentId: documentId, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },

};

export default mutations;
