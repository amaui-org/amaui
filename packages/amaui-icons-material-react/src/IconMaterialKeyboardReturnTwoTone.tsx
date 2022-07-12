import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnTwoTone'
      short_name='KeyboardReturn'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardReturnTwoTone;
