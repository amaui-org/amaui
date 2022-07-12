import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltSharp'
      short_name='FilterAlt'

      {...props}
    >
      <path d="M14 13V20H10V13L2.95 4H21.05ZM12 12.3 16.95 6H7.05ZM12 12.3Z"/>
    </Icon>
  )
});

export default IconMaterialFilterAltSharp;
