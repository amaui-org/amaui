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
      <path d="M2 22 22 2v20Zm15-2h3V6.825l-3 3Z"/>
    </Icon>
  );
});

IconMaterialNetworkCell.displayName = 'AmauiIconMaterialNetworkCell';

export default IconMaterialNetworkCell;
