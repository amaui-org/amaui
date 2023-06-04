import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderW100Filled'

      short_name='CreateNewFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 15.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2ZM3.3 18.7V6.3H11l1 1h8.7v11.4Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderW100Filled.displayName = 'AmauiIconMaterialCreateNewFolderW100Filled';

export default IconMaterialCreateNewFolderW100Filled;
