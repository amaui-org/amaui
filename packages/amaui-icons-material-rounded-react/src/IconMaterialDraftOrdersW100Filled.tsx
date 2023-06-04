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
      <path d="m14.95 10.05-1-1-5.775 5.775q-.125.125-.175.25-.05.125-.05.275v.325q0 .15.112.263.113.112.263.112h.325q.15 0 .275-.05.125-.05.25-.175Zm.6-.6.5-.5q.175-.175.175-.4 0-.225-.175-.4l-.2-.2q-.175-.175-.4-.175-.225 0-.4.175l-.55.55ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialDraftOrdersW100Filled.displayName = 'AmauiIconMaterialDraftOrdersW100Filled';

export default IconMaterialDraftOrdersW100Filled;
