import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSplitOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitOutlinedFilled'
      short_name='CallSplit'

      {...props}
    >
      <path d="M14.85 10.6 13.4 9.15 16.6 6H14V4H20V10H18V7.4ZM11 20V12.4L6 7.4V10H4V4H10V6H7.4L13 11.6V20Z"/>
    </Icon>
  )
});

export default IconMaterialCallSplitOutlinedFilled;
