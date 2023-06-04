import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditCalendar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendar'

      short_name='EditCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7v2ZM5 8h14V6H5Zm17.125 9L20 14.875l1.425-1.425 2.125 2.125ZM14 23v-2.125l5.3-5.3 2.125 2.125-5.3 5.3ZM5 8V6v2Z"/>
    </Icon>
  );
});

IconMaterialEditCalendar.displayName = 'AmauiIconMaterialEditCalendar';

export default IconMaterialEditCalendar;
