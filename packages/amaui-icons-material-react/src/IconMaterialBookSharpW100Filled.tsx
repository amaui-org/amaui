import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookSharpW100Filled'
      short_name='Book'

      {...props}
    >
      <path d="M5.3 20.7V3.3H18.7V20.7ZM12.3 4V9.85L14.15 8.75L16 9.85V4Z"/>
    </Icon>
  )
});

export default IconMaterialBookSharpW100Filled;
