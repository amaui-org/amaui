import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenSharpFilled'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M4.4 17 3 15.6 8.6 10H5V8H12V15H10V11.4ZM6 23V17H8V18H18V6H8V7H6V1H20V23Z"/>
    </Icon>
  );
});

export default IconMaterialAddToHomeScreenSharpFilled;
