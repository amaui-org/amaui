import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebFilled'

      short_name='Web'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h10.5v-3.5H4V18Zm12.5 0H20V9h-3.5ZM4 12.5h10.5V9H4Z"/>
    </Icon>
  );
});

IconMaterialWebFilled.displayName = 'AmauiIconMaterialWebFilled';

export default IconMaterialWebFilled;
