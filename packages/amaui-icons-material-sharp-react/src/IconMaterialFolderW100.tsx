import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderW100'

      short_name='Folder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 6.3H11l1 1h8.7v11.4H3.3ZM4 7v11h16V8h-8.275l-1-1Zm0 11V7v11Z"/>
    </Icon>
  );
});

IconMaterialFolderW100.displayName = 'AmauiIconMaterialFolderW100';

export default IconMaterialFolderW100;
