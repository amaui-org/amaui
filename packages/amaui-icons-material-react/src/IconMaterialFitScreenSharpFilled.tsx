import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenSharpFilled'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6H17V4H22V9ZM2 9V4H7V6H4V9ZM17 20V18H20V15H22V20ZM2 20V15H4V18H7V20ZM6 16V8H18V16Z"/>
    </Icon>
  )
});

export default IconMaterialFitScreenSharpFilled;
