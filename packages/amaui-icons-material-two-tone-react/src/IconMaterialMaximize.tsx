import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMaximize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Maximize'

      short_name='Maximize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3V3z"/>
    </Icon>
  );
});

IconMaterialMaximize.displayName = 'AmauiIconMaterialMaximize';

export default IconMaterialMaximize;
