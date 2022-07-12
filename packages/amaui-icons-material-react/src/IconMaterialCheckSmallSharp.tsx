import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallSharp'
      short_name='CheckSmall'

      {...props}
    >
      <path d="m10 16.4-4-4L7.4 11l2.6 2.6L16.6 7 18 8.4Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallSharp;
