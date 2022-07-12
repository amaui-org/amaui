import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestOutlinedW100Filled'
      short_name='West'

      {...props}
    >
      <path d="M9.2 18.175 3.025 12 9.2 5.825 9.7 6.325 4.375 11.65H20.475V12.35H4.375L9.7 17.675Z"/>
    </Icon>
  )
});

export default IconMaterialWestOutlinedW100Filled;
