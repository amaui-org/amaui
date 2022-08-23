import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10mpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10mpSharpW100Filled'
      short_name='10mp'

      {...props}
    >
      <path d="M8.9 11.1H9.6V5.9H7.4V6.6H8.9ZM12.15 11.1H15.85V5.9H12.15ZM12.85 10.4V6.6H15.15V10.4ZM4.3 19.7V4.3H19.7V19.7ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6Z"/>
    </Icon>
  );
});

IconMaterial10mpSharpW100Filled.displayName = 'AmauiIconMaterial10mpSharpW100Filled';

export default IconMaterial10mpSharpW100Filled;
