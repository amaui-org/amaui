import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH5Filled'

      short_name='FormatH5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7h2v4h4V7h2v10H9v-4H5v4Zm10 0v-2h6v-2h-6V7h8v2h-6v2h4q.825 0 1.413.587Q21 12.175 21 13v2q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialFormatH5Filled.displayName = 'AmauiIconMaterialFormatH5Filled';

export default IconMaterialFormatH5Filled;
