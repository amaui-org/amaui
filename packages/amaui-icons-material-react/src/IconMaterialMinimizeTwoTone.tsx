import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeTwoTone'
      short_name='Minimize'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h12v2H6v-2z"/>
    </Icon>
  );
});

IconMaterialMinimizeTwoTone.displayName = 'AmauiIconMaterialMinimizeTwoTone';

export default IconMaterialMinimizeTwoTone;
