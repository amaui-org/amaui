import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestMultiRoomRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMultiRoomRoundedFilled'
      short_name='NestMultiRoom'

      {...props}
    >
      <path d="m4 9 8-6 8 6Zm0 12h9v-4H4Zm11 0h5v-4h-5ZM4 15h5v-3.975H4Zm7 0h9v-3.975h-9Z"/>
    </Icon>
  )
});

export default IconMaterialNestMultiRoomRoundedFilled;
