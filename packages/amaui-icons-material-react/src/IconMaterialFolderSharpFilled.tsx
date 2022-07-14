import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharpFilled'
      short_name='Folder'

      {...props}
    >
      <path d="M2 4H10L12 6H22V20H2Z"/>
    </Icon>
  );
});

export default IconMaterialFolderSharpFilled;
