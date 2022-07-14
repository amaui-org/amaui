import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventAvailableSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventAvailableSharpFilled'
      short_name='EventAvailable'

      {...props}
    >
      <path d="M10.95 18.35 7.4 14.8 8.85 13.35 10.95 15.45 15.15 11.25 16.6 12.7ZM3 22V4H6V2H8V4H16V2H18V4H21V22ZM5 20H19V10H5Z"/>
    </Icon>
  );
});

export default IconMaterialEventAvailableSharpFilled;
