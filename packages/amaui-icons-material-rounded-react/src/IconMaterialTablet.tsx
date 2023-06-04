import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tablet'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20q-.825 0-1.412-.587Q1 18.825 1 18V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v12q0 .825-.587 1.413Q21.825 20 21 20Zm3-2h12V6H6ZM4 6H3v12h1Zm16 0v12h1V6Zm1 0h-1 1ZM3 6h1-1Z"/>
    </Icon>
  );
});

IconMaterialTablet.displayName = 'AmauiIconMaterialTablet';

export default IconMaterialTablet;
