import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnSharpFilled'
      short_name='KeyboardReturn'

      {...props}
    >
      <path d="M9 18 3 12 9 6 10.4 7.4 6.8 11H19V7H21V13H6.8L10.4 16.6Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardReturnSharpFilled;
