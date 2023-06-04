import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellW100Filled'

      short_name='Sell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 21 3.3 11.45V3.3h8.15L21 12.85ZM6.5 7.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialSellW100Filled.displayName = 'AmauiIconMaterialSellW100Filled';

export default IconMaterialSellW100Filled;
