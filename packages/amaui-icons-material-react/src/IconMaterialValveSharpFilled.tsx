import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialValveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveSharpFilled'
      short_name='Valve'

      {...props}
    >
      <path d="M11 8V5H7V3h10v2h-4v3ZM4 21v-8h2v1h3v-3H8V9h8v2h-1v3h3v-1h2v8h-2v-1H6v1Z"/>
    </Icon>
  );
});

IconMaterialValveSharpFilled.displayName = 'AmauiIconMaterialValveSharpFilled';

export default IconMaterialValveSharpFilled;
