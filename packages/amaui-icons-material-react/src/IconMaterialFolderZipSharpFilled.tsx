import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderZipSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderZipSharpFilled'
      short_name='FolderZip'

      {...props}
    >
      <path d="M2 20V4H10L12 6H22V20ZM14 18H16V16H18V14H16V12H18V10H16V8H14V10H16V12H14V14H16V16H14Z"/>
    </Icon>
  )
});

export default IconMaterialFolderZipSharpFilled;
