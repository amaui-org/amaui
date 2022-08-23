import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2mpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2mpSharpW100Filled'
      short_name='2mp'

      {...props}
    >
      <path d="M10.15 5.9V6.6H13.15V8.4H10.15V11.6H13.85V10.9H10.85V9.1H13.85V5.9ZM4.3 19.7V4.3H19.7V19.7ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6Z"/>
    </Icon>
  );
});

IconMaterial2mpSharpW100Filled.displayName = 'AmauiIconMaterial2mpSharpW100Filled';

export default IconMaterial2mpSharpW100Filled;
