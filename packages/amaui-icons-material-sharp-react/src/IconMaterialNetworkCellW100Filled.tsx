import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkCellW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCellW100Filled'

      short_name='NetworkCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.225 20.7 15.55-15.55V20.7Zm11.85-.7h3V6.85l-3 3Z"/>
    </Icon>
  );
});

IconMaterialNetworkCellW100Filled.displayName = 'AmauiIconMaterialNetworkCellW100Filled';

export default IconMaterialNetworkCellW100Filled;
