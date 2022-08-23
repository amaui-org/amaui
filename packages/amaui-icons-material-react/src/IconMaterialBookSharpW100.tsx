import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookSharpW100'
      short_name='Book'

      {...props}
    >
      <path d="M5.3 20.7V3.3H18.7V20.7ZM6 20H18V4H16V9.85L14.15 8.75L12.3 9.85V4H6ZM12.3 4H14.15H16ZM6 4H12.3H14.15H16H18H6Z"/>
    </Icon>
  );
});

IconMaterialBookSharpW100.displayName = 'AmauiIconMaterialBookSharpW100';

export default IconMaterialBookSharpW100;
