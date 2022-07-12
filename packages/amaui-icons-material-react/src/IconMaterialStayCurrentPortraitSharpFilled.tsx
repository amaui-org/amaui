import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentPortraitSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentPortraitSharpFilled'
      short_name='StayCurrentPortrait'

      {...props}
    >
      <path d="M5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  )
});

export default IconMaterialStayCurrentPortraitSharpFilled;
