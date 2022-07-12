import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderDeleteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteSharpFilled'
      short_name='FolderDelete'

      {...props}
    >
      <path d="M13 17H18V11.5H19V10H16.5V9H14.5V10H12V11.5H13ZM14.5 15.5V11.5H16.5V15.5ZM2 20V4H10L12 6H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialFolderDeleteSharpFilled;
