/* 

List of maleProposals.
Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import { Components, withList, withCurrentUser, Loading } from 'meteor/vulcan:core';

import MaleProposals from '../../modules/maleProposals/collection.js';
import MaleProposalsItem from './MaleProposalsItem.jsx';
import MaleProposalsNewForm from './MaleProposalsNewForm.jsx';

const MaleProposalsList = ({results = [], currentUser, loading, loadMore, count, totalCount}) =>
  
  <div className="proposalPage">

    { currentUser ?

        ( loading ?

        <Loading /> :

        <div className="maleProposals">

          {/* new document form */}
          <div className="item-div">
          {MaleProposals.options.mutations.new.check(currentUser) ?
              <Components.ModalTrigger label="إضافة طلب زوجة">
                <MaleProposalsNewForm />
              </Components.ModalTrigger>
              : null
          }
          </div>
          {/* documents list */}

          {results.map(maleProposal => <MaleProposalsItem key={maleProposal._id} maleProposal={maleProposal} currentUser={currentUser} />)}

          {/* load more */}

          {totalCount > results.length ?
            <a href="#" onClick={e => {e.preventDefault(); loadMore();}}>حمل المزيد ({count}/{totalCount})</a> :
            <p>لا يوجد عناصر أخرى.</p>
          }

        </div>
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

export default withList(options)(withCurrentUser(MaleProposalsList));