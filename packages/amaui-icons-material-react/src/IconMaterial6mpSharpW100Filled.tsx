import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial6mpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='6mpSharpW100Filled'
      short_name='6mp'

      {...props}
    >
      <path d="M10.15 11.1H13.85V8.15H10.85V6.6H13.85V5.9H10.15ZM10.85 10.4V8.85H13.15V10.4ZM4.3 19.7V4.3H19.7V19.7ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6Z"/>
    </Icon>
  );
});

IconMaterial6mpSharpW100Filled.displayName = 'AmauiIconMaterial6mpSharpW100Filled';

export default IconMaterial6mpSharpW100Filled;
