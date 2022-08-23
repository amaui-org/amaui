import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarTwoTone'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13H6V9H4v6h16V9h-2z"/>
    </Icon>
  );
});

IconMaterialSpaceBarTwoTone.displayName = 'AmauiIconMaterialSpaceBarTwoTone';

export default IconMaterialSpaceBarTwoTone;
