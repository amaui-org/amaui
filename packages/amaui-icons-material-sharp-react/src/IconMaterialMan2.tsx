import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMan2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2'

      short_name='Man2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 22v-7H8V7h8v8h-2.5v7ZM12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialMan2.displayName = 'AmauiIconMaterialMan2';

export default IconMaterialMan2;
