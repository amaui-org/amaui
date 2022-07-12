import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagSharp'
      short_name='Flag'

      {...props}
    >
      <path d="M5 21V4H14L14.4 6H20V16H13L12.6 14H7V21ZM12.5 10ZM14.65 14H18V8H12.75L12.35 6H7V12H14.25Z"/>
    </Icon>
  )
});

export default IconMaterialFlagSharp;
