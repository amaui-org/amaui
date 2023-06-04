import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffW100Filled'

      short_name='FolderOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 17.875 9.125 6.3H11l1 1h8.7Zm.2 4.025-3.2-3.2H3.3V6.3h3v1L3.1 4.1l.5-.5 17.8 17.8Z"/>
    </Icon>
  );
});

IconMaterialFolderOffW100Filled.displayName = 'AmauiIconMaterialFolderOffW100Filled';

export default IconMaterialFolderOffW100Filled;
