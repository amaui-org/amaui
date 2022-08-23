import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial12mpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='12mpSharpW100Filled'
      short_name='12mp'

      {...props}
    >
      <path d="M8.9 11.1H9.6V5.9H7.4V6.6H8.9ZM12.4 11.1H16.1V10.4H13.1V8.85H16.1V5.9H12.4V6.6H15.4V8.15H12.4ZM4.3 19.7V4.3H19.7V19.7ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6Z"/>
    </Icon>
  );
});

IconMaterial12mpSharpW100Filled.displayName = 'AmauiIconMaterial12mpSharpW100Filled';

export default IconMaterial12mpSharpW100Filled;
