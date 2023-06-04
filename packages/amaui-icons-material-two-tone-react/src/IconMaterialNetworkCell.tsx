import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkCell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCell'

      short_name='NetworkCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"/></g>
    </Icon>
  );
});

IconMaterialNetworkCell.displayName = 'AmauiIconMaterialNetworkCell';

export default IconMaterialNetworkCell;
