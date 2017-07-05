import { addRoute } from 'meteor/vulcan:core';

import Home from "../components/home/Home";
import MaleProposalsList from "../components/maleProposals/MaleProposalsList";
import FemaleProposalsList from "../components/femaleProposals/FemaleProposalsList";

addRoute({ name: 'home', path: '/', component: Home });
addRoute({ name: 'maleProposals', path: '/men', component: MaleProposalsList });
addRoute({ name: 'femaleProposals', path: '/women', component: FemaleProposalsList });
// addRoute({ name: 'maleProposal', path: '/men/:id', component: MaleProposalMachList });
// addRoute({ name: 'femaleProposal', path: '/women/:id', component: FemaleProposalMatchList });
