import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOpenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOpenSharpFilled'
      short_name='FolderOpen'

      {...props}
    >
      <path d="M2 20V4H10L12 6H22V8H4V18L6.4 10H23.5L20.5 20Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOpenSharpFilled;
