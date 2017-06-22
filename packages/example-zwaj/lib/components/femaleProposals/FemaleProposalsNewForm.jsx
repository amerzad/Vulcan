/* 

A component to configure the "new femaleProposal" form.

*/

import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment } from 'meteor/vulcan:core';

import FemaleProposals from '../../modules/femaleProposals/collection.js';

const FemaleProposalsNewForm = ({currentUser}) =>

  <div>

    {FemaleProposals.options.mutations.new.check(currentUser) ?
      <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
        <h4>Insert New Document</h4>
        <Components.SmartForm 
          collection={FemaleProposals}
          mutationFragment={getFragment('FemaleProposalsItemFragment')}
        /> 
      </div> :
      null
    }

  </div>

export default withCurrentUser(FemaleProposalsNewForm);