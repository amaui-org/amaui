import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftOrdersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftOrdersW100'

      short_name='DraftOrders'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.95 10.05-1-1-5.775 5.775q-.125.125-.175.25-.05.125-.05.275v.325q0 .15.112.263.113.112.263.112h.325q.15 0 .275-.05.125-.05.25-.175Zm.6-.6.5-.5q.175-.175.175-.4 0-.225-.175-.4l-.2-.2q-.175-.175-.4-.175-.225 0-.4.175l-.55.55ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialDraftOrdersW100.displayName = 'AmauiIconMaterialDraftOrdersW100';

export default IconMaterialDraftOrdersW100;
