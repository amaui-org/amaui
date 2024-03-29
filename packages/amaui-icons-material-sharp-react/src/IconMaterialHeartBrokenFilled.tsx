import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartBrokenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenFilled'

      short_name='HeartBroken'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 21.925q-3.35-3.375-5.337-5.45Q4.7 14.4 3.663 13.025q-1.038-1.375-1.351-2.35Q2 9.7 2 8.5q0-2.3 1.6-3.9T7.5 3q1.125 0 2.175.412 1.05.413 1.875 1.188L10 10h3l-.85 8.375L15 9h-3l1.775-5.3q.625-.35 1.313-.525Q15.775 3 16.5 3q2.3 0 3.9 1.6T22 8.5q0 1.2-.325 2.2-.325 1-1.375 2.387-1.05 1.388-3.025 3.451-1.975 2.062-5.25 5.387Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenFilled.displayName = 'AmauiIconMaterialHeartBrokenFilled';

export default IconMaterialHeartBrokenFilled;
