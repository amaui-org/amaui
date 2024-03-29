import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvgTimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeFilled'

      short_name='AvgTime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3V1h6v2Zm.925 11.4-1.3-2.4H3.05q.375-3.375 2.925-5.688Q8.525 4 12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4q.8 1.05 1.275 2.212.475 1.163.625 2.438H16.6L14 7.25ZM12 22q-3.475 0-6.025-2.312Q3.425 17.375 3.05 14H7.4l2.6 4.75 4.075-7.15 1.3 2.4h5.575q-.375 3.375-2.912 5.688Q15.5 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeFilled.displayName = 'AmauiIconMaterialAvgTimeFilled';

export default IconMaterialAvgTimeFilled;
