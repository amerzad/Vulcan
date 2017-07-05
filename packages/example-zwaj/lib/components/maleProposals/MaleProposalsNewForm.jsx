/*

A component to configure the "new maleProposal" form.

*/

import React from 'react';
import { Components, registerComponent, withCurrentUser, getFragment } from 'meteor/vulcan:core';

import MaleProposals from '../../modules/maleProposals/collection.js';
import {IntlProvider} from "react-intl";


class MaleProposalsNewForm extends React.Component {
  // getChildContext() {
  //   const intlProvider = new IntlProvider();
  //   const {intl} = intlProvider.getChildContext();
  //   return {
  //     intl: intl
  //   };
  // }
  render() {
    return (
      <div>
        {MaleProposals.options.mutations.new.check(this.props.currentUser) ?
            <div style={{marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #ccc'}}>
              <h4>إضافة طلب زوجة</h4>
              <Components.SmartForm
                  collection={MaleProposals}
                  mutationFragment={getFragment('MaleProposalsItemFragment')}
              />
            </div> :
            null
        }
      </div>
    )
  }
}

export default withCurrentUser(MaleProposalsNewForm);