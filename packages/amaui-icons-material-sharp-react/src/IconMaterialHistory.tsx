import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='History'

      short_name='History'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.8 16.2 11 12.4V7h2v4.6l3.2 3.2ZM12 21q-3.45 0-6.012-2.288Q3.425 16.425 3.05 13H5.1q.35 2.6 2.312 4.3Q9.375 19 12 19q2.925 0 4.962-2.038Q19 14.925 19 12t-2.038-4.963Q14.925 5 12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475Q9.95 3 12 3q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 10.125 21 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialHistory.displayName = 'AmauiIconMaterialHistory';

export default IconMaterialHistory;
