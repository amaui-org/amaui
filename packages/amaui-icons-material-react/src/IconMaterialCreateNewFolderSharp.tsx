import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderSharp'
      short_name='CreateNewFolder'

      {...props}
    >
      <path d="M14 16H16V14H18V12H16V10H14V12H12V14H14ZM2 20V4H10L12 6H22V20ZM4 18H20V8H11.175L9.175 6H4ZM4 18V6V8Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderSharp.displayName = 'AmauiIconMaterialCreateNewFolderSharp';

export default IconMaterialCreateNewFolderSharp;
