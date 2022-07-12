import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectOutlinedFilled'
      short_name='Eject'

      {...props}
    >
      <path d="M5.35 15 12 5 18.65 15ZM5 19V17H19V19Z"/>
    </Icon>
  )
});

export default IconMaterialEjectOutlinedFilled;
