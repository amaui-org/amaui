import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskSharpW100Filled'
      short_name='Desk'

      {...props}
    >
      <path d="M3.4 17.35V7.4H20.6V17.35H19.9V15.35H14.975V17.35H14.275V8.1H4.1V17.35ZM14.975 10.65H19.9V8.1H14.975ZM14.975 14.65H19.9V11.35H14.975Z"/>
    </Icon>
  )
});

export default IconMaterialDeskSharpW100Filled;
