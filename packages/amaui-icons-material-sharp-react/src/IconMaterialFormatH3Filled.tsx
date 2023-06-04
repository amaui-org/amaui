import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH3Filled'

      short_name='FormatH3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7h2v4h4V7h2v10H9v-4H5v4Zm10 0v-2h6v-2h-4v-2h4V9h-6V7h6q.825 0 1.413.587Q21 8.175 21 9v6q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialFormatH3Filled.displayName = 'AmauiIconMaterialFormatH3Filled';

export default IconMaterialFormatH3Filled;
