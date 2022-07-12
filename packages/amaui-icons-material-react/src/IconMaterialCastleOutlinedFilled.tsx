import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastleOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleOutlinedFilled'
      short_name='Castle'

      {...props}
    >
      <path d="M1 21V9H3V11H5V3H7V5H9V3H11V5H13V3H15V5H17V3H19V11H21V9H23V21H14V18Q14 17.175 13.413 16.587Q12.825 16 12 16Q11.175 16 10.588 16.587Q10 17.175 10 18V21ZM9 12H11V9H9ZM13 12H15V9H13Z"/>
    </Icon>
  )
});

export default IconMaterialCastleOutlinedFilled;
