import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderFilled'

      short_name='Folder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 4h8l2 2h10v14H2Z"/>
    </Icon>
  );
});

IconMaterialFolderFilled.displayName = 'AmauiIconMaterialFolderFilled';

export default IconMaterialFolderFilled;
