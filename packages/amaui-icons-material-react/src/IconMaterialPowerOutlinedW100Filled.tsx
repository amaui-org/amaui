import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOutlinedW100Filled'
      short_name='Power'

      {...props}
    >
      <path d="M10.5 19.7V17.15L7.3 13.95V9.8Q7.3 9.15 7.725 8.725Q8.15 8.3 8.8 8.3H9.75V4.3H10.45V8.3H13.55V4.3H14.25V8.3H15.2Q15.85 8.3 16.275 8.725Q16.7 9.15 16.7 9.8V13.95L13.5 17.15V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOutlinedW100Filled;
