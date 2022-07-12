import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookSharpW700Filled'
      short_name='Book'

      {...props}
    >
      <path d="M3.15 22.85V1.15H20.85V22.85ZM11.075 4.3V11.3L13.575 9.8L16.075 11.3V4.3Z"/>
    </Icon>
  )
});

export default IconMaterialBookSharpW700Filled;
