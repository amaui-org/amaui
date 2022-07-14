import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOnSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnSharp'
      short_name='FlashlightOn'

      {...props}
    >
      <path d="M8 22V11L6 8V2H18V8L16 11V22ZM12 15.5Q11.375 15.5 10.938 15.062Q10.5 14.625 10.5 14Q10.5 13.375 10.938 12.938Q11.375 12.5 12 12.5Q12.625 12.5 13.062 12.938Q13.5 13.375 13.5 14Q13.5 14.625 13.062 15.062Q12.625 15.5 12 15.5ZM8 5H16V4H8ZM16 7H8V7.4L10 10.4V20H14V10.4L16 7.4ZM12 12Z"/>
    </Icon>
  );
});

export default IconMaterialFlashlightOnSharp;
