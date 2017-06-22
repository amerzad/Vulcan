/* 

An item in the femaleProposals list.
Wrapped with the "withCurrentUser" container.

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

import FemaleProposals from '../../modules/femaleProposals/collection.js';
import FemaleProposalsEditForm from './FemaleProposalsEditForm.jsx';

const FemaleProposalsItem = ({femaleProposal, currentUser}) =>

  <div style={{paddingBottom: "15px",marginBottom: "15px", borderBottom: "1px solid #ccc"}}>

    {/* document properties */}
    
    <h4>{femaleProposal.name} ({femaleProposal.gradeYear})</h4>
    <p>{femaleProposal.notes} – {femaleProposal.user && femaleProposal.user.displayName}</p>
    
    {/* edit document form */}

    {FemaleProposals.options.mutations.edit.check(currentUser, femaleProposal) ?
      <Components.ModalTrigger label="Edit FemaleProposal">
        <FemaleProposalsEditForm currentUser={currentUser} documentId={femaleProposal._id} />
      </Components.ModalTrigger>
      : null
    }

  </div>

export default FemaleProposalsItem;