import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkCellTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellTwoTone'
      short_name='NetworkCell'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M2,22h20V2L2,22z M20,20h-3V9.83l3-3V20z"/></g>
    </Icon>
  );
});

IconMaterialNetworkCellTwoTone.displayName = 'AmauiIconMaterialNetworkCellTwoTone';

export default IconMaterialNetworkCellTwoTone;
