import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharpW100Filled'
      short_name='Folder'

      {...props}
    >
      <path d="M3.3 6.3H11L12 7.3H20.7V18.7H3.3Z"/>
    </Icon>
  )
});

export default IconMaterialFolderSharpW100Filled;
