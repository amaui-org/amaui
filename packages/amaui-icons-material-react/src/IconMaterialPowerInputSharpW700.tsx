import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerInputSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputSharpW700'
      short_name='PowerInput'

      {...props}
    >
      <path d="M1.425 11V7.85H21.575V11ZM1.425 16.15V13H6.8V16.15ZM8.8 16.15V13H14.2V16.15ZM16.2 16.15V13H21.575V16.15Z"/>
    </Icon>
  )
});

export default IconMaterialPowerInputSharpW700;
