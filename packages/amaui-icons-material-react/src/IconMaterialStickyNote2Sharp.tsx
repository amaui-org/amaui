import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2Sharp'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M14 14H19V5H5V19H14ZM3 21V3H21V15L15 21ZM7 14V12H12V14ZM7 10V8H17V10ZM5 19V14V5V19Z"/>
    </Icon>
  )
});

export default IconMaterialStickyNote2Sharp;
