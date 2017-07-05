/* 

An item in the maleProposals list.
Wrapped with the "withCurrentUser" container.

*/

import React from 'react';
import { Components, registerComponent } from 'meteor/vulcan:core';

const MaleProposalItem = ({maleProposal, currentUser}) =>

  <div className="item-div">

    {/* document properties */}
    
    <h4>{maleProposal.name}</h4>
    <p>{maleProposal.user && maleProposal.user.displayName}</p>
  </div>

export default MaleProposalItem;