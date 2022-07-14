import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffSharpFilled'
      short_name='FlashlightOff'

      {...props}
    >
      <path d="M8 22V10.8L1.4 4.2L2.8 2.8L21.2 21.2L19.8 22.6L16 18.8V22ZM6 3.15V2H18V5H7.85ZM16 13.15 9.85 7H18V8L16 11Z"/>
    </Icon>
  );
});

export default IconMaterialFlashlightOffSharpFilled;
