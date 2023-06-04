import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseW100Filled'

      short_name='Close'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.4 18.1-.5-.5 5.6-5.6-5.6-5.6.5-.5 5.6 5.6 5.6-5.6.5.5-5.6 5.6 5.6 5.6-.5.5-5.6-5.6Z"/>
    </Icon>
  );
});

IconMaterialCloseW100Filled.displayName = 'AmauiIconMaterialCloseW100Filled';

export default IconMaterialCloseW100Filled;
