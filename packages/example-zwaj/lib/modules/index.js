// The MaleProposals collection
import { replaceComponent } from 'meteor/vulcan:core';
import './maleProposals/collection.js';
import './femaleProposals/collection.js';

import Layout from '../components/common/Layout.jsx';
replaceComponent('Layout', Layout);

// Routes
import './routes.js';