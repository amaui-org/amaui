import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSharpW100'
      short_name='Power'

      {...props}
    >
      <path d="M11.2 19H12.8V16.85L16 13.65V9H8V13.65L11.2 16.85ZM10.5 19.7V17.15L7.3 13.95V8.3H9.75V4.3H10.45V8.3H13.55V4.3H14.25V8.3H16.7V13.95L13.5 17.15V19.7ZM12 14V9V14Z"/>
    </Icon>
  );
});

IconMaterialPowerSharpW100.displayName = 'AmauiIconMaterialPowerSharpW100';

export default IconMaterialPowerSharpW100;
