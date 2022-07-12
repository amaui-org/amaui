import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSharp'
      short_name='Home'

      {...props}
    >
      <path d="M6 19H9V13H15V19H18V10L12 5.5L6 10ZM4 21V9L12 3L20 9V21H13V15H11V21ZM12 12.25Z"/>
    </Icon>
  )
});

export default IconMaterialHomeSharp;
