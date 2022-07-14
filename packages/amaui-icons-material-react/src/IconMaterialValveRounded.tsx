import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialValveRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveRounded'
      short_name='Valve'

      {...props}
    >
      <path d="M11 8V5H7V3h10v2h-4v3ZM4 21v-8h2v1h3v-3H8V9h8v2h-1v3h3v-1h2v8h-2v-1H6v1Zm2-3h12v-2h-5v-5h-2v5H6Zm6 0Z"/>
    </Icon>
  );
});

export default IconMaterialValveRounded;
