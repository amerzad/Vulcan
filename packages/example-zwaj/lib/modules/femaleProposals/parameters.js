import { addCallback } from 'meteor/vulcan:core';

function sortByYear (parameters, terms) {
  return {
    selector: parameters.selector, 
    options: {...parameters.options, sort: {createdAt: -1}}
  };
}

addCallback('femaleProposals.parameters', sortByYear);