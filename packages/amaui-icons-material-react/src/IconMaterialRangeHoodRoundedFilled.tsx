import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRangeHoodRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodRoundedFilled'
      short_name='RangeHood'

      {...props}
    >
      <path d="M3.05 12 7 8V3h10v5l4 4ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4h20v4q0 .825-.587 1.413Q20.825 20 20 20Zm6-3.3h4v-1.5h-4Z"/>
    </Icon>
  )
});

export default IconMaterialRangeHoodRoundedFilled;
