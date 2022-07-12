import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kSharpW700Filled'
      short_name='10k'

      {...props}
    >
      <path d="M13.7 15H15.2V12.75L16.95 15H18.7L16.45 12L18.7 9H16.95L15.2 11.25V9H13.7ZM6.15 15H7.65V9H5.3V10.5H6.15ZM8.5 15H13V9H8.5ZM10 13.5V10.5H11.5V13.5ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterial10kSharpW700Filled;
