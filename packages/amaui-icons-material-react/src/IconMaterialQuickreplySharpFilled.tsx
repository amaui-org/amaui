import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickreplySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplySharpFilled'
      short_name='Quickreply'

      {...props}
    >
      <path d="M19 23V18H17V12H22L20.3 16H22.5ZM2 22V2H22V10H15V18H6Z"/>
    </Icon>
  );
});

export default IconMaterialQuickreplySharpFilled;
