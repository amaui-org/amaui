import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFreeCancellationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationW100Filled'

      short_name='FreeCancellation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.05 21.25-2.625-2.625.475-.475 2.125 2.125 4.25-4.25.475.5ZM7.4 16.075l-.475-.475 1.6-1.6-1.6-1.6.475-.475 1.6 1.6 1.6-1.6.475.475-1.6 1.6 1.6 1.6-.475.475-1.6-1.6ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v7.025l-.7.725V10.8H5V20h5.525l.75.7Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationW100Filled.displayName = 'AmauiIconMaterialFreeCancellationW100Filled';

export default IconMaterialFreeCancellationW100Filled;
