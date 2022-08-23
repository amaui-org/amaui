import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffSharpW100'
      short_name='PowerOff'

      {...props}
    >
      <path d="M20.35 22 14.5 16.15 13.5 17.15V19.7H10.5V17.15L7.3 13.95V8.95L1.95 3.6L2.45 3.1L20.85 21.5ZM14 15.65 8 9.65V13.65L11.2 16.85V19H12.8V16.85ZM16.4 14.25 16 13.85V9H11.15L9.75 7.6V4.3H10.45V8.3H13.55V4.3H14.25V8.3H16.7V13.95ZM13.625 11.475ZM11 12.65Z"/>
    </Icon>
  );
});

IconMaterialPowerOffSharpW100.displayName = 'AmauiIconMaterialPowerOffSharpW100';

export default IconMaterialPowerOffSharpW100;
