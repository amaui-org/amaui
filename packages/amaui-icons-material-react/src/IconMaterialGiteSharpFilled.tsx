import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGiteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteSharpFilled'
      short_name='Gite'

      {...props}
    >
      <path d="M2 19V10L6 6H7V4H9V6H18L22 10V19ZM16 17H20V10.825L18 8.825L16 10.825ZM4 17H14V12H4Z"/>
    </Icon>
  );
});

export default IconMaterialGiteSharpFilled;
