import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBurstModeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeSharpW100'
      short_name='BurstMode'

      {...props}
    >
      <path d="M6.3 17.7V6.3H7V17.7ZM2 17.7V6.3H2.7V17.7ZM10.6 17.7V6.3H22V17.7ZM11.3 17H21.3V7H11.3ZM12.9 14.7H19.7L17.7 12L15.8 14.5L14.4 12.65ZM11.3 7V17Z"/>
    </Icon>
  );
});

IconMaterialBurstModeSharpW100.displayName = 'AmauiIconMaterialBurstModeSharpW100';

export default IconMaterialBurstModeSharpW100;
