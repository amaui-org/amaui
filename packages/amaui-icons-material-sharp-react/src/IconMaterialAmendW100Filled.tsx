import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmendW100Filled'

      short_name='Amend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14.7h10V14H7ZM7 12h3.2v-.7h-2q.725-.925 1.675-1.562Q10.825 9.1 12 9.1q1.4 0 2.512.8 1.113.8 1.613 2.1h.75q-.525-1.6-1.862-2.6-1.338-1-3.013-1-1.3 0-2.4.675-1.1.675-1.9 1.725v-2H7Zm5 8.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialAmendW100Filled.displayName = 'AmauiIconMaterialAmendW100Filled';

export default IconMaterialAmendW100Filled;
