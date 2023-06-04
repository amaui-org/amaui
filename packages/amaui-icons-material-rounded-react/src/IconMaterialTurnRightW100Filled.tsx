import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRightW100Filled'

      short_name='TurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.975 19.35q-.15 0-.25-.1t-.1-.25v-7.85q0-.625.437-1.063.438-.437 1.063-.437h9.6l-2-2q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-2.3 2.3q-.125.125-.25.125t-.25-.125q-.1-.125-.112-.25-.013-.125.112-.25l1.975-1.975h-9.6q-.35 0-.575.225-.225.225-.225.575V19q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTurnRightW100Filled.displayName = 'AmauiIconMaterialTurnRightW100Filled';

export default IconMaterialTurnRightW100Filled;
