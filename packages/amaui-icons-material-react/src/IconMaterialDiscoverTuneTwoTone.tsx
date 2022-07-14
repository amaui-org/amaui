import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiscoverTuneTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscoverTuneTwoTone'
      short_name='DiscoverTune'

      {...props}
    >
      <path d="M13 9V7H16V3H18V7H21V9ZM16 21V11H18V21ZM6 21V17H3V15H11V17H8V21ZM6 13V3H8V13Z"/>
    </Icon>
  );
});

export default IconMaterialDiscoverTuneTwoTone;
