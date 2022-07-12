import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharpW700Filled'
      short_name='Folder'

      {...props}
    >
      <path d="M1.15 2.775H9.625L12 5.15H22.85V20.85H1.15Z"/>
    </Icon>
  )
});

export default IconMaterialFolderSharpW700Filled;
