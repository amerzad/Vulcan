/* 

List of maleProposals.
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

import MaleProposals from '../../modules/maleProposals/collection.js';
import MaleProposalItem from './MaleProposalItem.jsx';
import Users from 'meteor/vulcan:users';
import { withRouter } from 'react-router'


const MaleProposalMatchList = ({results = [], currentUser, loading, loadMore, count, totalCount, router}) =>
  
  <div className="proposalPage">

    { currentUser && Users.isAdmin(currentUser) ?

        ( loading ?

          <Loading /> :
          (
            !Users.isAdmin(currentUser) ? <div>يرجى تسجيل الدخول بحساب أدمن.</div>
            : <div className="maleProposalMatches">

                {/* documents list */}

                {results.map(maleProposal => <MaleProposalItem key={maleProposal._id} maleProposal={maleProposal} currentUser={currentUser} />)}

                {/* load more */}

                {totalCount > results.length ?
                  <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>حمل المزيد ({count}/{totalCount})</a> :
                  <p>لا يوجد عناصر أخرى.</p>
                }

              </div>
          )
        ) :
        <p>يرجى تسجيل الدخول!</p>
    }

  </div>
;
const options = {
  collection: MaleProposals,
  fragmentName: 'MaleProposalsItemFragment',
  limit: 5
};

export default withRouter(withList(options)(withCurrentUser(MaleProposalMatchList)));