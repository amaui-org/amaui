import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffSharpFilled'
      short_name='FolderOff'

      {...props}
    >
      <path d="M22 19.175 6.825 4H10L12 6H22ZM20.475 23.3 17.175 20H2V4.825L0.7 3.5L2.1 2.1L21.9 21.9Z"/>
    </Icon>
  );
});

IconMaterialFolderOffSharpFilled.displayName = 'AmauiIconMaterialFolderOffSharpFilled';

export default IconMaterialFolderOffSharpFilled;
