import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinimize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Minimize'

      short_name='Minimize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h12v2H6v-2z"/>
    </Icon>
  );
});

IconMaterialMinimize.displayName = 'AmauiIconMaterialMinimize';

export default IconMaterialMinimize;
