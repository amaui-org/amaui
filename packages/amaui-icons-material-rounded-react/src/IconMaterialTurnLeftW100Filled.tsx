import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnLeftW100Filled'

      short_name='TurnLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 19.35q-.15 0-.25-.1t-.1-.25v-7.85q0-.35-.225-.575-.225-.225-.575-.225H5.275l2 2q.1.1.1.237 0 .138-.1.263-.125.125-.25.125t-.25-.125L4.45 10.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L6.775 7.15q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2 2h9.575q.625 0 1.063.437.437.438.437 1.063V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTurnLeftW100Filled.displayName = 'AmauiIconMaterialTurnLeftW100Filled';

export default IconMaterialTurnLeftW100Filled;
