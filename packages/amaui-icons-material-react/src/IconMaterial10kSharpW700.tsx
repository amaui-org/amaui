import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kSharpW700'
      short_name='10k'

      {...props}
    >
      <path d="M13.675 15H15.175V12.75L16.925 15H18.7L16.425 12L18.7 9H16.925L15.175 11.25V9H13.675ZM6.15 15H7.65V9H5.3V10.5H6.15ZM8.5 15H13V9H8.5ZM10 13.5V10.5H11.5V13.5ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial10kSharpW700;
