import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitFilled'

      short_name='StayCurrentPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18h10V6H7Zm0 5q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentPortraitFilled.displayName = 'AmauiIconMaterialStayCurrentPortraitFilled';

export default IconMaterialStayCurrentPortraitFilled;
