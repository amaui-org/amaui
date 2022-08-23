import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial14mpSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='14mpSharpW100'
      short_name='14mp'

      {...props}
    >
      <path d="M8.9 11.1H9.6V5.9H7.4V6.6H8.9ZM14.7 11.1H15.4V9.6H16.7V8.9H15.4V5.9H14.7V8.9H12.7V5.9H12V9.6H14.7ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM6.4 18.1H7.1V13.6H8.9V16.6H9.6V13.6H11.4V18.1H12.1V12.9H6.4ZM13.9 18.1H14.6V16.6H17.6V12.9H13.9ZM14.6 13.6H16.9V15.9H14.6ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial14mpSharpW100.displayName = 'AmauiIconMaterial14mpSharpW100';

export default IconMaterial14mpSharpW100;
