import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningW100Filled'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.575 18.7q-.6 0-1.025-.4-.425-.4-.475-.975L6.6 11.1h10.85l-.475 6.225q-.05.575-.475.975t-1.025.4Zm-2.3-8.3-3.15-2.975q-.1-.1-.112-.225Q3 7.075 3.1 6.95q.1-.125.238-.15.137-.025.262.1l2.85 2.7-.15-2.05 2.8-2.8q.2-.2.488-.325.287-.125.587-.125h3.65q.3 0 .588.125.287.125.487.325l2.8 2.8-.15 2.05 2.85-2.7q.125-.1.263-.088.137.013.237.138.1.125.1.262 0 .138-.125.213l-3.15 2.975Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningW100Filled.displayName = 'AmauiIconMaterialTakeoutDiningW100Filled';

export default IconMaterialTakeoutDiningW100Filled;
