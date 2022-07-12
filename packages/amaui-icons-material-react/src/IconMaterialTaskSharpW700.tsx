import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskSharpW700'
      short_name='Task'

      {...props}
    >
      <path d="M10.95 18.025 16.875 12.1 15.175 10.4 10.95 14.625 8.825 12.5 7.125 14.2ZM3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM12.7 9.3V4.3H6.3V19.7H17.7V9.3ZM6.3 4.3V9.3V4.3V9.3V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialTaskSharpW700;
