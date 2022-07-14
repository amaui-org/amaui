import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnSharpFilled'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M6 5V2H18V5ZM12 15.5Q12.625 15.5 13.062 15.062Q13.5 14.625 13.5 14Q13.5 13.375 13.062 12.938Q12.625 12.5 12 12.5Q11.375 12.5 10.938 12.938Q10.5 13.375 10.5 14Q10.5 14.625 10.938 15.062Q11.375 15.5 12 15.5ZM8 22V11L6 8V7H18V8L16 11V22Z"/>
    </Icon>
  );
});

export default IconMaterialFlashlightOnSharpFilled;
