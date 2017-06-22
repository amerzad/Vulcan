/* 

A component to configure the "edit maleProposal" form.

*/

import React from 'react';
import { Components, registerComponent, getFragment } from "meteor/vulcan:core";

import MaleProposals from '../../modules/maleProposals/collection.js';

const MaleProposalsEditForm = ({documentId, closeModal}) =>

  <Components.SmartForm 
    collection={MaleProposals}
    documentId={documentId}
    mutationFragment={getFragment('MaleProposalsItemFragment')}
    showRemove={true}
    successCallback={document => {
      closeModal();
    }}
  />

export default MaleProposalsEditForm;