import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Domain'

      short_name='Domain'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h6q.825 0 1.413.587Q12 4.175 12 5v2h8q.825 0 1.413.587Q22 8.175 22 9v10q0 .825-.587 1.413Q20.825 21 20 21Zm0-2h2v-2H4Zm0-4h2v-2H4Zm0-4h2V9H4Zm0-4h2V5H4Zm4 12h2v-2H8Zm0-4h2v-2H8Zm0-4h2V9H8Zm0-4h2V5H8Zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2Zm4-6v-2h2v2Zm0 4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialDomain.displayName = 'AmauiIconMaterialDomain';

export default IconMaterialDomain;
