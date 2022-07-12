import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenSharpFilled'
      short_name='Straighten'

      {...props}
    >
      <path d="M2 18V6H7V12H9V6H11V12H13V6H15V12H17V6H22V18Z"/>
    </Icon>
  )
});

export default IconMaterialStraightenSharpFilled;
