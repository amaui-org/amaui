import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRangeHoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodFilled'

      short_name='RangeHood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.05 12 7 8V3h10v5l4 4ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4h20v4q0 .825-.587 1.413Q20.825 20 20 20Zm6-3.3h4v-1.5h-4Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodFilled.displayName = 'AmauiIconMaterialRangeHoodFilled';

export default IconMaterialRangeHoodFilled;
