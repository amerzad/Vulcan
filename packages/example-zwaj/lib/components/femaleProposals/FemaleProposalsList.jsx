/*

List of femaleProposals.
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

import FemaleProposals from '../../modules/femaleProposals/collection.js';
import FemaleProposalsItem from './FemaleProposalsItem.jsx';
import FemaleProposalsNewForm from './FemaleProposalsNewForm.jsx';

const FemaleProposalsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) =>
  
  <div className="proposalPage">

    { currentUser ?

        ( loading ?

          <Loading /> :

          <div className="femaleProposals">

            {/* new document form */}

            <FemaleProposalsNewForm />

            {/* documents list */}

            {results.map(femaleProposal => <FemaleProposalsItem key={femaleProposal._id} femaleProposal={femaleProposal} currentUser={currentUser} />)}

            {/* load more */}

            {totalCount > results.length ?
              <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>Load More ({count}/{totalCount})</a> :
              <p>No more items.</p>
            }

          </div>
        ) :
        <p>يرجى تسجيل الدخول!</p>
    }

  </div>
;
const options = {
  collection: FemaleProposals,
  fragmentName: 'FemaleProposalsItemFragment',
  limit: 5
};

export default withList(options)(withCurrentUser(FemaleProposalsList));