/* 

An item in the maleProposals list.
Wrapped with the "withCurrentUser" container.

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

import MaleProposals from '../../modules/maleProposals/collection.js';
import MaleProposalsEditForm from './MaleProposalsEditForm.jsx';

const MaleProposalsItem = ({maleProposal, currentUser}) =>

  <div className="item-div">

    {/* document properties */}
    
    <h4>{maleProposal.name}</h4>
    <p>{maleProposal.user && maleProposal.user.displayName}</p>
    
    {/* edit document form */}

    {MaleProposals.options.mutations.edit.check(currentUser, maleProposal) ?
      <Components.ModalTrigger label="تعديل">
        <MaleProposalsEditForm currentUser={currentUser} documentId={maleProposal._id} />
      </Components.ModalTrigger>
      : null
    }

  </div>

export default MaleProposalsItem;