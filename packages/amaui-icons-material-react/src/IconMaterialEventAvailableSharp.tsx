import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventAvailableSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableSharp'
      short_name='EventAvailable'

      {...props}
    >
      <path d="M10.95 18.35 7.4 14.8 8.85 13.35 10.95 15.45 15.15 11.25 16.6 12.7ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5ZM5 8H19V6H5ZM5 8V6V8Z"/>
    </Icon>
  )
});

export default IconMaterialEventAvailableSharp;
