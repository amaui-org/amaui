import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipFilled'

      short_name='Sip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h2V9h-2Zm3 0h1.5v-2H19V9h-5Zm1.5-3.5v-1h2v1ZM5 15h5v-3.75H6.5v-.75H10V9H5v3.75h3.5v.75H5Zm-1 5q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSipFilled.displayName = 'AmauiIconMaterialSipFilled';

export default IconMaterialSipFilled;
