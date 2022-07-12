import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardCustomizeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardCustomizeSharpFilled'
      short_name='DashboardCustomize'

      {...props}
    >
      <path d="M3 11V3H11V11ZM13 11V3H21V11ZM3 21V13H11V21ZM16 21V18H13V16H16V13H18V16H21V18H18V21Z"/>
    </Icon>
  )
});

export default IconMaterialDashboardCustomizeSharpFilled;
