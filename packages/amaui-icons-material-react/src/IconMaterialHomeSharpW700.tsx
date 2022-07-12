import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSharpW700'
      short_name='Home'

      {...props}
    >
      <path d="M6.3 18.7H8.425V12.425H15.575V18.7H17.7V10.15L12 5.875L6.3 10.15ZM3.15 21.85V8.575L12 1.925L20.85 8.575V21.85H12.8V15.2H11.2V21.85ZM12 12.3Z"/>
    </Icon>
  )
});

export default IconMaterialHomeSharpW700;
