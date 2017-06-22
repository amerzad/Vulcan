/*

Define the three default mutations:

- new (e.g.: maleProposalsNew(document: maleProposalsInput) : MaleProposal )
- edit (e.g.: maleProposalsEdit(documentId: String, set: maleProposalsInput, unset: maleProposalsUnset) : MaleProposal )
- remove (e.g.: maleProposalsRemove(documentId: String) : MaleProposal )

Each mutation has:

- A name
- A check function that takes the current user and (optionally) the document affected
- The actual mutation

*/

import { newMutation, editMutation, removeMutation, Utils } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

const mutations = {

  new: {
    
    name: 'maleProposalsNew',
    
    check(user) {
      if (!user) return false;
      return Users.canDo(user, 'maleProposals.new');
    },
    
    mutation(root, {document}, context) {
      
      Utils.performCheck(this.check, context.currentUser, document);

      return newMutation({
        collection: context.MaleProposals,
        document: document, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },

  edit: {
    
    name: 'maleProposalsEdit',
    
    check(user, document) {
      if (!user || !document) return false;
      return Users.owns(user, document) ? Users.canDo(user, 'maleProposals.edit.own') : Users.canDo(user, `maleProposals.edit.all`);
    },

    mutation(root, {documentId, set, unset}, context) {

      const document = context.MaleProposals.findOne(documentId);
      Utils.performCheck(this.check, context.currentUser, document);

      return editMutation({
        collection: context.MaleProposals,
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

    name: 'maleProposalsRemove',
    
    check(user, document) {
      if (!user || !document) return false;
      return Users.owns(user, document) ? Users.canDo(user, 'maleProposals.remove.own') : Users.canDo(user, `maleProposals.remove.all`);
    },
    
    mutation(root, {documentId}, context) {

      const document = context.MaleProposals.findOne(documentId);
      Utils.performCheck(this.check, context.currentUser, document);

      return removeMutation({
        collection: context.MaleProposals,
        documentId: documentId, 
        currentUser: context.currentUser,
        validate: true,
        context,
      });
    },

  },

};

export default mutations;
