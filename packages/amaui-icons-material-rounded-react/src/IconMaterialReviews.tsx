import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReviews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reviews'

      short_name='Reviews'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.55 13.975q.125.3.45.3t.45-.3l1.1-2.425 2.425-1.1q.3-.125.3-.45t-.3-.45l-2.425-1.1-1.1-2.425q-.125-.3-.45-.3t-.45.3l-1.1 2.425-2.425 1.1q-.3.125-.3.45t.3.45l2.425 1.1ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/>
    </Icon>
  );
});

IconMaterialReviews.displayName = 'AmauiIconMaterialReviews';

export default IconMaterialReviews;
