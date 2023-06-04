import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH6Filled'

      short_name='FormatH6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7h2v4h4V7h2v10H9v-4H5v4Zm12 0q-.825 0-1.412-.587Q13 15.825 13 15V9q0-.825.588-1.413Q14.175 7 15 7h6v2h-6v2h4q.825 0 1.413.587Q21 12.175 21 13v2q0 .825-.587 1.413Q19.825 17 19 17Zm0-4v2h4v-2Z"/>
    </Icon>
  );
});

IconMaterialFormatH6Filled.displayName = 'AmauiIconMaterialFormatH6Filled';

export default IconMaterialFormatH6Filled;
