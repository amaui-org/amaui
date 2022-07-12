import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltSharpFilled'
      short_name='FilterAlt'

      {...props}
    >
      <path d="M14 13V20H10V13L2.95 4H21.05Z"/>
    </Icon>
  )
});

export default IconMaterialFilterAltSharpFilled;
