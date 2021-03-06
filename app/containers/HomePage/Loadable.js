/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from 'utils/loadable';

export default loadable(() => import('./index'), {
});
