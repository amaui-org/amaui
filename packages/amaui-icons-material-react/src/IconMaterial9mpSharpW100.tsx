import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial9mpSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='9mpSharpW100'
      short_name='9mp'

      {...props}
    >
      <path d="M10.15 11.1H13.85V5.9H10.15V8.85H13.15V10.4H10.15ZM10.85 8.15V6.6H13.15V8.15ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial9mpSharpW100.displayName = 'AmauiIconMaterial9mpSharpW100';

export default IconMaterial9mpSharpW100;
