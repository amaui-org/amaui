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
      <path d="M4.575 16.2V7.8l6.3 4.2Zm8.55 0V7.8l6.3 4.2Z"/>
    </Icon>
  );
});

IconMaterialFastForwardW100Filled.displayName = 'AmauiIconMaterialFastForwardW100Filled';

export default IconMaterialFastForwardW100Filled;
