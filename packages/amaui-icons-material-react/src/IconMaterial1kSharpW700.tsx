import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kSharpW700'
      short_name='1k'

      {...props}
    >
      <path d="M12 15H13.5V12.75L15.25 15H17.025L14.75 12L17.025 9H15.25L13.5 11.25V9H12ZM8.5 15H10V9H7V10.5H8.5ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial1kSharpW700;
