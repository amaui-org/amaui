import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickreplyOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyOutlinedFilled'
      short_name='Quickreply'

      {...props}
    >
      <path d="M19 23V18H17V12H22L20.3 16H22.5ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V10H15V18H6Z"/>
    </Icon>
  )
});

export default IconMaterialQuickreplyOutlinedFilled;
