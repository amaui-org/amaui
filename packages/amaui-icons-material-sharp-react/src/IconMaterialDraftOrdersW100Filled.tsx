import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftOrdersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftOrdersW100Filled'

      short_name='DraftOrders'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 16.05h1l6-6-1-1-6 6Zm7.6-6.6.9-.9-1-1-.95.95ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialDraftOrdersW100Filled.displayName = 'AmauiIconMaterialDraftOrdersW100Filled';

export default IconMaterialDraftOrdersW100Filled;
