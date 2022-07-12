import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthOutlinedW700'
      short_name='South'

      {...props}
    >
      <path d="M12 22.575 4.15 14.7 6.35 12.475 10.425 16.575V1.2H13.575V16.575L17.65 12.5L19.875 14.7Z"/>
    </Icon>
  )
});

export default IconMaterialSouthOutlinedW700;
