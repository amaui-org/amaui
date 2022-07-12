import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskSharpW700Filled'
      short_name='Task'

      {...props}
    >
      <path d="M10.95 18.025 16.875 12.1 15.175 10.4 10.95 14.625 8.825 12.5 7.125 14.2ZM3.15 22.85V1.15H14.35L20.85 7.65V22.85ZM12.7 9.3H17.7L12.7 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialTaskSharpW700Filled;
