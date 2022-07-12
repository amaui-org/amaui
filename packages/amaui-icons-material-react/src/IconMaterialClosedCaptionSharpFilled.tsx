import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClosedCaptionSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionSharpFilled'
      short_name='ClosedCaption'

      {...props}
    >
      <path d="M6 15H11V13H9.5V13.5H7.5V10.5H9.5V11H11V9H6ZM13 15H18V13H16.5V13.5H14.5V10.5H16.5V11H18V9H13ZM3 20V4H21V20Z"/>
    </Icon>
  )
});

export default IconMaterialClosedCaptionSharpFilled;
