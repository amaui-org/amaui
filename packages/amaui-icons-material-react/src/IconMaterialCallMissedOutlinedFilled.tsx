import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutlinedFilled'
      short_name='CallMissed'

      {...props}
    >
      <path d="M12 17.425 5 10.425V15H3V7H11V9H6.4L12 14.6L19.6 7L21 8.425Z"/>
    </Icon>
  )
});

export default IconMaterialCallMissedOutlinedFilled;
