import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kSharpW700Filled'
      short_name='1k'

      {...props}
    >
      <path d="M12 15H13.5V12.75L15.25 15H17L14.75 12L17 9H15.25L13.5 11.25V9H12ZM8.5 15H10V9H7V10.5H8.5ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterial1kSharpW700Filled;
