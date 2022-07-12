import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatterySaverOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverOutlinedW100'
      short_name='BatterySaver'

      {...props}
    >
      <path d="M8.35 21.35Q8.05 21.35 7.85 21.15Q7.65 20.95 7.65 20.65V5.35Q7.65 5.05 7.85 4.85Q8.05 4.65 8.35 4.65H10.4V3.15H13.6V4.65H15.65Q15.95 4.65 16.15 4.85Q16.35 5.05 16.35 5.35V20.65Q16.35 20.95 16.15 21.15Q15.95 21.35 15.65 21.35ZM11.65 15.35H12.35V13.35H14.35V12.65H12.35V10.65H11.65V12.65H9.65V13.35H11.65Z"/>
    </Icon>
  )
});

export default IconMaterialBatterySaverOutlinedW100;
