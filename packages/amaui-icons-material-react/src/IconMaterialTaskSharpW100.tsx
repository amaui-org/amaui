import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskSharpW100'
      short_name='Task'

      {...props}
    >
      <path d="M10.95 16.525 15.7 11.775 15.2 11.275 10.95 15.525 8.8 13.375 8.3 13.875ZM5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM14.3 7.7V4H6V20H18V7.7ZM6 4V7.7V4V7.7V20Z"/>
    </Icon>
  );
});

IconMaterialTaskSharpW100.displayName = 'AmauiIconMaterialTaskSharpW100';

export default IconMaterialTaskSharpW100;
