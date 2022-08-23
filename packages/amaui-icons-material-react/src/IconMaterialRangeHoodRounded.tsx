import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRangeHoodRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodRounded'
      short_name='RangeHood'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4.2q0-.375.15-.738.15-.362.45-.662L7 8V3h10v5l4.425 4.425q.275.275.425.637.15.363.15.763V18q0 .825-.587 1.413Q20.825 20 20 20Zm1.8-8h12.4L15 8.8V5H9v3.8ZM4 18h16v-4H4v4Zm6-1.3v-1.5h4v1.5Z"/>
    </Icon>
  );
});

IconMaterialRangeHoodRounded.displayName = 'AmauiIconMaterialRangeHoodRounded';

export default IconMaterialRangeHoodRounded;
