import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousOutlinedFilled'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M5.5 18V6H7.5V18ZM18.5 18 9.5 12 18.5 6Z"/>
    </Icon>
  )
});

export default IconMaterialSkipPreviousOutlinedFilled;
