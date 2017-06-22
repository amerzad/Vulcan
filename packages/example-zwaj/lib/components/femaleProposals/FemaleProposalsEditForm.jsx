/* 

A component to configure the "edit femaleProposal" form.

*/

import React from 'react';
import { Components, registerComponent, getFragment } from "meteor/vulcan:core";

import FemaleProposals from '../../modules/femaleProposals/collection.js';

const FemaleProposalsEditForm = ({documentId, closeModal}) =>

  <Components.SmartForm 
    collection={FemaleProposals}
    documentId={documentId}
    mutationFragment={getFragment('FemaleProposalsItemFragment')}
    showRemove={true}
    successCallback={document => {
      closeModal();
    }}
  />

export default FemaleProposalsEditForm;