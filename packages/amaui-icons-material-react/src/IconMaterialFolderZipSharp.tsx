import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderZipSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipSharp'
      short_name='FolderZip'

      {...props}
    >
      <path d="M2 20V4H10L12 6H22V20ZM16 18H20V8H16V10H18V12H16V14H18V16H16ZM4 18H14V16H16V14H14V12H16V10H14V8H11.175L9.175 6H4ZM4 8V6V18Z"/>
    </Icon>
  );
});

IconMaterialFolderZipSharp.displayName = 'AmauiIconMaterialFolderZipSharp';

export default IconMaterialFolderZipSharp;
