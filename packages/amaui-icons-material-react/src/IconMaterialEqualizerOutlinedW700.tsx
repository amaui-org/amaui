import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEqualizerOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerOutlinedW700'
      short_name='Equalizer'

      {...props}
    >
      <path d="M3.425 20.575V11.425H8.2V20.575ZM9.625 20.575V3.425H14.375V20.575ZM15.8 20.575V8.425H20.575V20.575Z"/>
    </Icon>
  )
});

export default IconMaterialEqualizerOutlinedW700;
