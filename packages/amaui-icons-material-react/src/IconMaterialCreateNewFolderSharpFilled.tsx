import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderSharpFilled'
      short_name='CreateNewFolder'

      {...props}
    >
      <path d="M14 16H16V14H18V12H16V10H14V12H12V14H14ZM2 20V4H10L12 6H22V20Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderSharpFilled.displayName = 'AmauiIconMaterialCreateNewFolderSharpFilled';

export default IconMaterialCreateNewFolderSharpFilled;
