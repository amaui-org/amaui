import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBar'

      short_name='SpaceBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 13H6V9H4v6h16V9h-2z"/>
    </Icon>
  );
});

IconMaterialSpaceBar.displayName = 'AmauiIconMaterialSpaceBar';

export default IconMaterialSpaceBar;
