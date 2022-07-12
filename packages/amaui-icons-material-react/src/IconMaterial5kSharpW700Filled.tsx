import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5kSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kSharpW700Filled'
      short_name='5k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM6.7 15H11.2V11.5H8.2V10.5H11.2V9H6.7V12.5H9.7V13.5H6.7ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterial5kSharpW700Filled;
