import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMotionSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMotionSharpFilled'
      short_name='AutoAwesomeMotion'

      {...props}
    >
      <path d="M2 14V2H14V4H4V14ZM6 18V6H18V8H8V18ZM22 22H10V10H22Z"/>
    </Icon>
  )
});

export default IconMaterialAutoAwesomeMotionSharpFilled;
