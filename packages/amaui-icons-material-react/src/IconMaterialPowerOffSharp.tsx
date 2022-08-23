import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffSharp'
      short_name='PowerOff'

      {...props}
    >
      <path d="M19.8 22.6 14.85 17.65 14.5 18V21H9.5V18L6 14.5V8.85L1.4 4.2L2.8 2.8L21.2 21.2ZM13.4 16.25 8 10.8V13.65L11.5 17.15V19H12.5V17.15ZM17.7 14.85 16 13.15V9H11.85L8 5.15V3H10V7H14V3H16V7H18V14.5ZM13.95 11.1ZM10.7 13.525Z"/>
    </Icon>
  );
});

IconMaterialPowerOffSharp.displayName = 'AmauiIconMaterialPowerOffSharp';

export default IconMaterialPowerOffSharp;
