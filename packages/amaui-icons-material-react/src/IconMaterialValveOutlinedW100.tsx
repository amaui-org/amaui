import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialValveOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveOutlinedW100'
      short_name='Valve'

      {...props}
    >
      <path d="M11.65 7.5v-3h-4v-.7h8.7v.7h-4v3Zm-7 12.7v-6.7h.7v1h4.3v-4.3h-1v-.7h6.7v.7h-1v4.3h4.3v-1h.7v6.7h-.7v-1H5.35v1Zm.7-1.7h13.3v-3.3h-5v-5h-3.3v5h-5Zm6.65 0Z"/>
    </Icon>
  )
});

export default IconMaterialValveOutlinedW100;
