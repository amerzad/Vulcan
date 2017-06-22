/* 

A component to configure the "new maleProposal" form.

*/

import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment } from 'meteor/vulcan:core';

import MaleProposals from '../../modules/maleProposals/collection.js';

const MaleProposalsNewForm = ({currentUser}) =>

  <div>

    {MaleProposals.options.mutations.new.check(currentUser) ?
      <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
        <h4>Insert New Document</h4>
        <Components.SmartForm 
          collection={MaleProposals}
          mutationFragment={getFragment('MaleProposalsItemFragment')}
        /> 
      </div> :
      null
    }

  </div>

export default withCurrentUser(MaleProposalsNewForm);