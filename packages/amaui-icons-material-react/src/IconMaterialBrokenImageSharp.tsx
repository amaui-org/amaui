import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageSharp'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M3 21V3H21V21ZM6 12.575 10 8.575 14 12.575 18 8.575 19 9.575V5H5V11.575ZM5 19H19V12.4L18 11.4L14 15.4L10 11.4L6 15.4L5 14.4ZM5 19V12.4V14.4V11.575V9.575V5V11.575V14.4Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageSharp;
