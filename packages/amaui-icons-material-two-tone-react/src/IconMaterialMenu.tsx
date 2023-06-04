import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenu = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Menu'

      short_name='Menu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </Icon>
  );
});

IconMaterialMenu.displayName = 'AmauiIconMaterialMenu';

export default IconMaterialMenu;
