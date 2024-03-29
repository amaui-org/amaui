import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalActivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityFilled'

      short_name='LocalActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-6q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V4h20v6q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v6Zm7.2-4 2.8-2.1 2.75 2.1-1.05-3.4 2.8-2.2h-3.4L12 7l-1.1 3.4H7.5l2.75 2.2Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityFilled.displayName = 'AmauiIconMaterialLocalActivityFilled';

export default IconMaterialLocalActivityFilled;
