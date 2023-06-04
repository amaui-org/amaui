import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardW100Filled'

      short_name='FastForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.75 15.425q-.375.275-.775.05-.4-.225-.4-.675V9.2q0-.45.4-.675.4-.225.775.05l4.2 2.8q.325.225.325.625t-.325.625Zm8.55 0q-.375.275-.775.05-.4-.225-.4-.675V9.2q0-.45.4-.675.4-.225.775.05l4.2 2.8q.325.225.325.625t-.325.625Z"/>
    </Icon>
  );
});

IconMaterialFastForwardW100Filled.displayName = 'AmauiIconMaterialFastForwardW100Filled';

export default IconMaterialFastForwardW100Filled;
