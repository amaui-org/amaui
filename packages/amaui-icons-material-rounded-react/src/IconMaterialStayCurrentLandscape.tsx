import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayCurrentLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscape'

      short_name='StayCurrentLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19q-.825 0-1.412-.587Q1 17.825 1 17V7q0-.825.588-1.412Q2.175 5 3 5h18q.825 0 1.413.588Q23 6.175 23 7v10q0 .825-.587 1.413Q21.825 19 21 19Zm3-2h12V7H6Zm-2 0V7H3v10Zm16 0h1V7h-1Zm1-10h-1 1ZM3 7h1-1Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscape.displayName = 'AmauiIconMaterialStayCurrentLandscape';

export default IconMaterialStayCurrentLandscape;
