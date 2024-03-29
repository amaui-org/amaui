import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventUpcoming = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcoming'

      short_name='EventUpcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 22v-2h4V10H5v4H3V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm-7 2-1.4-1.4L9.175 20H1v-2h8.175L6.6 15.4 8 14l5 5ZM5 8h14V6H5Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialEventUpcoming.displayName = 'AmauiIconMaterialEventUpcoming';

export default IconMaterialEventUpcoming;
